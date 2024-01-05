import React, { useState, useEffect } from "react";
import counterOne from "../../../assets/images/home-01/about/counter-bg.png";

const CounterPage = () => {
  const [counters, setCounters] = useState([
    { label: "CONNECTION PROVIDED", target: 250, value: 0, interval: 10 },
    { label: "CLIENT IN THE WORLD", target: 40, value: 0, interval: 10 },
    { label: "SATELLITE CHANNELS", target: 450, value: 0, interval: 10 },
    { label: "CONNECTION PROVIDED", target: 252, value: 0, interval: 10 },
  ]);

  useEffect(() => {
    const updateCounter = (index) => {
      setCounters((prevCounters) => {
        const updatedCounters = [...prevCounters];
        const counter = updatedCounters[index];

        counter.value =
          counter.value + 1 > counter.target ? counter.target : counter.value + 1;

        return updatedCounters;
      });
    };

    const intervals = counters.map((counter, index) => {
      return setInterval(() => updateCounter(index), counter.interval);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [counters]);

  return (
    <section
      className="counterup bg-img pb-100 pt-50"
      style={{
        backgroundImage: `url(${counterOne})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center gy-md-5 gy-4">
          {counters.map((counter, index) => (
            <div className="col-xl-3 col-lg-3 col-sm-6" key={index}>
              <div className="counterup-item d-flex align-items-center">
                <div className="icon">
                  <span className={`icon-${index}`}></span>
                </div>
                <div className="content">
                  <div className="number">
                    <h2 className="title">
                      <span className="" data-odometer-final={counter.target}>
                        {counter.value}
                      </span>
                      {index === 0 ? "K" : "M"}
                    </h2>
                  </div>
                  <h6 className="text">{counter.label}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterPage;
