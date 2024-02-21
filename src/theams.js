// import the creatTheams from the material ui 
import { createTheme } from "@mui/material";


const theams = createTheme({
  palette:{
    primary:{
      main:"#0C359E",
      light: "#A0BFE0",
      dark: "#A0BFE0",
    },
   
    ternary:{
      main:"#070F2B",
      light: "#001C30",
      dark:"#070F2B"
    },
  
    text:{
      main:"#071952",
      light: "#8C9EFF",
      dark: "#070F2B",
      white:"#fff",
      whitesmoke:"#EEEEEE",
    }
  },


})

export default theams