import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PromoPage } from './components/PromoPage';

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <PromoPage />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
