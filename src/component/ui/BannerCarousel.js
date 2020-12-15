import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import "./banner.css";
import { makeStyles } from '@material-ui/core/styles';
import banner from '../../assets/banner.png';
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
    bannerImage:{
        height:"300px",
        width:"100%",
        [theme.breakpoints.down('sm')]:{
            height:"200px"
        }
    },
    carouselBottomMargin:{
        marginBottom:"3em"
    }
  }));
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ }}
        onClick={onClick}
      />
    );
  }

export default function BannerCarousel(props)  {
    const img =[
        {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        }
    ]
    const classes = useStyles();

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        lazyLoad: true,
        // centerMode: true,
        adaptiveHeight: true,
        fade: true,
        arrows: false,
        autoplaySpeed: 10000,
       nextArrow: <SampleNextArrow className="slides"/>,
       prevArrow: <SamplePrevArrow />
    };
    return (
      <>
        <Slider {...settings} classes={{"slick-slider":classes.slickSlider}}>
          {img.map(data=>(
              <Grid >
                  <img src={banner} className={[classes.bannerImage]}/>
              </Grid>
        ))}
        </Slider> 
        <div className={classes.carouselBottomMargin}/>
      </>
    );
  
}