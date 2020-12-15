import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import leo from "../../assets/ZodiacSign/Leo.png";
import aquarious from "../../assets/ZodiacSign/Aquarious.png";
import aries from "../../assets/ZodiacSign/Aries.png";
import cancer from "../../assets/ZodiacSign/Cancer.png";
import capricon from "../../assets/ZodiacSign/Capricon.png";
import gemini from "../../assets/ZodiacSign/Gemini.png";
import Libra from "../../assets/ZodiacSign/Libra.png";
import Pisces from "../../assets/ZodiacSign/Pisces.png";
import Sagittarius from "../../assets/ZodiacSign/Sagittarius.png";
import Scorpio from "../../assets/ZodiacSign/Scorpio.png";
import Taurus from "../../assets/ZodiacSign/Gemini.png";
import virgo from "../../assets/ZodiacSign/Virgo.png";


const useStyles = makeStyles((theme) => ({
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
    paddingTop: "29.25%%",
    backgroundSize: "contain", // 16:9
  },
  zordiaBottomMargin: {
    marginBottom: "1em",
  },
}));

export default function ZodiacSign(props) {
  const classes = useStyles();
  const a = [1, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6];
  const dashes = [
    {"name":"Aries","url":aries, date:"21 Mar-19 Apr"},
    {"name":"Tarurus","url":Taurus, date:"20 Apr-20 May"},
    {"name":"Gemini","url":gemini, date:"21 Aprl-20 Jun"},
    {"name":"Cancer","url":cancer, date:"21 Jun-22 Jul"},
    {"name":"Leo","url":leo, date:"23 Jun-22 Aug"},
    {"name":"Virgo","url":virgo, date:"23 Aug-22 Sep"},
    {"name":"Libra","url":Libra, date:"21 Sep-22 Oct"},
    {"name":"Scorpio","url":Scorpio, date:"23 Oct-21 Nov"},
    {"name":"Sagittarius","url":Sagittarius, date:"22 Nov-21 Dec"},
    {"name":"Capricon","url":capricon, date:"22 Dec-19 Jan"},
    {"name":"Aquarious","url":aquarious, date:"20 Jan-18 Fab"},
    {"name":"Pisces","url":Pisces, date:"19 Fab-20 Mar"},
]

  return (
    <React.Fragment>
      <Grid
        container
        className={classes.gridContainer}
        alignItems="center"
        justify="center"
        spacing={2}
      >
        <Grid
          container
          item
          lg={11}
          xs={12}
          sm={12}
          md={11}
          alignItems="center"
          justify="center"
          spacing={2}
        >
          {dashes.map((item) => (
            <Grid item xs={6} md={2} lg={2} sm={4}>
              <Card className={classes.root} variant="contained" style={{border:"1px solid #e6e6e6",boxShadow: "1px 1px #e6e6e6"}}>
                <CardMedia
                  className={[classes.media, "img-fluid"]}
                  image={item.url}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography component="p" style={{fontWeight:"bold"}}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <div className={classes.zordiaBottomMargin}/>
    </React.Fragment>
  );
}
