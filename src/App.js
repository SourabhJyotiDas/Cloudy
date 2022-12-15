import React from "react";
import Navbar from "./Components/Navbar";
import "./Index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WeatherApi from "./Components/WeatherApi";
import WeatherState from "./Context/WeatherState";



function App() {
  


  return (
    <>
      <BrowserRouter>
        <WeatherState >
          <Navbar />          
          <Routes>
            <Route path="/" element={<WeatherApi />} />
          </Routes>
        </WeatherState>
      </BrowserRouter>
    </>
  );
}

export default App;
