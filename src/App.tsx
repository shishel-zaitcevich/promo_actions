import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PromoPage } from './components/PromoPage';
import { FormDataProvider } from './components/context/formContext';

export function App() {
  return (
    <FormDataProvider>
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
    </FormDataProvider>
  );
}

export default App;
