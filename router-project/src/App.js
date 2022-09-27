import './App.css';
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

export const GlobalContext = React.createContext('test');

const App = () => {

  // const [globalData, setGlobalData] = useState('Test!');

  return (
    <div className="App">
      <GlobalContext.Provider value='test'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Projects" element={<Projects/>} />
        </Routes>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
