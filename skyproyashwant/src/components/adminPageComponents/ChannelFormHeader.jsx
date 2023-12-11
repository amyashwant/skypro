import React, { useState } from "react";
import PortalHeader from "./adminHeader.jsx/PortalHeader";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const channels = [
  'star plus',
  'mtv',
  'aat tak'
];
const languages = [
  'Hindi',
  'English',
  'Punjabi'
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

const ChannelFormPage = () => {

  const [channelName, setchannelName] = useState([]);
  const [languageName, setlanguageName] = useState([]);

  const handleChannelChange = (event) => {
    const {
      target: { value },
    } = event;
    setchannelName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleLanguageChange = (event) => {
    const {
      target: { value },
    } = event;
    setlanguageName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
    lang: "",
    image: null, 
  });

  return (
    <PortalHeader>
      <form className="broadcaster-form p-5 m-5">
        <div className="mb-3">
          <label className="form-label">Channel Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Channel Price:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={formData.price}
          />
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

    <div>
      <FormControl sx={{ m: 1, width: 600 }}>
        <InputLabel id="demo-multiple-checkbox-label">Language</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={languageName}
          onChange={handleLanguageChange}
          input={<OutlinedInput label="Language" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {languages.map((language) => (
            <MenuItem key={language} value={language}>
              <Checkbox checked={languageName.indexOf(language) > -1} />
              <ListItemText primary={language} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

        <div className="mb-3">
          <label className="form-label">Channel Image:</label>
          <input type="file" className="form-control" name="image" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </PortalHeader>
  );
};

export default ChannelFormPage;
