import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

import useStyles from "./styles";
import Logo from "../../images/logo1.png";

import Button from "@material-ui/core/Button";

import bg from "../../images/background.png";

import { Link } from "react-router-dom";

export default function Landing() {
  const classes = useStyles();
  return <>
  <CssBaseline />
      <Container maxWidth="xs" style={{ backgroundSize: "cover", height: "100vh", overflow: "scroll", backgroundImage: `url(${bg})` }}>
      <div className={classes.bungkusUtama} >
        <img className={classes.logo} src={Logo} alt="Logo" />
          <div style={{ padding: "20px" }}>
        <Typography style={{ textAlign: "center", fontWeight: "bold", fontSize: 30, color: "white" }}>ROHIS</Typography>
        <Typography style={{ textAlign: "center", fontWeight: "400", fontSize: 20, color: "white", marginTop:"-10px" }}>SMK 1 Banguntapan Bantul</Typography>
        <div className={classes.bungkusuntuktombol}>
          <div>
          <Button
            className={classes.tombol}
            component={Link}
            type="submit"
            color="primary"
            variant="contained"
            size="large"
            to="/login"
            >
            <p style={{color: "black", fontWeight: "bold", margin: "-1px", padding: "6px"}}>Login</p>
          </Button>
        </div>
        <div className={classes.pembatas}></div>
        <div className={classes.bungkustombol}>
          <Button
            className={classes.tombol}
            component={Link}
            variant="contained"
            size="large"
            to="/registrasi"
          >
            <p style={{color: "black", fontWeight: "bold", margin: "-1px", padding: "6px"}}>Register</p>
          </Button>
        </div>
        </div>
          </div>
        </div>
      </Container>
</>
}
