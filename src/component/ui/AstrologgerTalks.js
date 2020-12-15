import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Height } from '@material-ui/icons';
import Astrologgers from './Astrologgers';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    astrollerTalks:{
        width:"100%",
        height:"auto",
        background:"#f4f4f4",
        paddingTop:"20px",
        paddingBottom:"60px",
        
    },
    bottomMargin:{
        marginBottom:"10px"
    },
    topMargin:{
        marginTop:"10px"
    }
}))
export default function AstrologgerTalks(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.astrollerTalks}>
                <Typography variant="h5" component="h5" align="center">Talk to Astrologers</Typography>
                <div className={classes.bottomMargin}/>
                <Astrologgers/>
            </div>
        </React.Fragment>
    )
}