import { makeStyles } from "@material-ui/core/styles";
import background from "../../images/background.png";

export default makeStyles(theme => ({
  logo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "20%",
    width: "40%",
    paddingBottom: "20px"
  },
  daftarBox: {
    position: "relative",
    height: "100%",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    flexFlow: "column nowrap"
  },
  logoBox: {
    width: 282,
    height: 69,
    margin: "30px auto 20px"
  },
  bungkusTombol: {
    padding: "50%",
    margin: "50%",
  },
  bungkusuntuktombol: {
      padding: '70px',
  },
  pembatas: {
    padding: '6px'
  },
  tombol: {
      width: "100%",
      color: "black",
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: "none"
  },
  iconMasjid: {
    height: "108px",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
  },
}));
