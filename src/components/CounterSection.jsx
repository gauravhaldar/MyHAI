import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './CounterSection.css';

const counters = [
  { end: 30124, prefix: '', suffix: '', title: '# of free websites we\'ve built', duration: 2 },
  { end: 20000, prefix: '₹', suffix: '', title: 'average cost a web agency charges', duration: 2 },
  { end: 0, prefix: '₹', suffix: '', title: 'amount we charge', duration: 0.5 },
];

const CountUpComponent = CountUp.default || CountUp;

export default function CounterSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="counters" id="counters" ref={ref}>
      <div className="container">
        <div className="counters__grid">
          {counters.map((c, i) => (
            <div className="counters__item" key={i}>
              <div className="counters__label">{c.title}</div>
              <div className="counters__number">
                <span className="counters__prefix">{c.prefix}</span>
                {inView ? (
                  <CountUpComponent end={c.end} duration={c.duration} separator="," />
                ) : (
                  <span>0</span>
                )}
                <span className="counters__suffix">{c.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
