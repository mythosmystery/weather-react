import React from 'react';
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { getSavedCities } from '../utils/localStorage';
const RecentlySearched = () => {
   return (
      <Container className="my-2">
         <Card>
            <Card.Body>
               <Card.Title>Recently Searched:</Card.Title>
               <ListGroup className="list-group-flush">
                  {getSavedCities().map((city) => {
                     <ListGroupItem>{city}</ListGroupItem>;
                  })}
               </ListGroup>
            </Card.Body>
         </Card>
      </Container>
   );
};
export default RecentlySearched;
