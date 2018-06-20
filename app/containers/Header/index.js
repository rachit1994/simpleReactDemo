import React from 'react';

import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { getUser } from 'containers/signedInUser/selector';
import HeaderComponent from 'components/Header';

class Header extends React.PureComponent {
  render() {
    const { user } = this.props;
    if(user && user.email && user.email.length > 0) {
      this.props.options.push({
        url: '/administration',
        name: 'Administration'
      });
    }
    return (
      <HeaderComponent
        title={this.props.title}
        options={this.props.options}
      />
    );
  }
}

const mapStateToProps = createSelector(getUser(), user => ({
  user
}));

export default connect(mapStateToProps)(Header);
