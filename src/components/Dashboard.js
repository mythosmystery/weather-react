import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchCard from './SearchCard';
import RecentlySearched from './RecentlySearched';
import CurrentWeather from './CurrentWeather';
import FiveDayCard from './FiveDayCard';
const Dashboard = () => {
   return (
      <Row>
         <Col md={12} lg={3}>
            <Row>
               <SearchCard />
            </Row>
            <Row>
               <RecentlySearched />
            </Row>
         </Col>
         <Col lg={9}>
            <Row>
               <CurrentWeather />
            </Row>
            <Row>
               <FiveDayCard />
            </Row>
         </Col>
      </Row>
   );
};
export default Dashboard;
