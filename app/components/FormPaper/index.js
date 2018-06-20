import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const FormPaper = ({ children, title }) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
  >
    <Grid
      item
    >
      <Paper style={{ padding: 20, maxWidth: 800 }}>
        <Typography variant="title" color="inherit"> { title } </Typography>
        { children }
      </Paper>
    </Grid>
  </Grid>
)

export default FormPaper;