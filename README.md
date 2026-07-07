# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

---

## Form Submissions: Google Sheets Integration Guide

To store your **MYHAI** application form submissions directly into a Google Sheet in real-time, follow this step-by-step setup using **Google Apps Script** (completely free & no database required).

### Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it something descriptive, e.g., `MyHAI Form Submissions`.
3. Set the column headers in the first row (A1 to H1):
   - **Column A**: `Timestamp`
   - **Column B**: `First Name`
   - **Column C**: `Email`
   - **Column D**: `Phone Dial Code`
   - **Column E**: `Phone Number`
   - **Column F**: `Web Hosting`
   - **Column G**: `Project Description`
   - **Column H**: `Page URL`

### Step 2: Open and Configure Apps Script
1. Inside your Google Sheet, click on **Extensions** in the top menu and select **Apps Script**.
2. Delete any boilerplate code inside the editor (`Code.gs`) and paste the following script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    const app = data.application || {};
    
    // Append a new row to the sheet
    sheet.appendRow([
      new Date(),
      app.first_name || '',
      app.email_address || '',
      app.country_code ? '+' + app.country_code : '',
      app.phone_number || '',
      app.web_hosting || '',
      app.project_description || '',
      app.page_url || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*');
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*');
  }
}

// Support CORS preflight requests
function doOptions(e) {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}
```

3. Click the **Save** icon (floppy disk) at the top of the editor.

### Step 3: Deploy the Script as a Web App
1. Click the **Deploy** button in the top-right corner and select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `MyHAI Form Submission Handler`
   - **Execute as**: `Me (your-google-email@gmail.com)`
   - **Who has access**: `Anyone` *(Crucial: This must be set to 'Anyone' so the website can submit data).*
4. Click **Deploy**.
5. Google will ask you to **Authorize Access**. Click "Authorize Access", choose your Google account, click on "Advanced", and click "Go to Untitled project (unsafe)" to grant the script access to edit your sheet.
6. Copy the generated **Web app URL** (e.g., `https://script.google.com/macros/s/AKfycb.../exec`).

### Step 4: Update Your React Code
1. Open the [ApplicationForm.jsx](src/components/ApplicationForm.jsx) file.
2. Inside `handleSubmit(hostingVal)`, add a secondary fetch request to send data to your Google Sheets Web App URL:

```javascript
// Replace this with your Google Sheet Web App URL copied in Step 3
const GOOGLE_SHEETS_URL = 'PASTE_YOUR_COPIED_GOOGLE_SHEETS_WEB_APP_URL_HERE';

try {
  // 1. Existing Vercel DB API submission
  await fetch('https://fwg-apply-form-api.vercel.app/api/applyform/paste', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ application: payload })
  });

  // 2. Google Sheets submission
  await fetch(GOOGLE_SHEETS_URL, {
    method: 'POST',
    mode: 'no-cors', // Avoids CORS issues on client side redirects
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ application: payload })
  });
  
  setStep(6); // Go to success page
} catch (err) {
  // Handle submission error...
}
```
