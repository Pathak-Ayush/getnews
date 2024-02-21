// import the creatTheams from the material ui 
import { createTheme } from "@mui/material";

//  we have to pass the object 
// we can customize everythins like colors 
// for the colors we  have the pallates 

const theams = createTheme({
  palette:{
    primary:{
      main:"#FFBE98",
      light: "#C70039",
      dark: "#B8854F",
    },
    secondary:{
      main:"#071952",
      light: "#8C9EFF",
      dark: "#1A237E",
    }
  }
})

export default theams