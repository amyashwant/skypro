import React from 'react';

const ViewMoreSection = () => {
  const accordionData = [
    {
      id: 1,
      broadCaster: 'Premium Hindi HD',
      bouquet: ["Hindi News Aaj Tak Pack","Family Pack","Ala-carte","Ala-carte","Ala-carte"],
      channels: [
        { id: 1, channleImage: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' }, 
        { id: 2, channleImage: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
      ],
    },
    {
      id: 2,
      broadCaster: 'Hamara Punjabi Plus HD Combo',
      bouquet: ["HD Infotainmentbn Kids Pack","Family Pack","Hindi News Aaj Tak Pack","Bouquet -3","Ala-carte","Ala-carte"],
      channels: [
        { id: 1, channleImage: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 2, channleImage: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 3, channleImage: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
      ],
    },
    {
      id: 3,
      broadCaster: 'Value Lite Hindi HD',
      bouquet: ["Basic Infotainment HD Pack","Family Pack","IN10 Bouquet","Colors Wala HindiBudget Plus HD","Ala-carte"],
      channels: [
        { id: 1, channleImage: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 2, channleImage: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 3, channleImage: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 4, channleImage: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 5, channleImage: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 6, channleImage: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
      ],
    },
  ];

  return (
    <>
       <section className="Accordion-Div">
        <div className="container">
          <h2>Hindi Gold HD Suggestive Bouquet:</h2>
          <h3>Price: 234*/-per month</h3>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            {accordionData.map((accordionItem) => (
              <div className="accordion-item" key={accordionItem.id}>
                <h2 className="accordion-header" id={`panelsStayOpen-heading${accordionItem.id}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#panelsStayOpen-collapse${accordionItem.id}`}
                    aria-expanded="true"
                    aria-controls={`panelsStayOpen-collapse${accordionItem.id}`}
                  >
                    {accordionItem.broadCaster} 
                  </button>
                </h2>
                <div
                  id={`panelsStayOpen-collapse${accordionItem.id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`panelsStayOpen-heading${accordionItem.id}`}
                >
                  <div className="accordion-body">
                    <div className="accordion-innerDiv">
                      <strong>Bouquets:</strong>
                        {accordionItem.bouquet.map((bouquet, index) => (
                          <span key={index}>&nbsp; {bouquet},</span>
                        ))}
                    </div>
                    <ul className="accordion-innerDiv">
                      {accordionItem.channels.map((item) => (
                        <li key={item.id}>
                          <img src={item.channleImage} alt={item.label} />
                          <span>{item.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewMoreSection;
