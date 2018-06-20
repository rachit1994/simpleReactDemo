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

import saga from './saga';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value, name, validate) {
    console.log('name, validate', value, name, validate);
    this.props.setFields(name, value);
  }

  handleSubmit() {
    console.log('here', this.props.fieldValue);
    this.props.callApi(this.props.fieldValue);
  }

  render() {
    const fields = [
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

    return (
      <Form
        title="Login"
        fields={fields}
        handleOnChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
};

export function mapDispatchToProps(dispatch) {
  return {
    setFields: (name, value) => dispatch(setFields(name, value)),
    callApi: (fields) => dispatch(callAPI(fields)),
  }
}

const mapStateToProps = createStructuredSelector({
  fieldValue: getContact()
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
