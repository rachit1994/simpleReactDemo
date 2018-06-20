/*
	NOTE: this file use for inline style in development mode
				becuase styled component is not working in development mode but its working in production mode
*/

// check is not in production
const isDev = process.env.NODE_ENV !== 'production';
let Style = {};

if (isDev) {
  Style = {
    IconStyled: {
      float: 'left'
    },
    MessageStyled: {
      float: 'right'
    }
  };
}

export default Style;
