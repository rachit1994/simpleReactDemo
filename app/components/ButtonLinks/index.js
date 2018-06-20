import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const ButtonLinks = ({ url, text, variant }) => (
  	<Button
  		color="inherit"
  		component={Link}
  		to={url}
  		variant={variant}
  	>
    	{ text }
  	</Button>
);

ButtonLinks.propTypes = {
	url: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	variant: PropTypes.string
};

export default ButtonLinks;