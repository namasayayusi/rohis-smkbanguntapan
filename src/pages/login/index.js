import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

import Logo from "../../images/logo1.png";
import User from "../../images/user-icon.png";
import Password from "../../images/password-icon.png";

import isEmail from "validator/lib/isEmail";

import { auth, useFirebase } from "../../components/FirebaseProvider";

import { Redirect } from "react-router-dom";


import bg from "../../images/background.png";

export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState({});

  const [isSubmitting, setSubmitting] = useState(false);

  const { user } = useFirebase();

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.email) {
      newErrors.email = "Email wajib diisi";
    } else if (!isEmail(form.email)) {
      newErrors.email = "Email tidak valid";
    }

    if (!form.password) {
      newErrors.password = "Password wajib diisi";
    }

    return newErrors;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const findErrors = validate();
    if (Object.values(findErrors).some(message => message !== "")) {
      setError(findErrors);
    } else {
      setSubmitting(true);
      try {
        await auth.signInWithEmailAndPassword(form.email, form.password);
      } catch (e) {
        let newError = {};
        switch (e.code) {
          case "auth/user-not-found":
            newError.email = "Email tidak terdaftar";
            break;

          case "auth/invalid-email":
            newError.email = "Email tidak valid";
            break;

          case "auth/wrong-password":
            newError.password = "Password salah";
            break;

          case "auth/user-disabled":
            newError.email = "Pengguna di blokir";
            break;

          default:
            newError.email = "Terjadi kesalahan silahkan coba lagi";
            break;
        }

        setError(newError);
      }
      setSubmitting(false);
    }
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <>
    <CssBaseline />
    <Container maxWidth="xs" style={{ backgroundSize: "cover", height: "100vh", overflow: "scroll", backgroundColor: "#F1D819", backgroundImage: `url(${bg})`, }}>
        <div style={{ padding: "30px", textAlign: "center"}}>
            <img style={{ display: "block", marginLeft: "auto", marginRight: "auto", paddingTop: "20%", width: "40%", paddingBottom: "20px" }} src={Logo} alt="Logo" />
            <Typography style={{ textAlign: "center", fontWeight: "bold", fontSize: 30, color: "white" }}>ROHIS</Typography>
            <Typography style={{ textAlign: "center", fontWeight: "400", fontSize: 20, color: "white", marginTop:"-10px" }}>SMK 1 Banguntapan Bantul</Typography>
            
            <form onSubmit={handleSubmit} noValidate>
              {/* input email */}
            <div style={{ flexDirection: "row", display: "flex", marginBottom: "10px", alignItems: "center"}}>
                <div style={{ borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px", alignItems: "center", alignContent: "center", display: "flex", backgroundColor: "#F1D819", paddingLeft: "16px", paddingRight: "16px", height: "55px", marginBottom: "-8px"}}>
                  <img style={{ width: 20, height: 20,}} src={User} alt="Logo" />
                </div>
                <TextField
                    style={{ textAlign: "center", width: "100%", backgroundColor: "white", borderTopRightRadius: "6px", borderBottomRightRadius: "6px", borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px"}}
                  id="email"
                  type="email"
                  name="email"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                  value={form.email}
                  onChange={handleChange}
                  error={error.email ? true : false}
                  helperText={error.email}
                  disable={isSubmitting}
                />
            </div>

            {/* input password */}
            <div style={{ flexDirection: "row", display: "flex", marginBottom: "10px", alignItems: "center"}}>
                <div style={{ borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px", alignItems: "center", alignContent: "center", display: "flex", backgroundColor: "#F1D819", paddingLeft: "16px", paddingRight: "16px", height: "55px", marginBottom: "-8px"}}>
                  <img style={{ width: 20, height: 20,}} src={Password} alt="Logo" />
                </div>
                <TextField
                    style={{ textAlign: "center", width: "100%", backgroundColor: "white", borderTopRightRadius: "6px", borderBottomRightRadius: "6px", borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px"}}
                  id="password"
                  type="password"
                  name="password"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                  value={form.password}
                  onChange={handleChange}
                  error={error.password ? true : false}
                  helperText={error.password}
                  disable={isSubmitting}
                />
            </div>
            <Button
              style={{ width: "50%", backgroundColor: "#F1D819", textAlign: "center", marginTop: "20px", borderRadius: "16px" }}
              type="submit"
              color="primary"
              variant="contained"
              size="large"
            >
              <p style={{display: "block", marginLeft: "auto", marginRight: "auto", paddingTop: "20%", width: "40%", paddingBottom: "20px", color: "black", fontWeight: "bold", margin: "-1px", padding: "6px"}}>Login</p>
            </Button>
            </form>
        </div> 
        
    </Container>
    </>
  );
}
