import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import Dashes from './Dashes';
import dashbanner from '../../assets/dashesbanner.png';
const useStyles = makeStyles((theme) => ({
    dashesContainer:{
        width:"100%",
        height:"auto",
        background:`url(${dashbanner})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        paddingTop:"20px",
        paddingBottom:"60px",
        marginTop:"30px",
        
    },
    bottomMargin:{
        marginBottom:"10px"
    },
    topMargin:{
        marginTop:"10px"
    },
    mainhead:{
        fontWeight:900
    }
}))
export default function DashesMain(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.dashesContainer}>
                <Typography variant="h5" component="h5" align="center" className="mainhead">Dashas</Typography>
                <div className={classes.bottomMargin}/>
                <Dashes/>
            </div>
        </React.Fragment>
    )
}