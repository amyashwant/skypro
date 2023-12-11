import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import PortalHeader from './adminHeader.jsx/PortalHeader';

const channels = [
    'star plus',
    'mtv',
    'aat tak'
];

const broadcasters = [
    'Discovery Communications India',
    'Celebrities Management Pvt Ltd',
    "Eenadu Television Pvt Ltd"
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const BouqetFormPage = () => {


   const [broadcastername, setBroadcasterName] = useState([]);
   const [channelName, setchannelName] = useState([]);

  const handleBroadcasterChange = (event) => {
    const {
      target: { value },
    } = event;
    setBroadcasterName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChannelChange = (event) => {
    const {
      target: { value },
    } = event;
    setchannelName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

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

      <div>
      <FormControl sx={{ m: 1, width: 600 }}>
        <InputLabel id="demo-multiple-checkbox-label">Broadcaster</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={broadcastername}
          onChange={handleBroadcasterChange}
          input={<OutlinedInput label="Broadcaster" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {broadcasters.map((broadcaster) => (
            <MenuItem key={broadcaster} value={broadcaster}>
              <Checkbox checked={broadcastername.indexOf(broadcaster) > -1} />
              <ListItemText primary={broadcaster} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
      
    <div>
    <FormControl sx={{ m: 1, width: 600 }}>
        <InputLabel id="demo-multiple-checkbox-label">Channel Type</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={channelName}
          onChange={handleChannelChange}
          input={<OutlinedInput label="Channel Type" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {channels.map((channel) => (
            <MenuItem key={channel} value={channel}>
              <Checkbox checked={channelName.indexOf(channel) > -1} />
              <ListItemText primary={channel} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </PortalHeader>
  );
};

export default BouqetFormPage;
