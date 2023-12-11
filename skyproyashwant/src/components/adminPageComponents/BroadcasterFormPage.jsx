import React, { useState } from 'react';
import PortalHeader from './adminHeader.jsx/PortalHeader';

const BroadcasterFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    broadcaster: 'Select Broadcaster',
    channel: false,
    image: null,
  });

  return (
    <PortalHeader>
    <form className='broadcaster-form p-5 m-5'>
      <div className="mb-3">
        <label className="form-label">Broadcaster Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Image:</label>
        <input
          type="file"
          className="form-control"
          name="image"
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </PortalHeader>
  );
};

export default BroadcasterFormPage;
