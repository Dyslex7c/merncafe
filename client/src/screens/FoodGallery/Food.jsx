import React, { useState, useEffect } from 'react'
import { Typography, Box, useTheme, IconButton } from '@mui/material';
import { DarkMode, LightMode, Phone, Mail } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from 'state';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./food.css";

const Food = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const foodData = useSelector((state) => state.foodData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const theme = useTheme();
    const dark = theme.palette.neutral.dark;
    const [foodInfo, setFoodInfo] = useState(null);
    console.log(foodData);
    async function getWikiResponse(url, config) {
        const res = await axios.get(url, config);
        return res;
      };
      useEffect(() => {
          const WIKI_URL = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=15&exlimit=3&exintro&titles=${foodData.query}&explaintext=1&format=json&formatversion=2&origin=*`
          const wikiConfig = {
            timeout: 6500 * 6500
        };
          getWikiResponse(WIKI_URL, wikiConfig).then(result => {
          setFoodInfo(result.data.query.pages[0].extract);
        })
      }, [foodData.query]);
    return (
        <Box>
            <Box display="flex" justifyContent="space-between" marginTop={5} m={2} p={1}>
                <Typography marginLeft={5} marginRight={16}  onClick={()=>navigate("/")} style={{fontSize: "1rem", fontWeight: "300", cursor: "pointer"}}>
                    WELCOME    
                </Typography>    
                <Typography className={theme.palette.mode === "dark" ? "glow" : ""} onClick={()=>navigate("/")} style={{fontWeight: "600", fontSize: "1.5rem", cursor: "pointer"}}>
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
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box m={2} p={4} border={`2px solid ${theme.palette.mode === "dark" ? "white" : "black" }`} boxShadow={`5px 7px 2px 2px ${theme.palette.mode === "dark" ? "white" : "black" }`}>
                    <img width={1100} src={require(`../../components/images/${foodData.src}`)} />
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" marginX={12} marginY={5}>
                <Box display="flex" flexDirection="column" width="60%">
                    <Typography variant='h1' marginBottom={2} style={{fontWeight: "200"}}>
                        {foodData.name}
                    </Typography>
                    <Typography variant='h6' marginBottom={2} color="#c2c2c2" fontWeight="200">
                        {foodData.type}
                    </Typography>
                    <Typography variant='h3b' marginBottom={2}>
                        {foodInfo}
                    </Typography>
                    <Typography display="flex" flexDirection="row">
                        <Typography variant='h2b' fontWeight="100">
                            {foodData.rating}
                        </Typography>
                        <Typography color="#ff8400" fontSize="1.2rem" m={1.3}>
                            {foodData.rating >= 1.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                            {foodData.rating >= 2.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                            {foodData.rating >= 3.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                            {foodData.rating >= 4.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                            {foodData.rating > 4.0 && foodData.rating < 5.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                            {foodData.rating === 5.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}                                                    
                        </Typography>
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" flexDirection="row" alignSelf="flex-end" marginBottom={5}>
                        <Typography variant='h6' m={3}>
                            {foodData.countryName}
                        </Typography>
                        <img width={70} height={70} src={require(`../../components/images/${foodData.country}.png`)}/>
                    </Box>
                    <img width={350} src={require(`../../components/images/${foodData.countryName}.png`)}/>
                </Box>
            </Box>
            <Box p={2} display="flex" flexDirection="column" alignItems="center" width="100%">
                <Typography marginBottom={3}>All trademarks are properties of their respective owners. 2024 © Title™ Ltd. All rights reserved. Images and icons by Freepik, Pixabay, and Flaticons</Typography>
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

export default Food;
