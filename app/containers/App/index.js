/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'containers/Header';
import Home from 'components/Home';
import Contact from 'containers/Contact/Loadable';
import Login from 'containers/Login/Loadable';
import '../../../node_modules/react-vis/dist/style.css';
import SnackbarAlert from 'containers/Snackbar';
import { getUser } from 'containers/signedInUser/selector';
import Administration from 'containers/Administration/Loadable';

const options = [
  {
    url: '/',
    name: 'Home'
  },
  {
    url: '/contact',
    name: 'contact form'
  },
  {
    url: '/sign-in',
    name: 'sign in'
  }
];

export default function App() {
  return (
      <div>
        <Helmet
          titleTemplate="%s"
          defaultTitle="ReactTest"
        >
          <meta name="description" content="A real-estate website for all your needs" />
        </Helmet>
        <Header
          title="ReactTest"
          options={options}
        />
        <div style={{ margin: '7em 4em' }}>
          <SnackbarAlert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/administration" component={Administration} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
// }

// const mapStateToProps = createSelector(getUser(), user => ({
//   user
// }));

// export default connect(mapStateToProps)(App);
