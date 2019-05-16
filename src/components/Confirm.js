import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(occupation);
    console.log(city);
    console.log(bio);

    const styles = {
      button: {
        margin: 15
      },
      listText: {
        textColor: "black"
      }
    };

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Confirm
              </Typography>
            </Toolbar>
          </AppBar>
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
          <Button
            variant="contained"
            color="primary"
            onClick={this.continue}
            style={styles.button}
          >
            Confirm & Continue
          </Button>
          <Button
            variant="contained"
            color="default"
            onClick={this.back}
            style={styles.button}
          >
            Back
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Confirm;
