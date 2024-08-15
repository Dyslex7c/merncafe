import React from 'react'
import { Typography, Box, useTheme, IconButton, Grid } from '@mui/material'
import { DarkMode, LightMode, Phone, Mail } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
//import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMode, setFoodData } from 'state';
import foodData from 'screens/homepage/foodData';
import extendedFoodData from 'screens/FoodGallery/extendedFoodData';

const ProfilePage = () => {

    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dark = theme.palette.neutral.dark;

    const user = useSelector((state) => state.user);
    const foodList = useSelector((state) => state.listInfo);
    const foodRate = useSelector((state) => state.rateInfo);
    const foodDataFull = foodData.concat(extendedFoodData);
    console.log(foodRate);
    
    const foodIndexes = [];
    const rateIndexes = []
    for (let i = 0; i<foodList.length; i++)
    {  
        if (foodList[i].email === user.email)
            foodIndexes.push(foodList[i].foodId);
    }

    for (let i = 0; i<foodRate.length; i++)
    {  
        if (foodRate[i].email === user.email)
            rateIndexes.push(foodRate[i].foodId);
    }

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <Box>
                <Box display="flex" justifyContent="space-between" marginTop={5} m={2} p={1}>
                <Typography marginLeft={5} marginRight={16}  onClick={()=>navigate("/")} style={{fontSize: "1rem", fontWeight: "300", cursor: "pointer"}}>
                    WELCOME    
                </Typography>    
                <Typography onClick={()=>navigate("/")} style={{fontWeight: "600", fontSize: "1.5rem", cursor: "pointer"}}>
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
            <Box display="flex" flexDirection="row">
            <Box
            m={5} 
            p={2} 
            width="30%" 
            bgcolor={theme.palette.mode === "dark" ? "black" : "white"}
            display="flex" 
            flexDirection="row" 
            justifyContent="space-evenly"
            border={`2px solid ${theme.palette.mode === "dark" ? "white" : "black" }`} 
            boxShadow={`5px 10px 12px 1px ${theme.palette.mode === "dark" ? "white" : "black" }`}
            >
                <img 
                src = {`http://localhost:3001/assets/${user.picturePath}`}
                style={{
                    width: "150px",
                    borderRadius: "75px"
                }}
                />
                <Typography marginTop={8} variant='h0' style={{fontWeight: "500", fontSize: "2rem"}}>
                    {user.firstName} {user.lastName}
                </Typography>
            </Box>
            <Box 
            m={5} 
            p={2} 
            bgcolor={theme.palette.mode === "dark" ? "black" : "white"}
            display="flex"
            flexDirection="column" 
            width="60%"
            border={`2px solid ${theme.palette.mode === "dark" ? "white" : "black" }`} 
            boxShadow={`5px 10px 12px 1px ${theme.palette.mode === "dark" ? "white" : "black" }`}
            >
                <Box display="flex" flexDirection="column" width="100%" alignItems="center">
                    <Typography variant='h2' fontWeight="600" marginTop={3}>
                        TASTED & REVIEWED
                    </Typography>
                    <Box marginTop={2} display="flex" flexDirection="row" width="100%" justifyContent="space-evenly">
                        <Box display="flex" flexDirection="column" width="100%" alignItems="center">
                            <Typography variant='h7'>{foodIndexes.length}</Typography>
                            <Typography variant='h7'>DISH</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" width="100%" alignItems="center" borderLeft={`1px solid ${theme.palette.mode === "dark" ? "white" : "black"}`}>
                            <Typography variant='h7'>0</Typography>
                            <Typography variant='h7'>DISH</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" width="100%" alignItems="center" borderRight={`1px solid ${theme.palette.mode === "dark" ? "white" : "black"}`} borderLeft={`1px solid ${theme.palette.mode === "dark" ? "white" : "black"}`}>
                            <Typography variant='h7'>0</Typography>
                            <Typography variant='h7'>DISH</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" width="100%" alignItems="center">
                            <Typography variant='h7'>0</Typography>
                            <Typography variant='h7'>DISH</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box width="100%">
                <Box width="100%">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList textColor='blue' onChange={handleChange} aria-label="lab API tabs example">
                        <Tab style={{fontSize: "1rem", fontWeight: "500"}} label="LISTS" value="1" />
                        <Tab style={{fontSize: "1rem", fontWeight: "500"}} label="RATED" value="2" />
                        <Tab style={{fontSize: "1rem", fontWeight: "500"}} label="Item Three" value="3" />
                    </TabList>
                    </Box>
                </TabContext>
                </Box>
                <Box m={5}>
                {value === "1" && <Grid container spacing={5}>
                    {
                        foodDataFull.map((item) => {
                            if (foodIndexes.includes(item.id) )
                            {
                                return (
                                    <Grid item xs={3}>
                                <Box onClick={() => {
                                    dispatch(setFoodData(item))
                                    navigate(`/food-gallery/${item.path}`)
                                }
                                    } height={260} bgcolor="rgb(255,255,255,0.3)" borderRadius={3} boxShadow="5px 10px 12px 1px black" className="foodcard" style={{cursor: "pointer"}}>
                                    <img width="100%" src={require(`../../components/images/${item.src}`)}/>
                                    <Box width="90%" display="flex" justifyContent="space-between" marginLeft={1} style={{textShadow: "0px 0px 10px white"}}>
                                        <Typography variant='h5' fontWeight="400" display="flex" flexDirection="column">
                                            {item.name}
                                            <Typography style={{fontSize: "0.7rem", marginBottom: "1rem"}} display="flex" flexDirection="row">
                                                <Typography m={0.2} style={{fontWeight: "400"}} marginRight={1} variant='h7'>
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
                            }
                        })
                    }
                </Grid>}
                {value === "2" && <Grid container spacing={5}>
                    {
                        foodDataFull.map((item) => {
                            if (rateIndexes.includes(item.id) )
                            {
                                return (
                                    <Grid item xs={3}>
                                <Box onClick={() => {
                                    dispatch(setFoodData(item))
                                    navigate(`/food-gallery/${item.path}`)
                                }
                                    } height={260} bgcolor="rgb(255,255,255,0.3)" borderRadius={3} boxShadow="5px 10px 12px 1px black" className="foodcard" style={{cursor: "pointer"}}>
                                    <img width="100%" src={require(`../../components/images/${item.src}`)}/>
                                    <Box width="90%" display="flex" justifyContent="space-between" marginLeft={1} style={{textShadow: "0px 0px 10px white"}}>
                                        <Typography variant='h5' fontWeight="400" display="flex" flexDirection="column">
                                            {item.name}
                                            <Typography style={{fontSize: "0.7rem", marginBottom: "1rem"}} display="flex" flexDirection="row">
                                                <Typography m={0.2} style={{fontWeight: "400"}} marginRight={1} variant='h7'>
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
                            }
                        })
                    }
                </Grid>}
                </Box>
            </Box>
        </Box>
  )
}

export default ProfilePage
