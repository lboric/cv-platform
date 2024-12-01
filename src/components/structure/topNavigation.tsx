import * as React from 'react';
import { FC } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import {
    Box,
    Button,
    Grid2 as Grid
} from "@mui/material";


type Props = {
}

const TopNavigation: FC<Props> = () => {
    const pages = ['Projects', 'Certifications', 'Blog'];

    return (
        <AppBar
            position="static"
            color="primary"
            sx={{
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
            }}>
            <Container
                maxWidth="xl"
                sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <Toolbar
                    disableGutters
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        minHeight: '0px !important',
                        overflow: 'hidden',
                    }}>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{
                            height: '100%',
                            width: '100%',
                            overflow: 'hidden',
                        }}>
                        <Grid
                            size={3}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <AdbIcon sx={{ mr: 1 }} />
                        </Grid>
                        <Grid
                            size={4}
                        />
                        <Grid
                            size={5}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                overflow: 'hidden', // Prevent buttons from overflowing
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    flexWrap: 'wrap', // Ensure wrapping on smaller screens
                                    gap: 1, // Add space between buttons
                                }}
                            >
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={() => null}
                                        sx={{
                                            color: 'white',
                                            fontSize: '0.5rem',
                                            whiteSpace: 'nowrap',
                                            minWidth: 0,
                                            padding: '4px 8px',
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default TopNavigation;
