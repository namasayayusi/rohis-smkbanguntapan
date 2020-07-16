import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Landing from "./pages/landing";
import Registrasi from "./pages/registrasi";
import Login from "./pages/login";
import Home from "./pages/home";
import Artikel from "./pages/artikel";
import Event from "./pages/event";
import Donasi from "./pages/donasi";
import Video from "./pages/video";
import NotFound from "./pages/404";

import FirebaseProvider from "./components/FirebaseProvider";
import { ThemeProvider } from "@material-ui/core/styles";
import PrivateRoute from "./components/PrivateRoute";
import theme from "./config/theme";
import { SnackbarProvider } from "notistack";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <FirebaseProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/registrasi" component={Registrasi} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/artikel" component={Artikel} />
              <PrivateRoute path="/event" component={Event} />
              <PrivateRoute path="/donasi" component={Donasi} />
              <PrivateRoute path="/video" component={Video} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </FirebaseProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
