import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Typography, Box, useTheme, IconButton } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import { useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const styles = {
    mapRoot: {
      height: 400,
    },
  };

const LocationPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dark = theme.palette.neutral.dark;

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
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
        <Box m={5} p={4} display="flex" flexDirection="column">
            <Typography variant='h1' marginLeft={7}>
                Location (Fictitious)
            </Typography>
        </Box>
        <Box width={1100} marginRight="auto" marginLeft="auto">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={styles.mapRoot}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                </MapContainer>
        </Box>
    </Box>
    
  )
}

export default LocationPage
