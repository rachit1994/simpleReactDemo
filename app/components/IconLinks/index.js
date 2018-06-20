import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icons from './Icons';
import HoveredLinks from './HoveredLinks';

const ButtonLinks = ({ url, variant, icon }) => (
  	<Icons
  		color="inherit"
  		component={HoveredLinks}
  		href={url}
  		variant="fab"
      mini
  	>
      {icon}
    </Icons>
);

ButtonLinks.propTypes = {
	url: PropTypes.string.isRequired,
	variant: PropTypes.string
};

export default ButtonLinks;