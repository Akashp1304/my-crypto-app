import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';
import Coin from './component/Coin';
import Exchenge from './component/Exchenge';
import CoinDetails from './component/CoinDetails';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin' element={<Coin/>}/>
        <Route path='/exchenge' element={<Exchenge/>}/>
        <Route path='/coin/:id' element={<CoinDetails/>}/>
      </Routes>
    
   <Footer/>
    
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
