import React from 'react';
import HomeImage from 'images/HomeImage.jpg';
import Typography from '@material-ui/core/Typography';

const Home = () => (
  <div style={{ position: 'relative' }}>
    <img src={HomeImage} alt="Welcome to Home" style={{ width: '100%' }} />
    <Typography
      variant="title"
      color="inherit"
      style={{ position: 'absolute', top: '10%', left: '35%', color: '#36aac1', fontSize: '2rem' }}
    >
      Hey, Please Sign in to continue
    </Typography>
  </div>
);

export default Home;