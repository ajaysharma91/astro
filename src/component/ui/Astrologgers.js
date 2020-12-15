import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
// import "./astrologgers.css";
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
    height: "50px",
    paddingTop: "56.25%",
    backgroundSize: "contain", // 16:9
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
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
}));
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(onClick);

  return (
    onClick == null? <div
    className={className}
    style={{ background: `url(${rightArrow})`, width:"15px" , height:"20px", display:"none"}}
    onClick={onClick}
  />: 
    <div
      className={className}
      style={{ background: `url(${rightArrow})`, width:"15px" , height:"20px"}}
      onClick={onClick}
    >
      {/* <img src={rightArrow} alt="arrow_left"/> */}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    onClick == null ?
    <div
      className={className}
      style={{ background: `url(${leftArrow})`, width:"15px" , height:"20px", display:"none" }}
      onClick={onClick}
    /> :  <div
    className={className}
    style={{ background: `url(${leftArrow})`, width:"15px" , height:"20px" }}
    onClick={onClick}
  />
  );
}

export default function Astrologgers(props) {
  const a = [1, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6];
  const classes = useStyles();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      {/* <Grid
        container
        className={classes.gridContainer}
        alignItems="center"
        justify="center"
        spacing={2}
      >
        <Grid
          container
          item
          lg={10}
          xs={12}
          sm={12}
          md={10}
          alignItems="center"
          justify="center"
          spacing={2}
        > */}
      <div className={classes.sliderWrapper}>
        <Slider {...settings}>
          {a.map((item) => (
            <Grid
              container
              alignItems="center"
              justify="center"
              spacing={4}
              className={classes.gridContainer}
            >
              <Grid container item alignItems="center" justify="center" >
                <Card className={classes.root} variant="outlined">
                  <CardHeader
                    className={classes.cardHeader}
                    title={
                      <Typography variant="body1" component="p" className={classes.title}>
                        Career Prospectus
                      </Typography>
                    }
                  />

                  <CardContent>
                    <Typography className={classes.pos} color="">
                      adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Button size="small" variant="contained" color="secondary" style={{color:'white'}}>
                      Make It
                    </Button>
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
