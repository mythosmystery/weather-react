import React, { useState } from 'react';
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { iconURL } from '../utils/api';
import { useQuery } from 'react-query';
import { getForecast } from '../utils/api';
import { addCity } from '../utils/localStorage';
import moment from 'moment-timezone';
const CurrentWeather = ({ coord, city, date }) => {
   const { isError, isLoading, data } = useQuery(['current', coord.lon], () => getForecast(coord));
   const handleUVColor = (uv) => {
      if (uv < 3) return 'low';
      if (uv < 6) return 'medium';
      if (uv < 8) return 'high';
      if (uv < 11) return 'very-high';
      return 'extreme text-white';
   };
   if (isError) return <h2>error</h2>;
   if (isLoading) return <h2>loading...</h2>;
   const { current, timezone } = data;
   addCity(city);
   return (
      <>
         <Container className="my-2">
            <Card>
               <Card.Body>
                  <Card.Title className="caps">
                     It is {Math.round(current.temp)}&deg; and {current.weather[0].main} in {city}
                  </Card.Title>
                  <Card.Text>
                     <img alt="weather icon" src={iconURL + current.weather[0].icon + '.png'} />
                     <span className="mx-3">{date}</span>
                     <span className="mx-3">Feels like {current.feels_like}&deg;</span>
                     <span className="mx-3 caps">{current.weather[0].description}</span>
                     <p>It is {moment().tz(timezone).format('h:mm a')} here</p>
                  </Card.Text>
               </Card.Body>
               <ListGroup className="list-group-flush">
                  <ListGroupItem>Humidity: {current.humidity}%</ListGroupItem>
                  <ListGroupItem>Wind speed: {current.wind_speed} MPH</ListGroupItem>
                  <ListGroupItem>
                     <span className={handleUVColor(current.uvi)}>UV Index: {current.uvi}</span>
                  </ListGroupItem>
                  <ListGroupItem>Sunrise: {moment.unix(current.sunrise).tz(timezone).format('h:mm a')}</ListGroupItem>
                  <ListGroupItem>Sunset: {moment.unix(current.sunset).tz(timezone).format('h:mm a')}</ListGroupItem>
               </ListGroup>
            </Card>
         </Container>
      </>
   );
};
export default CurrentWeather;
