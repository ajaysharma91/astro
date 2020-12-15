import React from "react";
import Box from "@material-ui/core/Box";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import jupiter from "../../assets/Dashas/jupiter.png";
import mars from "../../assets/Dashas/mars.png";
import mercury from "../../assets/Dashas/mercury.png";
import moon from "../../assets/Dashas/moon.png";
import neptune from "../../assets/Dashas/neptune.png";
import saturn from "../../assets/Dashas/saturn.png";
import sun from "../../assets/Dashas/sun.png";
import uranus from "../../assets/Dashas/uranus.png";
import venus from "../../assets/Dashas/venus.png";


const defaultProps = {
  bgcolor: "background.paper",
  border: 1,
  m: 1,
  borderColor: "text.primary",
  style: { width: "10rem", height: "7rem" },
};

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
    paddingTop: "56.25%",
    backgroundSize: "contain", // 16:9
  },
  zordiaBottomMargin: {
    marginBottom: "1em",
  },
  card:{
    width:"auto"
  }, 
  cardImage: {
    height:"auto",
    width:"55px"
  },
  dashesContainer:{
    textAlign:"center",
    padding:"20px"
  },
  marginContainer:{
    marginBottom:"15px"
  }
}));

export default function Dashes() {
  const classes = useStyles();
  const a = [1, 2, 3, 4, 5, 6, 1, 2, 3];
  const dashes = [
    {"name":"ajay","url":jupiter},
    {"name":"ajay","url":mars},
    {"name":"ajay","url":mercury},
    {"name":"ajay","url":moon},
    {"name":"ajay","url":neptune},
    {"name":"ajay","url":saturn},
    {"name":"ajay","url":sun},
    {"name":"ajay","url":uranus},
    {"name":"ajay","url":venus},

]

  return (
    <React.Fragment>
        <Grid container alignItems="center" justify="center" lg={12} spacing={1} style={{width:"100%"}}>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
            {dashes.map((item) => (
              <Grid key ={item} item
              justify="center"
               >
                <div className={classes.dashesContainer}>
                  <img src={item.url} className={[classes.cardImage]} />
                  <div className={classes.marginContainer}/>
                  <Typography variant="p" component="p">Astrology</Typography>
                </div>
              </Grid>
            //   <Grid key={item} item>
            //   <Paper className={classes.paper} />
            // </Grid>
            ))}
          </Grid>
        </Grid>
        </Grid>
    </React.Fragment>
  );
}
