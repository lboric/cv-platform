import * as React from 'react';
import { FC } from "react";
import {
    Avatar,
    Box,
    Grid2 as Grid, Link,
    Typography
} from "@mui/material";
import {
    EmailOutlined,
    Facebook,
    Instagram,
    LinkedIn
} from "@mui/icons-material";
import { Colors } from "../../colors/colors";
import AdobeMaster from "../../static/adobem.png"
import AdobeExpert from "../../static/adobee.png"
import AdobeProfessional from "../../static/adobep.png"
import MSAzure from "../../static/msazure.png"


type Props = {
}

const Footer: FC<Props> = () => {
    return (
        <Box
            sx={{
                minHeight: '100px',
                backgroundColor: Colors.STRANGE_COLOR,
                color: 'white',
            }}>
            <Grid
                container
                size={12}
                direction="row"
                sx={{
                    paddingLeft: "5%"
                }}>
                <Grid
                    container
                    size={3}
                    direction="column"
                    spacing={0}
                    sx={{
                        padding: "2%"
                    }}>
                    <Grid size={12}
                          container
                          direction="row"
                          spacing={3}
                          alignItems="center"
                          sx={{
                              padding: "2%",
                          }}>
                        <Grid size={2}>
                            <Avatar
                                variant="circular"
                                sx={{
                                    width: '4rem',
                                    height: '4rem',
                                }}
                                src={AdobeMaster}
                            />
                        </Grid>
                        <Grid size={10}>
                            <Box>
                                <Typography variant="body1" component="div" sx={{ fontWeight: 600 }}>
                                    Adobe Certified Master
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: '0.875rem'
                                    }}>
                                    Adobe Experience Manager Sites Architect
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid size={12}
                          container
                          direction="row"
                          spacing={3}
                          alignItems="center"
                          sx={{
                              padding: "2%",
                          }}>
                        <Grid size={2}>
                            <Avatar
                                variant="circular"
                                sx={{
                                    width: '4rem',
                                    height: '4rem',
                                }}
                                src={AdobeExpert}
                            />
                        </Grid>
                        <Grid size={10}>
                            <Box>
                                <Typography variant="body1" component="div" sx={{ fontWeight: 600 }}>
                                    Adobe Certified Expert
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: '0.875rem'
                                    }}>
                                    Adobe Experience Manager as a Cloud Service Migration
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid size={12}
                          container
                          direction="row"
                          spacing={3}
                          alignItems="center"
                          sx={{
                              padding: "2%",
                          }}>
                        <Grid size={2}>
                            <Avatar
                                variant="circular"
                                sx={{
                                    width: '4rem',
                                    height: '4rem',
                                }}
                                src={AdobeExpert}
                            />
                        </Grid>
                        <Grid size={10}>
                            <Box>
                                <Typography variant="body1" component="div" sx={{ fontWeight: 600 }}>
                                    Adobe Certified Expert
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: '0.875rem'
                                    }}>
                                    Adobe Experience Manager Sites Developer
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid size={12}
                        container
                        direction="row"
                        spacing={3}
                        alignItems="center"
                        sx={{
                            padding: "2%",
                        }}>
                        <Grid size={2}>
                            <Avatar
                                variant="circular"
                                sx={{
                                    width: '4rem',
                                    height: '4rem',
                                }}
                                src={AdobeProfessional}
                            />
                        </Grid>
                        <Grid size={10}>
                            <Box>
                                <Typography variant="body1" component="div" sx={{ fontWeight: 600 }}>
                                    Adobe Certified Professional
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: '0.875rem'
                                    }}>
                                    Adobe Experience Manager Assets Developer
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid size={12}
                          container
                          direction="row"
                          spacing={3}
                          alignItems="center"
                          sx={{
                              padding: "2%",
                          }}>
                        <Grid size={2}>
                            <Avatar
                                variant="circular"
                                sx={{
                                    width: '4rem',
                                    height: '4rem',
                                }}
                                src={MSAzure}
                            />
                        </Grid>
                        <Grid size={10}>
                            <Box>
                                <Typography variant="body1" component="div" sx={{ fontWeight: 600 }}>
                                    Microsoft Certified
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: '0.875rem'
                                    }}>
                                    Azure Fundamentals
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={6} />
                <Grid
                    container
                    size={3}
                    direction="column"
                    sx={{
                        padding: "2%"
                    }}>
                    <Grid size={12}
                          container
                          direction="row"
                          alignItems="center"
                          sx={{
                              padding: "2%",
                          }}>
                            <Typography variant="h5" sx={{ fontWeight: 600, color: Colors.DIVIDER_COLOR }}>
                                Socials
                            </Typography>
                    </Grid>
                    <Grid size={12}
                          container
                          direction="row"
                          spacing={3}
                          alignItems="center"
                          sx={{
                              padding: "2%",
                          }}>
                        <Box>
                            <Link
                                href="https://linkedin.com/in/luka-borić"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    textDecoration: 'none',
                                }}>
                                <Avatar
                                    variant="circular"
                                    sx={{
                                        width: '2rem',
                                        height: '2rem',
                                        bgcolor: '#0077B5', // LinkedIn brand color (optional)
                                        color: '#ffffff', // Icon color
                                    }}>
                                    <LinkedIn />
                                </Avatar>
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                href="https://www.instagram.com/lukazhuja19/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    textDecoration: 'none',
                                }}>
                                <Avatar
                                    variant="circular"
                                    sx={{
                                        width: '2rem',
                                        height: '2rem',
                                        bgcolor: '#E4405F', // Instagram brand color
                                        color: '#ffffff',   // Icon color
                                    }}>
                                    <Instagram />
                                </Avatar>
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                href="https://www.facebook.com/lukazhuja19/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    textDecoration: 'none',
                                }}>
                                <Avatar
                                    variant="circular"
                                    sx={{
                                        width: '2rem',
                                        height: '2rem',
                                        bgcolor: '#1877F2', // Facebook brand color
                                        color: '#ffffff',   // Icon color
                                    }}>
                                    <Facebook />
                                </Avatar>
                            </Link>
                        </Box>
                    </Grid>
                    {/* Add space before the second Socials section */}
                    <Grid
                        container
                        size={12}
                        direction="row"
                        alignItems="center"
                        sx={{
                            padding: "2%",
                            marginTop: "5rem", // Add space before this row
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 600, color: Colors.DIVIDER_COLOR }}>
                            Contact
                        </Typography>
                    </Grid>
                    <Grid size={12}
                          container
                          direction="row"
                          alignItems="center"
                          sx={{
                              padding: "2%",
                          }}>
                        <Grid size={1}>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    width: '1.35rem',
                                    height: '1.15rem',
                                }}>
                                <EmailOutlined />
                            </Avatar>
                        </Grid>
                        <Grid size={10}>
                            <Box>
                                <Link
                                    href="mailto:luka.boric10@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Typography variant="body1" sx={{ fontWeight: 600, color: Colors.LINK_GREY }}>
                                        luka.boric10@gmail.com
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
