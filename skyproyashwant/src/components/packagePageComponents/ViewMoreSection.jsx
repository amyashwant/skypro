import React from 'react';

const ViewMoreSection = () => {
  const accordionData = [
    {
      id: 1,
      title: 'Premium Hindi HD',
      items: [
        { id: 1, imgSrc: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 2, imgSrc: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
      ],
    },
    {
      id: 2,
      title: 'Hamara Punjabi Plus HD Combo',
      items: [
        { id: 1, imgSrc: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 2, imgSrc: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 3, imgSrc: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
      ],
    },
    {
      id: 3,
      title: 'Value Lite Hindi HD',
      items: [
        { id: 1, imgSrc: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 2, imgSrc: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 3, imgSrc: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 4, imgSrc: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 5, imgSrc: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
        { id: 6, imgSrc: 'https://www.d2h.com/MasterChannel/colors.png', label: 'Colors' },
      ],
    },
  ];

  return (
    <>
      <section className="Accordion-Div">
        <div className="container">
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
                    {accordionItem.title}
                  </button>
                </h2>
                <div
                  id={`panelsStayOpen-collapse${accordionItem.id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`panelsStayOpen-heading${accordionItem.id}`}
                >
                  <div className="accordion-body">
                    <ul className="accordion-innerDiv">
                      {accordionItem.items.map((item) => (
                        <li key={item.id}>
                          <img src={item.imgSrc} alt={item.label} />
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
