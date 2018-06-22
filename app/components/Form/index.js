import React from 'react';
import FormPaper from 'components/FormPaper';
import FormBuilder from 'components/FormBuilder';

const Form = ({ title, fields, handleOnChange, handleSubmit, errors }) => (
  <FormPaper title={title}>
    <FormBuilder
      labels={fields}
      handleOnChange={handleOnChange}
      submitForm={handleSubmit}
      error={errors}
    />
  </FormPaper>
)

export default Form;