import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  bungkusMenuSatu: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    paddingTop: "6%"
  },
  menuSatuArtikel: {
    padding: "8px",
    alignItems: "center",
    width: "100%",
    marginRight: "3%",
    marginLeft: "10%",
  },
  menuSatuEvent: {
    padding: "8px",
    alignItems: "center",
    width: "100%",
    marginRight: "10%",
    marginLeft: "3%",
  },
  bungkusMenuDua: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center"
  },
  menuDuaDonasi: {
    padding: "8px",
    alignItems: "center",
    width: "100%",
    marginRight: "3%",
    marginLeft: "10%",
  },
  menuDuaVideo: {
    padding: "8px",
    alignItems: "center",
    width: "100%",
    marginRight: "10%",
    marginLeft: "3%",
  },
  paper: {
    backgroundColor: "white",
    padding: "10%",
    marginRight: "5%",
    marginLeft: "5%",
    marginBottom: "10%",
    borderRadius: "16px",
    width: "100%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
  },
  gambar: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "70%",
    paddingBottom: "2px"
  },
  title: {
    textAlign: "center",
    color: "black",
    fontSize: "14px"
  },

}));
