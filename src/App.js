import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const queryClient = new QueryClient();

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <Header />
         <Container fluid>
            <Dashboard />
         </Container>
      </QueryClientProvider>
   );
}

export default App;
