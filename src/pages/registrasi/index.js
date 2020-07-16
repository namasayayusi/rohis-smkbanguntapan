import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

import isEmail from "validator/lib/isEmail";

import {
  auth,
  firestore,
  FieldValue,
  useFirebase
} from "../../components/FirebaseProvider";

import { Redirect} from "react-router-dom";

import bg from "../../images/background.png";
import Logo from "../../images/logo1.png";
import User from "../../images/user-icon.png";
import Email from "../../images/email-icon.png";
import Telp from "../../images/telp-icon.png";
import Password from "../../images/password-icon.png";

export default function Registrasi() {

  const [form, setForm] = useState({
    nama: "",
    email: "",
    notelp: "",
    password: "",
    ulangi_password: ""
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

    if (!form.nama) {
      newErrors.nama = "Nama wajib diisi";
    }

    if (!form.email) {
      newErrors.email = "Email wajib diisi";
    } else if (!isEmail(form.email)) {
      newErrors.email = "Email tidak valid";
    }

    if (!form.notelp) {
      newErrors.notelp = "No telp wajib diisi";
    }

    if (!form.password) {
      newErrors.password = "Password wajib diisi";
    }

    if (!form.ulangi_password) {
      newErrors.ulangi_password = "Ulangi Password wajib diisi";
    } else if (form.ulangi_password !== form.password) {
      newErrors.ulangi_password = "Ulangi Password tidak sama dengan Password";
    }

    return newErrors;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const findErrors = validate();

    console.log(Object.values(findErrors));
    if (Object.values(findErrors).some(message => message !== "")) {
      setError(findErrors);
    } else {
      setSubmitting(true);
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          form.email,
          form.password
        );

        await firestore.doc(`/profiles/${user.uid}`).set({
          nama: form.nama,
          email: form.email,
          notelp: form.notelp,
          password: form.password,
          createdAt: FieldValue.serverTimestamp()
        });
      } catch (e) {
        let newError = {};
        console.log(e.message);
        switch (e.code) {
          case "auth/email-already-in-use":
            newError.email = "Email sudah terdaftar";
            break;

          case "auth/invalid-email":
            newError.email = "Email tidak valid";
            break;

          case "auth/weak-password":
            newError.password = "Password lemah";
            break;

          case "auth/operation-not-allowed":
            newError.email = "Metode Email dan password tidak didukung";
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
        <form onSubmit={handleSubmit} noValidate style={{ padding: "30px", textAlign: "center"}}>
            <img style={{ display: "block", marginLeft: "auto", marginRight: "auto", paddingTop: "20%", width: "40%", paddingBottom: "20px" }} src={Logo} alt="Logo" />
            <Typography style={{ textAlign: "center", fontWeight: "bold", fontSize: 30, color: "white" }}>ROHIS</Typography>
            <Typography style={{ textAlign: "center", fontWeight: "400", fontSize: 20, color: "white", marginTop:"-10px" }}>SMK 1 Banguntapan Bantul</Typography>

            {/* input username */}
            <div style={{ flexDirection: "row", display: "flex", marginBottom: "10px", alignItems: "center"}}>
                <div style={{ borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px", alignItems: "center", alignContent: "center", display: "flex", backgroundColor: "#F1D819", paddingLeft: "16px", paddingRight: "16px", height: "55px", marginBottom: "-8px"}}>
                  <img style={{ width: 20, height: 20,}} src={User} alt="Logo" />
                </div>
                <TextField
                    style={{ textAlign: "center", width: "100%", backgroundColor: "white", borderTopRightRadius: "6px", borderBottomRightRadius: "6px", borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px"}}
                    id="nama"
                    name="nama"
                    margin="normal"
                    fullWidth
                    required
                    variant="outlined"
                    value={form.nama}
                    onChange={handleChange}
                    error={error.nama ? true : false}
                    helperText={error.nama}
                    disable={isSubmitting}
                />
            </div>
            
            {/* input email */}
            <div style={{ flexDirection: "row", display: "flex", marginBottom: "10px", alignItems: "center"}}>
                <div style={{ borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px", alignItems: "center", alignContent: "center", display: "flex", backgroundColor: "#F1D819", paddingLeft: "16px", paddingRight: "16px", height: "55px", marginBottom: "-8px"}}>
                  <img style={{ width: 20, height: 20,}} src={Email} alt="Logo" />
                </div>
                <TextField
                    style={{ textAlign: "center", width: "100%", backgroundColor: "white", borderTopRightRadius: "6px", borderBottomRightRadius: "6px", borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px"}}
                    id="email"
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

            {/* input notelp */}
            <div style={{ flexDirection: "row", display: "flex", marginBottom: "10px", alignItems: "center"}}>
                <div style={{ borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px", alignItems: "center", alignContent: "center", display: "flex", backgroundColor: "#F1D819", paddingLeft: "16px", paddingRight: "16px", height: "55px", marginBottom: "-8px"}}>
                  <img style={{ width: 20, height: 20,}} src={Telp} alt="Logo" />
                </div>
                <TextField
                    style={{ textAlign: "center", width: "100%", backgroundColor: "white", borderTopRightRadius: "6px", borderBottomRightRadius: "6px", borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px"}}
                    id="notelp"
                    type="number"
                    name="notelp"
                    margin="normal"
                    fullWidth
                    required
                    variant="outlined"
                    value={form.notelp}
                    onChange={handleChange}
                    error={error.notelp ? true : false}
                    helperText={error.notelp}
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
                    autoComplete="new-password"
                    margin="normal"
                    fullWidth
                    required
                    variant="outlined"
                    value={form.password}
                    onChange={handleChange}
                    error={error.notelp ? true : false}
                    helperText={error.password}
                    disable={isSubmitting}
                />
            </div>

            {/* input ulangi password */}
            <div style={{ flexDirection: "row", display: "flex", marginBottom: "10px", alignItems: "center"}}>
                <div style={{ borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px", alignItems: "center", alignContent: "center", display: "flex", backgroundColor: "#F1D819", paddingLeft: "16px", paddingRight: "16px", height: "55px", marginBottom: "-8px"}}>
                  <img style={{ width: 20, height: 20,}} src={Password} alt="Logo" />
                </div>
                <TextField
                    style={{ textAlign: "center", width: "100%", backgroundColor: "white", borderTopRightRadius: "6px", borderBottomRightRadius: "6px", borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px"}}
                    id="ulangi_password"
                    type="password"
                    name="ulangi_password"
                    autoComplete="new-password"
                    margin="normal"
                    fullWidth
                    required
                    variant="outlined"
                    value={form.ulangi_password}
                    onChange={handleChange}
                    error={error.ulangi_password ? true : false}
                    helperText={error.ulangi_password}
                    disable={isSubmitting}
                />
            </div>

            
            <Button
              style={{ width: "50%", backgroundColor: "#F1D819", textAlign: "center", marginTop: "20px", borderRadius: "16px" }}
              type="submit"
              color="primary"
              variant="contained"
              size="large"
              disable={isSubmitting}
            >
              <p style={{display: "block", marginLeft: "auto", marginRight: "auto", paddingTop: "20%", paddingBottom: "20px", color: "black", fontWeight: "bold", margin: "-1px", padding: "6px"}}>Register</p>
            </Button>
        </form> 
       
        
    </Container>
    </>
  );
}
