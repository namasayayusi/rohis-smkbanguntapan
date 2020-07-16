import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Logo from "../../images/logo1.png";

import Artikel from "../../images/artikel-icon.png";
import Event from "../../images/kalender-icon.png";
import Donasi from "../../images/donasi-icon.png";
import Video from "../../images/video-icon.png";

import bg from "../../images/background.png";
import IconMasjid from "../../images/background1.png";

import { Link } from "react-router-dom";

import useStyles from "./styles";

export default function Home() {


  const classes = useStyles();
  return <>
  <CssBaseline />
      <Container maxWidth="xs" style={{ backgroundSize: "cover", height: "100vh", overflow: "scroll", backgroundImage: `url(${bg})` }}>
      <div>
        <img style={{ display: "block", marginLeft: "auto", marginRight: "auto", paddingTop: "10%", width: "25%", paddingBottom: "20px" }} src={Logo} alt="Logo" />
        <Typography style={{ textAlign: "center", fontWeight: "bold", fontSize: 30, color: "white" }}>ROHIS</Typography>
        <Typography style={{ textAlign: "center", fontWeight: "400", fontSize: 20, color: "white", marginTop:"-10px" }}>SMK 1 Banguntapan Bantul</Typography>

        <div className={classes.bungkusMenuSatu}>
        <div className={classes.menuSatuArtikel}>
              {/* ------ menu Artikel ------ */}
              {/* <a
                className={classes.decoration}
                href="https://muslimgoonline.com/silaturahmi-app/artikel"
              > */}
              <Link to='/artikel'>
                <div className={classes.paper}>
                    <img className={classes.gambar} src={Artikel} alt="Artikel" />
                    <Typography
                      variant="h5"
                      component="h1"
                      className={classes.title}
                    >
                      Artikel
                    </Typography>
                  </div>
              </Link>
            </div>
            
            <div className={classes.menuSatuEvent}>
              {/* ------ menu Event ------ */}
              {/* <a
                className={classes.decoration}
                href="https://muslimgoonline.com/silaturahmi-app/event"
              > */}
              <Link to='/event'>
                <div className={classes.paper}>
                    <img className={classes.gambar} src={Event} alt="Event" />
                    <Typography
                      variant="h5"
                      component="h1"
                      className={classes.title}
                    >
                      Event
                    </Typography>
                  </div>
              </Link>
            </div>
          </div>

          <div className={classes.bungkusMenuDua}>
          <div className={classes.menuDuaDonasi}>
              {/* ------ menu Donasi ------ */}
              {/* <a
                className={classes.decoration}
                href="https://muslimgoonline.com/silaturahmi-app/donasi"
              > */}
              <Link to='/donasi'>
                <div className={classes.paper}>
                  <img className={classes.gambar} src={Donasi} alt="Donasi" />
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Donasi
                  </Typography>
                </div>
              </Link>
            </div>
            <div className={classes.menuDuaVideo}>
              {/* ------ menu Video ------ */}
              {/* <a
                className={classes.decoration}
                href="https://muslimgoonline.com/aplikasi-marketing-syariah/artikel"
              > */}
              <Link to='/video'>
                <div className={classes.paper}>
                  <img className={classes.gambar} src={Video} alt="Video" />
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Video
                  </Typography>
                </div>
              </Link>
            </div>
          </div>
      </div>
      </Container>
</>
}
