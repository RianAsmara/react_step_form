import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
      button: {
        margin: 15
      }
    };

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                User Details
              </Typography>
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
