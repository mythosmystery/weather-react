import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { getForecast } from '../utils/api';
import ForecastCard from './ForecastCard';
const FiveDayCard = ({ city, coord }) => {
   const { isError, isLoading, data } = useQuery(['forecast', coord.lon], () => getForecast(coord));
   if (isError) return <h2>error</h2>;
   if (isLoading) return <h2>loading...</h2>;
   data.daily.pop();
   console.log(data);
   return (
      <Container className="my-2">
         <Card>
            <Card.Body>
               <Card.Title className="caps">{city}'s 6 Day Forecast:</Card.Title>
               <Row>
                  {data.daily.map(data => {
                     return (
                        <Col key={data.dt}>
                           <ForecastCard data={data} />
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
