import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import bg from "../../images/background.png";

export default function Artikel() {
    return <>
    <CssBaseline />
        <Container maxWidth="xs" style={{ backgroundSize: "cover", height: "100vh", overflow: "scroll", backgroundImage: `url(${bg})` }}>
            <div>
                <div style={{ padding: "20px" }}>
                    <Typography style={{ textAlign: "center", fontWeight: "bold", fontSize: 30, color: "white" }}>ROHIS</Typography>
                    <Typography style={{ textAlign: "center", fontWeight: "400", fontSize: 20, color: "white", marginTop:"-10px" }}>SMK 1 Banguntapan Bantul</Typography>
                </div>
                <Typography style={{ textAlign: "center", color: "white" }}>Selamat Datang di Halaman Artikel</Typography>
            </div>
        </Container>
  </>
  }