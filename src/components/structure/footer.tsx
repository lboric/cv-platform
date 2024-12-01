import * as React from 'react';
import { FC } from "react";
import { Box } from "@mui/material";
import { Colors } from "../../colors/colors";

type Props = {
}

const Footer: FC<Props> = () => {
    return (
        <Box
            sx={{
                minHeight: '100px',
                backgroundColor: Colors.STRANGE_COLOR,
                color: 'white',
                border: '3px solid black',
            }}
        >
            Footer
        </Box>
    );
};

export default Footer;
