import React, { useState } from 'react';
import { Card, Alert, Form, Button, Container } from 'react-bootstrap';
const SearchCard = () => {
   const [formState, setFormState] = useState({ username: '' });
   const [showAlert, setShowAlert] = useState(false);
   const onSubmit = (event) => {
      event.preventDefault();
      console.log(formState.city);
      if (!formState.city) setShowAlert(true);
   };
   const onChange = (event) => {
      const { name, value } = event.target;
      setFormState({
         ...formState,
         [name]: value,
      });
   };
   return (
      <Container className="m-2">
         <Card>
            <Card.Body>
               <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
                  Something went wrong!
               </Alert>
               <Form onSubmit={onSubmit}>
                  <Form.Group>
                     <Form.Control type="content" placeholder="Search for a city..." name="city" value={formState.city} onChange={onChange} />
                     <Button type="submit" color="dark blue" disabled={!formState.city} className="my-2">
                        Search
                     </Button>
                  </Form.Group>
               </Form>
            </Card.Body>
         </Card>
      </Container>
   );
};
export default SearchCard;
