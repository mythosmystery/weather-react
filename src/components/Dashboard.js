import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchCard from './SearchCard';
import RecentlySearched from './RecentlySearched';
import CurrentWeather from './CurrentWeather';
import FiveDayCard from './FiveDayCard';
const Dashboard = () => {
   const [city, setCity] = useState('Oklahoma City');
   const [coord, setCoord] = useState({ lon: 0, lat: 0 });
   return (
      <Row>
         <Col md={12} lg={3}>
            <Row>
               <SearchCard setCity={setCity} />
            </Row>
            <Row>
               <RecentlySearched setCity={setCity} />
            </Row>
         </Col>
         <Col lg={9}>
            <Row>
               <CurrentWeather city={city} setCoord={setCoord} />
            </Row>
            <Row>
               <FiveDayCard coord={coord} />
            </Row>
         </Col>
      </Row>
   );
};
export default Dashboard;
