import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialItem from './TestimonialItem';
const useStyles = makeStyles((theme) => ({
    testimonial: {
    width: "100%",
    height: "auto",
    // background:"#DCDCDC",
    paddingTop: "20px",
    marginBottom:"50px"
  },
  bottomMargin: {
    marginBottom: "10px",
  },
  topMargin: {
    marginTop: "10px",
  },

  root: {
    textAlign: "center",
    paddingTop: "10px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  gridContainer: {
    padding: "0px 0px 0px 10px",
    width: "100%",
  },
  gridItem: {},
  media: {
    height: "50px",
    paddingTop: "56.25%",
    backgroundSize: "contain", // 16:9
  },
  card: {
    border: "0px",
    borderRight: "1px solid gray",
    borderRadius: "0px",
    boxShadow: "none",
    margin: "0px",
  },
  cardend: {
    border: "0px",
    borderRadius: "0px",
    boxShadow: "none",
  },
  cardContent: {
    //   padding:"0px",
    "&:last-child": {
      padding: "0px",
    },
  },
}))
export default function Testimonial() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <div className={classes.testimonial}>
        <Typography variant="h5" component="h5" align="center">
          Testimonials
        </Typography>
        <div className={classes.bottomMargin} />
        <div className={classes.bottomMargin} />
        <TestimonialItem/>
        <div className={classes.bottomMargin} />
        {/* <Astrologgers/> */}
      </div>
    </React.Fragment>
  );
}
