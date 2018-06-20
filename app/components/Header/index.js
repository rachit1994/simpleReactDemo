import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonLinks from 'components/ButtonLinks';
import { FlexGrow } from 'components/FlexGrow';
import HeaderLinks from './HeaderLinks';
import Link from 'components/Links';

const Header = ({ classes, appBarPosition, title, options, currentUser }) => (
  <FlexGrow className={classes && classes.root}>
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant="title" color="inherit" style={{ flex: 1 }}>
          <Link to="/">{title}</Link>
        </Typography>
        <HeaderLinks>
        {
          options && options.length > 0 && options.map(item => (
            <ButtonLinks
              key={item.name}
              url={item.url}
              text={item.name}
              variant={item.variant || 'flat'}
            />
          ))
        }
        </HeaderLinks>
      </Toolbar>
    </AppBar>
  </FlexGrow>
);

Header.propTypes = {
  classes: PropTypes.object,
  appBarPosition: PropTypes.string,
  title: PropTypes.string.isRequired,
  options: PropTypes.array,
  currentUser: PropTypes.object
};

export default Header;
