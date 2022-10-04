import './App.css';
import React from 'react';
import Main from './screens/main/main_screen';
import Result from './screens/result/result_screen';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
