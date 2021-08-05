import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useQuery } from 'react-query';
import moment from 'moment';
import { getForecast, iconURL } from '../utils/api';
import ForecastCard from './ForecastCard';
const FiveDayCard = ({ city, coord }) => {
   const { isError, isLoading, data } = useQuery(['forecast', coord.lon], () => getForecast(coord));
   let date = moment();
   if (isError) return <h2>error</h2>;
   if (isLoading) return <h2>loading...</h2>;
   data.daily.pop();
   console.log(data);

   return (
      <Container className="m-2">
         <Card>
            <Card.Body>
               <Card.Title>{city}'s 5 Day Forecast:</Card.Title>
               <Row>
                  {data.daily.map((data) => {
                     date.add(1, 'day');
                     return (
                        <Col key={date}>
                           <Card className="bg-primary text-light">
                              <Card.Body>
                                 <Card.Title>{date.format('MM-DD-YY')}</Card.Title>
                                 <img alt="forecast icon" src={iconURL + data.weather[0].icon + '.png'} />
                                 <p>Temp: {data.temp.day}&deg;F</p>
                                 <p>Humidity: {data.humidity}%</p>
                                 <p>High: {data.temp.max}</p>
                                 <p>Low: {data.temp.min}</p>
                              </Card.Body>
                           </Card>
                        </Col>
                     );
                  })}
               </Row>
            </Card.Body>
         </Card>
      </Container>
   );
};
export default FiveDayCard;
