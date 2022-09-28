import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

// React-Modal
import Modal from "react-modal";

export const GlobalContext = React.createContext('');

const App = () => {

  const [globalData, setGlobalData] = useState('Test!');
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem('nameSet', true);
    localStorage.setItem('userName', globalData);
  };

  useEffect(() => {
    const nameStatus = localStorage.getItem('nameSet');
    const name = localStorage.getItem('userName');
    if(nameStatus){
      setIsOpen(true);
      setGlobalData(name);
    }else{
      setIsOpen(true);
    };
  }, []);

  return (
    <div className="App">
      <GlobalContext.Provider value={{ globalData, setGlobalData }}>
        <Navbar />
        <Modal
          className="mymodal"
          isOpen={isOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="My dialog"
          style={{
            overlay: {
              backgroundColor: 'rgb(5, 22, 45)'
            }
          }}
        >
          <form>
            <h1 htmlFor="name">What is your name?</h1>
            <input type="text" id="name" onChange={(e) => setGlobalData(e.target.value)}/>
            <button className="closeModal" onClick={closeModal}>Close</button>
          </form>
        </Modal>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
