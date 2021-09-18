import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { getCurrentWeather } from '../utils/api';
import { getSavedCities } from '../utils/localStorage';
import moment from 'moment';

import SearchCard from './SearchCard';
import RecentlySearched from './RecentlySearched';
import CurrentWeather from './CurrentWeather';
import FiveDayCard from './FiveDayCard';

const Dashboard = () => {
   const [city, setCity] = useState('New York City');
   const currentDate = moment().format('MM/DD/YYYY');
   const [savedCityList, setSavedCityList] = useState(getSavedCities());
   const { isError, isLoading, data } = useQuery(['cities', city], () => getCurrentWeather(city));
   if (isError) return <h2>error</h2>;
   if (isLoading) return <h2>loading...</h2>;
   return (
      <Container fluid>
         <Row>
            <Col md={12} lg={3}>
               <Row>
                  <SearchCard setCity={setCity} setSavedCityList={setSavedCityList} />
               </Row>
               <Row>
                  <RecentlySearched setCity={setCity} savedCityList={savedCityList} setSavedCityList={setSavedCityList} />
               </Row>
            </Col>
            <Col lg={9}>
               <Row>
                  <CurrentWeather city={city} coord={data.coord} date={currentDate} />
               </Row>
            </Col>
         </Row>
         <Row>
            <FiveDayCard city={city} coord={data.coord} date={currentDate} />
         </Row>
      </Container>
   );
};
export default Dashboard;
