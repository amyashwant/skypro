// import React, { useState } from "react";
// import { useEffect } from "react";
// import counterOne from "../../../assets/images/home-01/about/counter-bg.png";
// const CounterPage = () => {

//   const [counter, setCounter] = useState(0)
//   const [countWorld, setCountWorld] = useState(0)
//   const [countsettelite, setCountSettelite] = useState(0)
//   const [countProvider, setCountProvider] = useState(0)
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter((prevCounter) => {
//         const nextCounter = prevCounter + 1;
//         return nextCounter > 250 ? 250 : nextCounter; 
//       });
//     }, 10);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountWorld((prevCounter) => {
//         const nextCounter = prevCounter + 1;
//         return nextCounter > 40 ? 40 : nextCounter; 
//       });
//     }, 20);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountSettelite((prevCounter) => {
//         const nextCounter = prevCounter + 1;
//         return nextCounter > 450 ? 450 : nextCounter; 
//       });
//     }, 10);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountProvider((prevCounter) => {
//         const nextCounter = prevCounter + 1;
//         return nextCounter > 252 ? 252 : nextCounter; 
//       });
//     }, 10);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <section
//       className="counterup bg-img pb-100 pt-50"
//       //   style="background-image: url(assets/images/about/counter/counter-bg.png);"
//       style={{
//         backgroundImage: `url(${counterOne})`,
//       }}
//     >
//       <div className="container">
//         <div className="row justify-content-center gy-md-5 gy-4">
//           <div className="col-xl-3 col-lg-3 col-sm-6">
//             <div className="counterup-item d-flex align-items-center">
//               <div className="icon">
//                 <span className="icon-wifi-2"></span>
//               </div>
//               <div className="content">
//                 <div className="number">
//                   <h2 className="title">
//                     <span className="" data-odometer-final="252">
//                       {counter}
//                     </span>
//                     K
//                   </h2>
//                 </div>
//                 <h6 className="text">CONNECTION PROVIDED</h6>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 col-lg-3 col-sm-6">
//             <div className="counterup-item d-flex align-items-center">
//               <div className="icon">
//                 <span className="icon-user-1"></span>
//               </div>
//               <div className="content">
//                 <div className="number">
//                   <h2 className="title">
//                     <span className="" data-odometer-final="35">
//                       {countWorld}
//                     </span>
//                     M
//                   </h2>
//                 </div>
//                 <h6 className="text">CLIENT IN THE WOLRD</h6>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 col-lg-3 col-sm-6">
//             <div className="counterup-item d-flex align-items-center">
//               <div className="icon">
//                 <span className="icon-satellite-dish"></span>
//               </div>
//               <div className="content">
//                 <div className="number">
//                   <h2 className="title">
//                     <span className="" data-odometer-final="460">
//                       {countsettelite}
//                     </span>
//                     K
//                   </h2>
//                 </div>
//                 <h6 className="text">SATTELLITE CHANNELE</h6>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 col-lg-3 col-sm-6">
//             <div className="counterup-item d-flex align-items-center">
//               <div className="icon">
//                 <span className="icon-wifi-2"></span>
//               </div>
//               <div className="content">
//                 <div className="number">
//                   <h2 className="title">
//                     <span className="" data-odometer-final="252">
//                       {countProvider}
//                     </span>
//                     K
//                   </h2>
//                 </div>
//                 <h6 className="text">CONNECTION PROVIDED</h6>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CounterPage;

import React, { useState, useEffect } from "react";
import counterOne from "../../../assets/images/home-01/about/counter-bg.png";

const CounterPage = () => {
  const [counters, setCounters] = useState([
    { label: "CONNECTION PROVIDED", target: 250, value: 0, interval: 10 },
    { label: "CLIENT IN THE WOLRD", target: 40, value: 0, interval: 10 },
    { label: "SATTELLITE CHANNELE", target: 450, value: 0, interval: 10 },
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



// {/* <section
//       className="counterup bg-img pb-100 pt-50"
//       //   style="background-image: url(assets/images/about/counter/counter-bg.png);"
//       style={{
//         backgroundImage: `url(${counterOne})`,
//       }}
//     >
//       <div className="container">
//         <div className="row justify-content-center gy-md-5 gy-4">
//           <div className="col-xl-3 col-lg-3 col-sm-6">
//             <div className="counterup-item d-flex align-items-center">
//               <div className="icon">
//                 <span className="icon-wifi-2"></span>
//               </div>
//               <div className="content">
//                 <div className="number">
//                   <h2 className="title">
//                     <span className="odometer" data-odometer-final="252">
//                       0
//                     </span>
//                     K
//                   </h2>
//                 </div>
//                 <h6 className="text">CONNECTION PROVIDED</h6>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 col-lg-3 col-sm-6">
//             <div className="counterup-item d-flex align-items-center">
//               <div className="icon">
//                 <span className="icon-user-1"></span>
//               </div>
//               <div className="content">
//                 <div className="number">
//                   <h2 className="title">
//                     <span className="odometer" data-odometer-final="35">
//                       0
//                     </span>
//                     M
//                   </h2>
//                 </div>
//                 <h6 className="text">CLIENT IN THE WOLRD</h6>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 col-lg-3 col-sm-6">
//             <div className="counterup-item d-flex align-items-center">
//               <div className="icon">
//                 <span className="icon-satellite-dish"></span>
//               </div>
//               <div className="content">
//                 <div className="number">
//                   <h2 className="title">
//                     <span className="odometer" data-odometer-final="460">
//                       0
//                     </span>
//                     K
//                   </h2>
//                 </div>
//                 <h6 className="text">SATTELLITE CHANNELE</h6>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 col-lg-3 col-sm-6">
//             <div className="counterup-item d-flex align-items-center">
//               <div className="icon">
//                 <span className="icon-wifi-2"></span>
//               </div>
//               <div className="content">
//                 <div className="number">
//                   <h2 className="title">
//                     <span className="odometer" data-odometer-final="252">
//                       0
//                     </span>
//                     K
//                   </h2>
//                 </div>
//                 <h6 className="text">CONNECTION PROVIDED</h6>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section> */}
