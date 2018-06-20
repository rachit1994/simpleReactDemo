// import npm packages
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';

// import files from local file system
import appConfig from './../app-config';
import { getNavTabs } from './../components/appHeader/navTabs';

export default function redirectToApp(Component) {
  class RedirectToAppComponent extends React.Component {
    static contextTypes = {
      router: React.PropTypes.object.isRequired,
    };

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      if (this.props.loggedIn) {
        if (this.props.userCredentials && this.props.userCredentials.data) {
          const navTabs = getNavTabs(
						this.props.userCredentials.data.rolesResources,
					);
          browserHistory.push(navTabs[0].route);
        } else {
          browserHistory.push(`${appConfig.CDMS_APP_ROUTE_BASE_URL}home`);
        }
      }
    }

    render() {
      return <Component {...this.props} />;
    }
	}

  const mapStateToProps = state => ({
    loggedIn: state.LoginReducer.isAuthenticated,
    userCredentials: state.LoginReducer.userCredentials,
  });

  return connect(mapStateToProps)(RedirectToAppComponent);
}
