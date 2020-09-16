import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import CompanyAvatar from "./CompanyAvatar";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function JobCard({
  jobDescription: { title, company, companySlug, location, jobSlug, imageUrl },
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea component={Link} to={"c/" + companySlug + "/" + jobSlug}>
        <CardContent>
          <CompanyAvatar imageUrl={imageUrl} companyName={company} />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {company}
          </Typography>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {location}
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
