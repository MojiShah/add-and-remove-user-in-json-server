import React from 'react';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import SendData from './components/send/SendData';
import DeleteData from './components/delete/DeleteData';
import Home from './components/Home/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/send' element= {<SendData />} />
        <Route path='/delete' element= {<DeleteData />} />
      </Routes>
    </>
  )
}

export default App
