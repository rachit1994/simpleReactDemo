import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import yellow from 'material-ui/colors/yellow';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: blue['700'],
      main: blue.A700,
      dark: blue[700],
      contrastText: '#ffffff'
    },
    secondary: {
      light: yellow['300'],
      main: yellow['500'],
      dark: yellow['700'],
      contrastText: '#000'
    }
  }
});

export default muiTheme;
