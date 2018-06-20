import React from 'react';
import FormPaper from 'components/FormPaper';
import FormBuilder from 'components/FormBuilder';

const Form = ({ title, fields, handleOnChange, handleSubmit }) => (
  <FormPaper title={title}>
    <FormBuilder labels={fields} handleOnChange={handleOnChange} submitForm={handleSubmit} />
  </FormPaper>
)

export default Form;