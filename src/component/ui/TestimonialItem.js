import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
import testimonials from "../../assets/Testimonial.png";
import leftArrow from "../../assets/leftarrow.png";
import rightArrow from "../../assets/rightarrow.png";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import "./banner.css";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: "100%",
    borderRadius: "10px",
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
  gridContainer: {},
  gridItem: {},
  media: {
    // height: "30px",
    paddingTop: "19.25%",
    backgroundSize: "auto", // 16:9
  },
  zordiaBottomMargin: {
    marginBottom: "1em",
  },
  cardHeader: {
    background: theme.palette.common.red,
  },
  title: {
    color: "white",
  },
  sliderWrapper: {
    paddingLeft: "60px",
    paddingRight: "60px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  card: {
    marginBottom: "15px",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginLeft: "10px",
  },
  cardContent: {
    paddingBottom: "0px",
    "&:last-child": {
      paddingBottom: "0px",
    },
  },
  next: {
    background: `url(${rightArrow})`,
  },
}));
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        background: `url(${rightArrow})`,
        width: "18px",
        height: "31px",
      }}
      onClick={onClick}
    >
      {/* <img src={rightArrow} alt="arrow_left"/> */}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ background: `url(${leftArrow})`, width: "18px", height: "31px" }}
      onClick={onClick}
    />
  );
}

export default function TestimonialItem(props) {
  const a = [1, 2, 3, 4, 5, 6];
  const classes = useStyles();
  const service = [
    { name: "ajay", url: testimonials },
    { name: "ajay", url: testimonials },
    { name: "ajay", url: testimonials },
    { name: "ajay", url: testimonials },
    { name: "ajay", url: testimonials },
    { name: "ajay", url: testimonials },
    { name: "ajay", url: testimonials },
    { name: "ajay", url: testimonials },
    { name: "ajay", url: testimonials },
    { name: "ajay", url: testimonials },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows:false,
    // variableWidth:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <div className={classes.sliderWrapper}>
        <Slider {...settings}>
          {service.map((item) => (
            <Grid
              container
              alignItems="center"
              justify="center"
              spacing={5}
              className={classes.gridContainer}
            >
              <Grid item alignItems="center" justify="center" spacing={5}>
                <Card
                  className={classes.root}
                  variant="outlined"
                  classes={{ root: classes.card }}
                >
                  <CardMedia
                    className={[classes.media, ""]}
                    image={item.url}
                    title="Paella dish"
                  />

                  <CardContent classes={{ root: classes.cardContent }}>
                    <Typography variant="body2" component="p">
                      well meaning and kindly well meaning and kindly well
                      meaning and kindly. well meaning and kindly. well meaning
                      and kindly.well meaning and kindly.
                    </Typography>
                    <hr style={{width:"20%"}}/>
                    <Typography variant="body2" component="p">
                      well meaning and kindly
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          ))}
        </Slider>
      </div>
      {/* </Grid>
      </Grid> */}
    </React.Fragment>
  );
}
