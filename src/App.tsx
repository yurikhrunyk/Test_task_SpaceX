import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import client from './apolloClient';

import Header from './components/molecules/Header/Header';
import MainPage from './pages/Home/Home';
import Favourites from './pages/Favourites/Favourites';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Router>
          <div style={{ position: 'relative' }}>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/fav" element={<Favourites />} />
            </Routes>
          </div>
        </Router>
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
