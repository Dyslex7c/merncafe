import React, { useEffect } from 'react'
import { Typography, Box, Button, useTheme, IconButton } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import cafeimg from "../../components/images/download.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import { useNavigate } from 'react-router-dom';

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
                <Typography style={{fontWeight: "600", fontSize: "1.5rem"}}>
                    C A F É ⠀D U L C E T
                </Typography>
                <Box display="flex" justifyContent="space-between" width="20%" marginRight={5}>
                    <Typography onClick={() => navigate("/menu")} style={{fontSize: "1rem", fontWeight: "300", cursor: "pointer"}}>
                        MENU
                    </Typography>
                    <Typography style={{fontSize: "1rem", fontWeight: "300"}}>
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
                    border: "2px solid black",
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
            <br/>
            <br/>
        </Box>
  )
}

export default HomePage;
