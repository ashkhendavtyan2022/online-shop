import React from 'react';
import Home from './Components/Pages/Main Page/Home';
import { Route, Routes } from "react-router";
import Header from './Components/Pages/Main Page/Header';
import Shop from './Components/Pages/Shop Page/Shop';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
