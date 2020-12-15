import {createMuiTheme} from '@material-ui/core/styles'
const blueP = "#3d61c2";
const redS = "#f58905";
const theme = createMuiTheme({
    palette:{
        common:{
            blue:`${blueP}`,
            red:`${redS}`
        },
        primary:{
            main:`${blueP}`
        },
        secondary:{
            main:`${redS}`
        }
       
    },
    typography:{
       tab:{
        // textTransform:"none",
        fontWeight:"normal",
        fontSize:".8rem",
       },
       h5:{
           fontWeight:700,
           fontSize:"1.9rem",
           lineHeight: 3.334,
           letterSpacing: "0.03em"
       }
    },
})

export default theme;
