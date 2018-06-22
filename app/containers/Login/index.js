import React from 'react';
import { Helmet } from 'react-helmet';
import Form from 'components/Form';
import _ from 'lodash';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import { setFields, setError, callAPI } from './action';
import { getContact, getContactError } from './selector';
import formValidation from 'utils/formValidation';

import saga from './saga';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.formValidate = this.formValidate.bind(this);

    this.fields = [
      {
        name: 'email',
        label: 'Email',
        validate: ['email', 'required']
      },
      {
        name: 'password',
        label: 'password',
        validate: ['password', 'required']
      }
    ];

  }

  handleChange(value, name, validate) {
    this.props.setFields(name, value);
  }

  formValidate() {
    const { fieldValue, setError } = this.props;
    let valid = true;
    this.fields.map((values) => {
      setError(values.name, '');
      values.validate.map((v) => {
        if(!formValidation[v](fieldValue[values.name])) {
          console.log('inside if', v);
          valid = false;
          let message = 'This field has error';
          if(v == 'required') {
            message = 'This field is required';
          }
          console.log('message', message);
          setError(values.name, message);
        }
      });
    });
    if(valid) {
      this.props.callApi(this.props.fieldValue);
    }
  }

  render() {
    
    return (
      <Form
        title="Login"
        fields={this.fields}
        handleOnChange={this.handleChange}
        handleSubmit={this.formValidate}
        errors={this.props.errors}
      />
    )
  }
};

export function mapDispatchToProps(dispatch) {
  return {
    setFields: (name, value) => dispatch(setFields(name, value)),
    callApi: (fields) => dispatch(callAPI(fields)),
    setError: (field, error) => dispatch(setError(field, error)),
  }
}

const mapStateToProps = createStructuredSelector({
  fieldValue: getContact(),
  errors: getContactError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga
)(Login);
