import React, { useState } from 'react';
import PortalHeader from './adminHeader.jsx/PortalHeader';

const LanguageFormPage = () => {
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
        <label className="form-label">Language:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </PortalHeader>
  );
};

export default LanguageFormPage;
