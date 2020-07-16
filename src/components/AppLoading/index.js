import React from "react";

import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

function AppLoading() {
  const classes = useStyles();

  return (
    <Container className={classes.loadingBlock} maxWidth="xs">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h6" component="h2" className={classes.title}>
          Rohis SMK 1 Banguntapan Bantul
        </Typography>
        <LinearProgress />
      </div>
    </Container>
  );
}

export default AppLoading;
