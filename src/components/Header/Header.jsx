import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core';
import { Autocomplete } from '@react-google-maps/api';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
const Header = ({ onLoad, onPlaceChanged }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography varient="h5" className={classes.title}>
          Sai Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography varient="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
