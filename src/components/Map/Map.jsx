import React from 'react';
import GoogleMapReact from 'google-map-react';
// key=AIzaSyBP62h81H7LMXW4m5kcymBNF18_IZsh81I
import useStyles from './styles';
import { useMediaQuery, Typography, Paper } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';
import mapStyles from './map.Styles';
const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
  weatherData,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');
  console.log(weatherData);
  //const coordinates = { lat: 17.4504, lng: 78.3808 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={{
        //   disableDefaultUI: true,
        //   zoomControl: true,
        //   styles: mapStyles,
        // }}
        onChange={(event) => {
          setCoordinates({ lat: event.center.lat, lng: event.center.lng });
          setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.length &&
          places.map((place, i) => (
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!isDesktop ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="subtitle2"
                    className={classes.Typography}
                    gutterBottom
                  >
                    {place.name}
                  </Typography>
                  <img
                    className={classes.pointer}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : 'https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-new-delhi/dining/detail/omya---indian-restaurant-1.jpg?w=724&hash=639804eb8fb6e21e117d0a44e309aa1b'
                    }
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </div>
          ))}
        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img
              height={100}
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            ></img>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
