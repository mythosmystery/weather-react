import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { iconURL, getCurrentWeather } from '../utils/api';
const CurrentWeather = ({ city, setCoord }) => {
   const { isError, isLoading, data } = useQuery(['cities', city], () => getCurrentWeather(city));
   if (isError) return <h2>error</h2>;
   if (isLoading) return <h2>loading...</h2>;
   console.log(data);
   return (
      <>
         <Container className="m-2">
            <Card>
               <Card.Body>
                  <Card.Title>The weather in {city}</Card.Title>
                  <img alt="weather icon" src={iconURL + '04n' + '.png'} />
               </Card.Body>
            </Card>
         </Container>
      </>
   );
};
export default CurrentWeather;
