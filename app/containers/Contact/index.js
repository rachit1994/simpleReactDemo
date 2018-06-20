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

class Contact extends React.PureComponent {
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
        label: 'First Name',
        name: 'fName',
        validate: ['required']
      },
      {
        label: 'Last Name',
        name: 'lName',
        validate: ['required']
      },
      {
        label: 'Email Address',
        name: 'email',
        validate: ['email', 'required']
      },
      {
        label: 'Telephone',
        name: 'phone',
        validate: ['phone', 'required']
      },
      {
        label: 'Address',
        name: 'address',
        validate: ['required']
      },
      {
        label: 'City',
        name: 'city',
        validate: ['required']
      },
      {
        label: 'State',
        name: 'state',
        validate: ['required']
      },
      {
        label: 'Zip',
        name: 'zip',
        validate: ['required']
      },
      {
        label: 'Country',
        name: 'country',
        validate: ['required']
      },
      {
        label: 'Comments',
        name: 'comments',
        validate: ['required']
      }
    ];

    return (
      <Form
        title="Create new user"
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

const withReducer = injectReducer({ key: 'contact', reducer });
const withSaga = injectSaga({ key: 'contact', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga
)(Contact);
