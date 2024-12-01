import React, { FC } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import {Grid2 as Grid, Typography} from "@mui/material";
import ProjectCard from "../components/content/projectCard";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            marginBottom: "50px"
        },
        page: {
            padding: "30px",
        }
    })
);

type Props = {
    projectCards: any;
}

const ProjectCatalogPage: FC<Props> = (props) => {
    const classes = useStyles();
    const { projectCards } = props;

    return (
        <>
            <div className={classes.title}>
                <Typography variant="h3">
                    Projects
                </Typography>
            </div>
            <Grid size={12} container spacing={7} direction="row" className={classes.page}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Grid>
        </>
    );
}


export default ProjectCatalogPage;
