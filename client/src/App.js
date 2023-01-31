import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <BrowserRouter>
    <div>
      <h1>Home Page</h1>
      <Routes>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
