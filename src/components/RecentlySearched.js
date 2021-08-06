import React from 'react';
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { getSavedCities } from '../utils/localStorage';
const RecentlySearched = ({ savedCityList }) => {
   return (
      <Container className="my-2">
         <Card>
            <Card.Body>
               <Card.Title>Recently Searched:</Card.Title>
               <ListGroup className="list-group-flush">
                  {savedCityList.map((city) => {
                     return <ListGroupItem key={city}>{city}</ListGroupItem>;
                  })}
               </ListGroup>
            </Card.Body>
         </Card>
      </Container>
   );
};
export default RecentlySearched;
