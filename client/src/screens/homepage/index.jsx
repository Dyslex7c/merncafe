import React, { useEffect } from 'react'
import { Typography, Box, Button, useTheme, IconButton, Grid } from '@mui/material'
import { DarkMode, LightMode, Mail, Phone } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import cafeimg from "../../components/images/download.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import { useNavigate } from 'react-router-dom';
import food from "../../components/images/food.jpg";
import foodData from './foodData';
import axios from 'axios';
import "./home.css";

const HomePage = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dark = theme.palette.neutral.dark;
    
    useEffect(() => {
        AOS.init({duration: 1000});
        AOS.refresh();
    }, [])
    return (
        <Box>
            <Box display="flex" justifyContent="space-between" marginTop={5} m={2} p={1}>
                <Typography marginLeft={5} marginRight={16} style={{fontSize: "1rem", fontWeight: "300"}}>
                    WELCOME    
                </Typography>    
                <Typography className={theme.palette.mode === "dark" ? "glow" : ""} style={{fontWeight: "600", fontSize: "1.5rem"}}>
                    C A F É ⠀D U L C E T
                </Typography>
                <Box display="flex" justifyContent="space-between" width="20%" marginRight={5}>
                    <Typography onClick={() => navigate("/menu")} style={{fontSize: "1rem", fontWeight: "300", cursor: "pointer"}}>
                        MENU
                    </Typography>
                    <Typography onClick={() => navigate("/location")} style={{fontSize: "1rem", fontWeight: "300", cursor: "pointer"}}>
                        LOCATION AND HOURS
                    </Typography>
                    <IconButton onClick={() => dispatch(setMode())} sx={{padding: "0px", height: "20px"}}>
                        {theme.palette.mode === "dark" ? (
                            <Tooltip title="Dark Mode"><DarkMode sx={{ fontSize: "25px" }} /></Tooltip>
                        ): (
                            <Tooltip title="Light Mode"><LightMode sx={{ color: dark, fontSize: "25px" }}/></Tooltip>
                        )}
                    </IconButton>
                </Box>
            </Box>
            <Box minHeight={900}>
                <img src={cafeimg} alt="dulcet" width="100%"/>
            </Box>
            <Box m={5} p={4} data-aos="fade-up" display="flex" width="90%" justifyContent="space-between">
                <Box>
                    <Typography variant="h1" marginBottom={4} style={{fontWeight: 600}}>
                        All your ambience in one place
                    </Typography>
                    <Typography variant="h6">
                        A café with a sublime decorum and an aesthetically pleasing interior
                    </Typography>
                </Box>
                <Button
                onClick={() => navigate("/menu")}
                sx={{
                    p: "0.5rem",
                    width: "180px",
                    height: "60px",
                    alignSelf: "center",
                    fontSize: "1rem",
                    backgroundColor: theme.palette.mode === "dark" ? "#000" : "#ffffff",
                    border: theme.palette.mode === "dark" ? "2px solid white" : "2px solid black",
                    color: theme.palette.mode === "light" ? "black" : "white",
                    "&:hover": {
                      backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#000",
                      color: theme.palette.mode === "dark" ? "#000" : "#fff"
                    }
                  }}
                >
                    <Typography style={{fontWeight: "500"}}>V I E W ⠀F U L L⠀M E N U</Typography>
                </Button>
            </Box>
            <Box minHeight={900} position="absolute">
                <img src={food} width="100%" style={{filter: "brightness(50%)"}}/>
            </Box>
            <Box m={5} p={4} marginTop={20} data-aos="fade-up" display="flex" width="90%" justifyContent="space-between">
                <Box>
                    <Typography variant="h1" marginBottom={4} style={{fontWeight: 600, color: "white"}}>
                        Discover finger-lickin' good food
                    </Typography>
                    <Typography variant="h6" style={{color: "white"}}>
                        A heritage of flavors, where every bite takes you to heaven, feels so ethereal
                    </Typography>
                </Box>
                <Button
                onClick={() => navigate("/menu")}
                sx={{
                    p: "0.5rem",
                    width: "200px",
                    height: "60px",
                    alignSelf: "center",
                    fontSize: "1rem",
                    backgroundColor: "transparent",
                    border: "2px solid white",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgb(0,145,255,0.6)",
                    }
                  }}
                >
                    <Typography style={{fontWeight: "500"}}>V I E W ⠀F O O D⠀G A L L E R Y</Typography>
                </Button>
            </Box>
            <Box m={5} p={4} marginTop={2} data-aos="fade-up" display="flex" width="90%">
                <Grid container spacing={5}>
                        {foodData.map((item) => {
                            return (
                                
                                <Grid item xs={3}>
                                <Box height={230} bgcolor="rgb(255,255,255,0.3)" borderRadius={3} boxShadow="5px 10px 12px 1px black" className="foodcard" style={{cursor: "pointer"}}>
                                    <img width="100%" src={require(`../../components/images/${item.src}`)}/>
                                    <Box width="90%" display="flex" justifyContent="space-between" marginLeft={1} color="white" style={{textShadow: "0px 0px 10px white"}}>
                                        <Typography variant='h5' fontWeight="200" display="flex" flexDirection="column">
                                            {item.name}
                                            <Typography style={{fontSize: "0.7rem", marginBottom: "1rem"}} display="flex" flexDirection="row">
                                                <Typography m={0.2} style={{fontWeight: "100"}} marginRight={1} variant='h7'>
                                                    {item.rating}
                                                </Typography>
                                                <Typography>
                                                    {item.rating >= 1.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                                                    {item.rating >= 2.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                                                    {item.rating >= 3.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                                                    {item.rating >= 4.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                                                    {item.rating > 4.0 && item.rating < 5.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                                    {item.rating === 5.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}                                                    
                                                </Typography>
                                            </Typography>
                                        </Typography>
                                        <img width={35} height={35} src={require(`../../components/images/${item.country}.png`)}/>
                                    </Box>
                                </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" width="100%">
                <Typography marginBottom={3}>All trademarks are properties of their respective owners. 2023 © Title™ Ltd. All rights reserved. Images and icons by Freepik, Pixabay, and Flaticons</Typography>
                <Box display="flex">
                    <Mail />
                    <Typography marginLeft={1} marginRight={4}>cafe@yahoomail.com</Typography>
                    <Phone/>
                    <Typography marginLeft={1}>+91-33-17296023</Typography>
                </Box>
            </Box>
        </Box>
  )
}

export default HomePage;
