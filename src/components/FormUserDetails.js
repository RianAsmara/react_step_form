import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import blue from "@material-ui/core/colors/blue";

const primary = blue[500];

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    const styles = {
      root: {
        flexGrow: 1
      },
      grow: {
        flexGrow: 1
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20
      },
      button: {
        margin: 15,
        backgroundColor: "#2196f3"
      }
    };

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" style={{ background: "#2196f3" }}>
            <Toolbar>
              <IconButton
                style={styles.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" style={styles.grow}>
                User Details
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <br />
          <TextField
            label="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <br />
          <TextField
            label="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <br />
          <TextField
            label="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={this.continue}
            style={styles.button}
          >
            Continue
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default FormUserDetails;
