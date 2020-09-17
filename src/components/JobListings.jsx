import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import JobCard from "./common/JobCard";
import jobApi from "../api/jobs";
import { CircularProgress, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: "36ch",
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inline: {
    display: "inline",
  },
}));

const mapToViews = (items) => {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    location: item.locationNames,
    jobSlug: item.slug,
    company: item.company.name,
    companySlug: item.company.slug,
    imageUrl: item.company.logoUrl,
  }));
};

export default function JobListings() {
  const classes = useStyles();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJobListings();
  }, []);

  const fetchJobListings = async () => {
    setLoading(true);
    const {
      data: { jobs },
      loading,
    } = await jobApi.getJobListings();
    setJobs(mapToViews(jobs));
    setLoading(loading);
  };

  return (
    <>
      {loading ? (
        <div className={classes.container}>
          <CircularProgress size={80} />
        </div>
      ) : (
        <Grid container xs={12} spacing={2} className={classes.root}>
          {jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <JobCard jobDescription={job} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
