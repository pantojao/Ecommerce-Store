import { OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  relative: {
    maxWidth: "100%",
    position: "relative",
    paddingTop: "4em",
  },
  header: {
    padding: '0em .5em',
    textAlign: 'center',
    fontWeight: '700'
  }, 
  skeleton: {
    margin: '0 auto'
  }
}));
