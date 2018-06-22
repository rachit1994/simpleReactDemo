import React from 'react';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const FormBuilder = ({ labels, handleOnChange, values, error, submitForm }) => (
  <form>
    {
      labels &&
      _.isArray(labels) &&
      labels.length > 0 &&
      _.map(labels, (obj) => (
        <TextField
          id={obj.label}
          key={obj.label}
          label={obj.label}
          onChange={ e => handleOnChange( e.target.value, obj.name, obj.validate )}
          value={ values && values[obj.name]}
          margin="normal"
          fullWidth
          required
          helperText={error && error[obj.name]}
          error={error && error[obj.name] ? true : false}
        />
      ))
    }

    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Button
          variant="raised"
          color="primary"
          size="large"
          fullWidth
          onClick={() => submitForm()}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  </form>
);

export default FormBuilder;