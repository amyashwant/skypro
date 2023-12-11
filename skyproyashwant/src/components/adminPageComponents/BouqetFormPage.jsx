import React, { useState } from 'react';
import PortalHeader from './adminHeader.jsx/PortalHeader';

const BouqetFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    broadcaster: 'Select Broadcaster',
    channels: "",
    image: null,
  });

  return (
    <PortalHeader>
    <form className='broadcaster-form p-5 m-5'>
      <div className="mb-3">
        <label className="form-label">Bouquet Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Bouquet Price:</label>
        <input
          type="text"
          className="form-control"
          name="price"
          value={formData.price}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Broadcaster Name:</label>
        <input
          type="text"
          className="form-control"
          name="price"
          value={formData.price}
        />
      </div>
      

      <div className="mb-3">
        <label className="form-label checkbox">Channel:</label>
        <select
          className="form-select"
          name="channels"
          value={formData.channels}
        //   onChange={handleInputChange}
        //   multiple 
        >
          <option value="Channel1">Channel</option>
          <option value="Channel1">Channel</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </PortalHeader>
  );
};

export default BouqetFormPage;
