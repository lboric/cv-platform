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
        fontFamily: "'Roboto', 'Arial', sans-serif",
        h1: {
            fontFamily: "'Poppins', sans-serif",
        },
        h2: {
            fontFamily: "'Lora', serif",
        },
    },
});
