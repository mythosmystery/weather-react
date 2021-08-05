import React, { useState } from 'react';
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { iconURL } from '../utils/api';
import { useQuery } from 'react-query';
import { getForecast } from '../utils/api';
import moment from 'moment';
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
   return (
      <>
         <Container className="m-2">
            <Card>
               <Card.Body>
                  <Card.Title className="cityName">
                     The weather in {city} is {data.current.weather[0].description}
                  </Card.Title>
                  <Card.Text>
                     <img alt="weather icon" src={iconURL + data.current.weather[0].icon + '.png'} />
                     {date}
                  </Card.Text>
               </Card.Body>
               <ListGroup className="list-group-flush">
                  <ListGroupItem>Temperature: {data.current.temp}&deg;F</ListGroupItem>
                  <ListGroupItem>Humidity: {data.current.humidity}%</ListGroupItem>
                  <ListGroupItem>Wind speed: {data.current.wind_speed} MPH</ListGroupItem>
                  <ListGroupItem>
                     <span className={handleUVColor(data.current.uvi)}>UV Index: {data.current.uvi}</span>
                  </ListGroupItem>
                  <ListGroupItem>Sunrise: {moment.unix(data.current.sunrise).format('h:mm a')}</ListGroupItem>
                  <ListGroupItem>Sunset: {moment.unix(data.current.sunset).format('h:mm a')}</ListGroupItem>
               </ListGroup>
            </Card>
         </Container>
      </>
   );
};
export default CurrentWeather;
