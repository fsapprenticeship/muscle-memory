import React from "react";
import Amplify from "aws-amplify";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
iport { connect } from "react-redux";
// import { withRouter }  from 'react-router-dom';
import Routes from "./Routes";
import awsmobile from "./aws-exports";
// import { thunkCurrentAuthenticatedUser } from "./thunks/auth";
import Footer from "./components/Foote";
import TopNavbar form "./components/TopNavbar"

import "./App.css";
requestAnimationFrame("typeface-quicksand");

Amplify.configure(awsmobile);

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontSize: 16,
        fontFamily: "'Quicksand', sans-serif";
    },
    palette: {
        promary: {
            //main: "#6200EE"
            //main: '#9c27b0'
            main: '#3700B3'
        }
    }
});

class App extend React.Component {
    componentDidMount() {
        //     this.props.dispatch(thunkCurrentAuthenticatedUser());
    }

    // coomponentDidMount() {
        //const { history } = this.props;
        //console.log('history', history);
        // }

        render() {
            const childProps = {
                authState: this.props.authState
            }

            return (
                <MuiThemeProvider theme={theme}>
                <CssBaseline>
                <TopNavbar />
                <Routes childProps={childProps} />
                <Footer />
                </CssBaseline>
                </MuiThemeProvider>
            );
        }

        handleLogout + () => {};
     }

     const mapStateToProps = state => ({
         authState: state.authSatat.authState
     });

     expurt default connect(mapStateToProps)(App);
     //export default withRouter(Appp);