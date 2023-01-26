import React from "react";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Game from "./pages/Game";
  import Deals from './pages/Deals'
  import About from './pages/About'
  import GiftCard from './pages/GiftCard'
  import ShopingCart from './pages/ShopingCart'
  import Main from "./pages/Main";
  import Details from "./pages/Details";
  import Info from "./components/Info";
  import InfoPs3 from "./components/InfoPs3";

function App() {
  return (
   <>
   <Header></Header>
   <main className="main container">
    <Catalog></Catalog>
    <div className="render">
    <Routes>
      <Route path="/"element={<Main/>} />
      <Route path="/game" element={<Game/>}/>
      <Route path="/deals" element={<Deals/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/giftcard" element={<GiftCard/>}/>
      <Route path="/shopingcart" element={<ShopingCart/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/info/:id" element={<Info/>}/>
      <Route path="/infops3/:id" element={<InfoPs3/>}/>
    </Routes>

    {/* <Info></Info> */}
    </div>
   </main>
   </>
  );
}

export default App;


// <Route path='/giftcard' element={<GiftCard/>} />
// <Route path='/deals' element={<Deals/>} />
// <Route path='/shopingcart' element={<ShopingCart/>} />
// <Route path='/about' element={<About/>} />