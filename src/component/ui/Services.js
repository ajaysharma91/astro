import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceItems from "./ServicesSlick";

const useStyles = makeStyles((theme) => ({
  services: {
    width: "100%",
    height: "auto",
    // background:"#DCDCDC",
    paddingTop: "20px",
    paddingBottom:"60px"
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
export default function Services() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <div className={classes.services}>
        <Typography variant="h5" component="h5" align="center">
          Our Services
        </Typography>
        <div className={classes.bottomMargin} />
        <div className={classes.bottomMargin} />
        <ServiceItems/>
        <div className={classes.bottomMargin} />
        {/* <Astrologgers/> */}
      </div>
    </React.Fragment>
  );
}
