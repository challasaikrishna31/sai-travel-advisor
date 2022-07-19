import React from 'react';
import useStyles from './styles';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  CardActions,
  Chip,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();
  console.log({ refProp });
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-new-delhi/dining/detail/omya---indian-restaurant-1.jpg?w=724&hash=639804eb8fb6e21e117d0a44e309aa1b'
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom varient="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">
            {place.num_reviews} review{place.num_reviews > 1 && 's'}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography varient="subtitle1">Price</Typography>
          <Typography gutterBottom varient="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography varient="subtitle1">Ranking</Typography>
          <Typography gutterBottom varient="subtitle1">
            {place.ranking}
          </Typography>
        </Box>

        {place?.cuisine?.map((item) => (
          <Chip
            key={item.key}
            size="small"
            label={item.name}
            className={classes.chip}
          />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, '_blank')}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, '_blank')}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
