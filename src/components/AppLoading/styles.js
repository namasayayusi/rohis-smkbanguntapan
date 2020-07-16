import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  loadingBlock: {
    display: "block",
    position: "relative",
    width: "100%",
    height: "100vh"
  },
  title: {
    color: "black",
    textAlign: "center"
  },
  loadingBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100hv"
  }
}));

export default useStyles;
