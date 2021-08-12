import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({ arrayOfItems }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {arrayOfItems.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                <p>{item.body}</p>
                <p>{item.email}</p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
