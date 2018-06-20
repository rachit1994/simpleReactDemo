// import npm packages
import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Snackbar from '@material-ui/core/Snackbar';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Icon from '@material-ui/core/Icon';

// import files from local file system
import { getAlertMessage, isOpen } from './selectors';
import IconStyled from './IconStyled';
import MessageStyled from './MessageStyled';
import reducer from './reducer';
import { setAlertMessage, isOpenAlert } from './actions';
import Style from './Style'; // <----- this file use for inline style in development

class SnackbarAlert extends React.PureComponent {
  // check wether the message is for warning, error or success
  checkType(type) {
    switch (type) {
      case 'warning':
        return (
          <IconStyled
            item
            xs={1}
            color="#efad0e"
            style={Style.IconStyled || {}}
          >
            <Icon>warning</Icon>
          </IconStyled>
        );
        break;
      case 'error':
        return (
          <IconStyled
            item
            xs={1}
            color="#D50000"
            style={Style.IconStyled || {}}
          >
            <Icon>error_outline</Icon>
          </IconStyled>
        );
        break;
      case 'success':
        return (
          <IconStyled
            item
            xs={1}
            color="#66BB6A"
            style={Style.IconStyled || {}}
          >
            <Icon>check_circle_outline</Icon>
          </IconStyled>
        );
        break;
      default:
        return '';
        break;
    }
  }
  // Call automatically after few second of open snackbar
  closeAlert() {
    this.props.isOpenAlert(false);
  }
  render() {
    const { getMessage } = this.props;
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={3000}
        onClose={() => this.closeAlert()}
        open={this.props.isOpen}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={
          <div id="message-id">
            {this.checkType(getMessage.type)}&nbsp;&nbsp;
            <MessageStyled item xs={11} style={Style.MessageStyled || {}}>
              {getMessage.message}
            </MessageStyled>
          </div>
        }
      />
    );
  }
}

SnackbarAlert.propTypes = {
  setAlertMessage: PropTypes.func.isRequired,
  isOpenAlert: PropTypes.func.isRequired,
  getMessage: PropTypes.object,
  isOpen: PropTypes.bool
};

export function mapDispatchToProps(dispatch) {
  return {
    setAlertMessage: data => dispatch(setAlertMessage(data)),
    isOpenAlert: isOpen => dispatch(isOpenAlert(isOpen))
  };
}

const mapStateToProps = createStructuredSelector({
  getMessage: getAlertMessage(),
  isOpen: isOpen()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'errorMessage', reducer });
// const withSaga = injectSaga({ key: 'message', saga });

export default compose(withReducer, withConnect)(SnackbarAlert);
