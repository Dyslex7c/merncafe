import { Typography, Box, useTheme, Grid } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setFoodData } from 'state';
import foodData from './extendedFoodData';

const FoodGalleryPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  console.log(foodData);
  
  return (
    <Box marginTop={5}>
    <Typography variant='h0' fontWeight="600" m={5} p={4}>
        Appetizers (Veg)
    </Typography>
    <Box m={5} p={4} marginTop={2} data-aos="fade-up" display="flex" width="90%">
      <Grid container spacing={5}>
              {foodData.map((item) => {
                if (item.category === "veg-appetizer")
                  return (
                      <Grid item xs={4}>
                      <Box onClick={() => {
                          dispatch(setFoodData(item))
                          navigate(`/food-gallery/${item.path}`)
                      }
                          } height={400} bgcolor="rgb(0,0,0)" borderRadius={3} boxShadow="5px 10px 12px 1px black" className="foodcard" style={{cursor: "pointer"}}>
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
                                          {item.rating > 2.0 && item.rating < 3.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                          {item.rating >= 3.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                                          {item.rating > 3.0 && item.rating < 4.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                          {item.rating >= 4.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                                          {item.rating > 4.0 && item.rating < 5.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                          {item.rating === 5.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}                                                    
                                      </Typography>
                                  </Typography>
                              </Typography>
                              <Box display="flex" flexDirection="row">
                              <Typography m={1}>
                                {item.countryName}
                              </Typography>
                              <img width={40} height={40} src={require(`../../components/images/${item.country}.png`)}/>
                              </Box>
                          </Box>
                          <Typography>
                            Something
                          </Typography>
                      </Box>
                      </Grid>
                  )
              })}
          </Grid>
  </Box>
  <Typography variant='h0' fontWeight="600" m={5} p={4}>
        Soups
    </Typography>
    <Box m={5} p={4} marginTop={2} data-aos="fade-up" display="flex" width="90%">
      <Grid container spacing={5}>
              {foodData.map((item) => {
                if (item.category === "soup")
                  return (
                      <Grid item xs={4}>
                      <Box onClick={() => {
                          dispatch(setFoodData(item))
                          navigate(`/food-gallery/${item.path}`)
                      }
                          } height={300} bgcolor="rgb(0,0,0)" borderRadius={3} boxShadow="5px 10px 12px 1px black" className="foodcard" style={{cursor: "pointer"}}>
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
                                          {item.rating > 2.0 && item.rating < 3.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                          {item.rating >= 3.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                                          {item.rating > 3.0 && item.rating < 4.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                          {item.rating >= 4.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                                          {item.rating > 4.0 && item.rating < 5.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                          {item.rating === 5.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}                                                    
                                      </Typography>
                                  </Typography>
                              </Typography>
                              <Box display="flex" flexDirection="row">
                              <Typography m={1}>
                                {item.countryName}
                              </Typography>
                              <img width={40} height={40} src={require(`../../components/images/${item.country}.png`)}/>
                              </Box>
                          </Box>
                      </Box>
                      </Grid>
                  )
              })}
          </Grid>
  </Box>
  <Typography variant='h0' fontWeight="600" m={5} p={4}>
        Appetizers (Non-Veg)
    </Typography>
    <Typography variant='h0' fontWeight="600" m={5} p={4}>
        Chicken
    </Typography>
    <Box m={5} p={4} marginTop={2} data-aos="fade-up" display="flex" width="90%">
      <Grid container spacing={5}>
              {foodData.map((item) => {
                if (item.category === "appetizer-chicken")
                  return (
                      <Grid item xs={4}>
                      <Box onClick={() => {
                          dispatch(setFoodData(item))
                          navigate(`/food-gallery/${item.path}`)
                      }
                          } height={300} bgcolor="rgb(0,0,0)" borderRadius={3} boxShadow="5px 10px 12px 1px black" className="foodcard" style={{cursor: "pointer"}}>
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
                                          {item.rating > 2.0 && item.rating < 3.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                          {item.rating >= 3.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                                          {item.rating > 3.0 && item.rating < 4.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                          {item.rating >= 4.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                                          {item.rating > 4.0 && item.rating < 5.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                          {item.rating === 5.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}                                                    
                                      </Typography>
                                  </Typography>
                              </Typography>
                              <Box display="flex" flexDirection="row">
                              <Typography m={1}>
                                {item.countryName}
                              </Typography>
                              <img width={40} height={40} src={require(`../../components/images/${item.country}.png`)}/>
                              </Box>
                          </Box>
                      </Box>
                      </Grid>
                  )
              })}
          </Grid>
  </Box>
  <Typography variant='h0' fontWeight="600" m={5} p={4}>
        Appetizers (Non-Veg)
    </Typography>
    <Typography variant='h0' fontWeight="600" m={5} p={4}>
        Fish
    </Typography>
    <Box m={5} p={4} marginTop={2} data-aos="fade-up" display="flex" width="90%">
      <Grid container spacing={5}>
              {foodData.map((item) => {
                if (item.category === "appetizer-fish")
                  return (
                      <Grid item xs={4}>
                      <Box onClick={() => {
                          dispatch(setFoodData(item))
                          navigate(`/food-gallery/${item.path}`)
                      }
                          } height={300} bgcolor="rgb(0,0,0)" borderRadius={3} boxShadow="5px 10px 12px 1px black" className="foodcard" style={{cursor: "pointer"}}>
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
                                          {item.rating > 2.0 && item.rating < 3.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                          {item.rating >= 3.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                                          {item.rating > 3.0 && item.rating < 4.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                          {item.rating >= 4.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}
                                          {item.rating > 4.0 && item.rating < 5.0 && <i class="bi bi-star-half" style={{marginRight: "3px"}}></i>}
                                          {item.rating === 5.0 && <i class="bi bi-star-fill" style={{marginRight: "3px"}}></i>}                                                    
                                      </Typography>
                                  </Typography>
                              </Typography>
                              <Box display="flex" flexDirection="row">
                              <Typography m={1}>
                                {item.countryName}
                              </Typography>
                              <img width={40} height={40} src={require(`../../components/images/${item.country}.png`)}/>
                              </Box>
                          </Box>
                      </Box>
                      </Grid>
                  )
              })}
          </Grid>
  </Box>
  </Box>
)
}

export default FoodGalleryPage
