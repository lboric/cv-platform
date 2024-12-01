import { createTheme } from "@mui/material/styles";
import { Colors } from "../colors/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: Colors.BLACK
        },
        secondary: {
            main: Colors.PEWTER_GREY
        }
    },
    typography: {
        fontFamily: "'Montserrat', 'Roboto', 'Arial', sans-serif", // Set Montserrat as the default font
        h1: {
            fontFamily: "'Poppins', sans-serif", // Custom font for h1
        },
        h2: {
            fontFamily: "'Lora', serif", // Custom font for h2
        },
        h4: {
            fontFamily: "'Roboto'", // Custom font for h2
        },
        h6: {
            fontFamily: "'Lora', serif", // Optional: set Montserrat for body text as well
        },
        body1: {
            fontFamily: "'Lora', serif", // Optional: set Montserrat for body text as well
        },
    },
});
