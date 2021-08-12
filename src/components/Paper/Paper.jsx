import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      padding: theme.spacing(16),
    },
  },
}));

export default function SimplePaper({ elevation, text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={elevation}>
        <p className="paperContent">{text}</p>
      </Paper>
    </div>
  );
}
