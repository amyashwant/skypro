import React, { useEffect, useState } from 'react';
import PortalHeader from './adminHeader.jsx/PortalHeader';
import axios from 'axios';
import { List, Paper, Typography } from '@mui/material';
import {Grid} from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';

const NewsLetterPage = () => {
  const [newsletter, setNewsletter] = useState([]);

  const getNewsletterFunc = async () => {
    const data = await axios.get('/api/contact/newsletter');
    setNewsletter(data?.data);
  };

  useEffect(() => {
    getNewsletterFunc();
  }, []);

  return (
    <PortalHeader>
      <form className="broadcaster-form p-5 m-5">
        <div className="mb-3">
          <Typography variant="h5" gutterBottom>
            Our Amazing Subscribers:
          </Typography>
          <Grid container spacing={2}>
            {newsletter?.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={6} lg={6}>
                <Paper elevation={3} style={{ margin: '5px', padding: '2px' }}>
                  <ListItem>
                    <ListItemText>
                      <Typography variant="body1">{item.email}</Typography>
                    </ListItemText>
                  </ListItem>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </form>
    </PortalHeader>
  );
};

export default NewsLetterPage;

