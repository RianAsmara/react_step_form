import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
                Personal Details
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <br />
          <TextField
            label="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <br />
          <TextField
            label="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <br />
          <TextField
            label="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
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
          <Button variant="contained" color="default" onClick={this.back}>
            Back
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default FormPersonalDetails;
