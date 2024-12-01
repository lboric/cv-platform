import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
    CssBaseline,
    Divider,
    Grid2 as Grid,
} from "@mui/material";
import { Route, Routes } from 'react-router-dom';
import { theme } from "./themes/defaultTheme";
import { Colors } from "./colors/colors";
import TopNavigation from "./components/structure/topNavigation";
import Footer from "./components/structure/footer";
import ProjectCatalogPage from "./pages/projectCatalogPage";
import ProjectCard from "./components/content/projectCard";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid
                container
                size={12}
                direction="row"
                sx={{
                    minHeight: '100vh',
                    backgroundColor: Colors.PEWTER_GREY
                }}>
                <Grid size={1}/>
                <Grid
                    container
                    size={10}
                    direction="column"
                    sx={{
                        height: '100%',
                        display: 'flex',
                    }}>
                    <Grid
                        size={12}
                        sx={{
                            height: '7%',
                            boxSizing: 'border-box'
                        }}>
                        <TopNavigation/>
                    </Grid>
                    <Grid size={12}>
                        <Divider/>
                    </Grid>
                    <Grid
                        size={12}
                        sx={{
                            padding: '2%',
                            flexGrow: 1,
                            overflow: 'auto',
                            boxSizing: 'border-box',
                            backgroundColor: Colors.WHITE
                        }}>
                        <Routes>
                            <Route path="/" element={<ProjectCatalogPage projectCards={ProjectCard} />} />
                        </Routes>
                    </Grid>
                    <Grid size={12}>
                        <Divider/>
                    </Grid>
                    <Grid
                        size={12}
                        sx={{
                            boxSizing: 'border-box',
                            backgroundColor: Colors.BLACK
                        }}>
                        <Footer />
                    </Grid>
                </Grid>
                <Grid size={1}/>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
