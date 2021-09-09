import React from 'react';
import { Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { removeCity } from '../utils/localStorage';
const RecentlySearched = ({ setCity, savedCityList, setSavedCityList }) => {
   const reversedList = savedCityList.reverse();
   return (
      <Container className="my-2">
         <Card>
            <Card.Body>
               <Card.Title>Recently Searched:</Card.Title>
               <ListGroup className="list-group-flush">
                  {reversedList.map(city => {
                     return (
                        <ListGroupItem key={city}>
                           <span onClick={() => setCity(city)}>{city}</span>{' '}
                           <Button onClick={() => setSavedCityList(removeCity(city))}>Remove</Button>
                        </ListGroupItem>
                     );
                  })}
               </ListGroup>
            </Card.Body>
         </Card>
      </Container>
   );
};
export default RecentlySearched;
