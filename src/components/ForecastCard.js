import React from 'react';
import { Card } from 'react-bootstrap';
import { iconURL } from '../utils/api';
import moment from 'moment';
const ForecastCard = ({ data }) => {
   return (
      <Card className="bg-primary text-light">
         <Card.Body>
            <Card.Title>{moment.unix(data.dt).format('MM-DD-YY')}</Card.Title>
            <img alt="forecast icon" src={iconURL + data.weather[0].icon + '.png'} />
            <p>Temp: {data.temp.day}&deg;F</p>
            <p>Humidity: {data.humidity}%</p>
            <p>High: {data.temp.max}&deg;</p>
            <p>Low: {data.temp.min}&deg;</p>
         </Card.Body>
      </Card>
   );
};
export default ForecastCard;
