import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const queryClient = new QueryClient();

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <Header />
         <Dashboard />
      </QueryClientProvider>
   );
}

export default App;
