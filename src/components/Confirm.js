import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;

    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(occupation);
    // console.log(city);
    // console.log(bio);

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
      <div style={styles.root}>
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
                Confirm
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Grid container spacing={24}>
            <Grid item xs />
            <Grid item xs>
              <List>
                <ListItem>
                  <ListItemText primary="First Name" secondary={firstName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Last Name" secondary={lastName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email" secondary={email} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Occupation" secondary={occupation} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="City" secondary={city} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Bio" secondary={bio} />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={this.continue}
            style={styles.button}
          >
            Confirm & Continue
          </Button>
          <Button variant="contained" color="default" onClick={this.back}>
            Back
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Confirm;
