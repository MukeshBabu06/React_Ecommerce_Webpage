import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Eccommerce webpage

import EmainPage from "./Ecommerce/EHome/EmainPage";
import EHome from "./Ecommerce/EHome/EHome";
import Searchbr from "./Ecommerce/EHome/Searchbar";
import MTshirt from "./Ecommerce/Pages/Men/MTshirt";
import MShirt from "./Ecommerce/Pages/Men/MShirt";
import MTrouser from "./Ecommerce/Pages/Men/MTrouser";
import Hoodie from "./Ecommerce/Pages/Men/Hoodie";
import Kurti from "./Ecommerce/Pages/Women/Kurti";
import Sarees from "./Ecommerce/Pages/Women/Sarees";
import EthicWear from "./Ecommerce/Pages/Women/Ethicwear";
import WTshirt from "./Ecommerce/Pages/Women/WTshirt";
import BoysTshirt from "./Ecommerce/Pages/Kids/BoysTshirt";
import BoysJacket from "./Ecommerce/Pages/Kids/BoysJacket";
import GirlsDress from "./Ecommerce/Pages/Kids/GirlsDress";
import Girlstshirt from "./Ecommerce/Pages/Kids/Girlstshirt";
import Menwatch from "./Ecommerce/Pages/Watch/Menwatch";
import WomenWatch from "./Ecommerce/Pages/Watch/WomenWatch";
import Menglass from "./Ecommerce/Pages/Sunglas/Menglass";
import Womenglass from "./Ecommerce/Pages/Sunglas/Womenglass";
import Perfume from "./Ecommerce/Pages/Beauty/Perfume";
import EPrdCart from "./Ecommerce/Ecart/EPrdCart";
import EFooter from "./Ecommerce/EFooter/EFooter";
import ELogin from "./Ecommerce/EHome/ELogin";


function App() {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart([...cart, product]);
  };
  const [login,setLogin]=useState(false);

  return (
    <>
    {login?<ELogin setLogin={setLogin}/>:<></>}
    <div className="App">
      
      <EmainPage setLogin={setLogin} cart={cart} setCart={setCart}/>
      <Routes>
        <Route>
          <Route path="/" element={<EHome addCart={addCart} cart={cart} setCart={setCart}/>}/>
        
          <Route path="/MTshirt" element={<MTshirt addCart={addCart} cart={cart} setCart={setCart}/>}/>
          <Route path="/MShirt" element={<MShirt addCart={addCart} cart={cart} setCart={setCart}/>}/>
          <Route path="/MTrouser" element={<MTrouser addCart={addCart} cart={cart} setCart={setCart}/>}/>
          <Route path="/Hoodie" element={<Hoodie addCart={addCart} cart={cart} setCart={setCart}/>}/>

          <Route path="/Kurti" element={<Kurti addCart={addCart} cart={cart} setCart={setCart}/>}/>
          <Route path="/Sarees" element={<Sarees addCart={addCart} cart={cart} setCart={setCart}/>} />
          <Route path="/EthicWear" element={<EthicWear addCart={addCart} cart={cart} setCart={setCart}/>}/>
          <Route path="/WTshirt" element={<WTshirt addCart={addCart} cart={cart} setCart={setCart}/>}/>

          <Route path="/BoysTshirt" element={<BoysTshirt addCart={addCart} cart={cart} setCart={setCart}/>}/>
          <Route path="/BoysJacket" element={<BoysJacket addCart={addCart} cart={cart} setCart={setCart}/>}/>
          <Route path="/GirlsDress" element={<GirlsDress addCart={addCart} cart={cart} setCart={setCart}/>}/>
          <Route path="/Girlstshirt" element={<Girlstshirt addCart={addCart} cart={cart} setCart={setCart}/>}/>

          <Route path="/Menwatch" element={<Menwatch addCart={addCart} cart={cart} setCart={setCart}/>}/>
          <Route path="/WomenWatch" element={<WomenWatch addCart={addCart} cart={cart} setCart={setCart}/>}/>
          
          <Route path="/Menglass" element={<Menglass addCart={addCart} cart={cart} setCart={setCart}/>}/>
          <Route path="/Womenglass" element={<Womenglass addCart={addCart} cart={cart} setCart={setCart}/>}/>
          
          <Route path="/Perfume" element={<Perfume addCart={addCart} cart={cart} setCart={setCart}/>}/>

          <Route path="/EPrdcart" element={<EPrdCart cart={cart} setCart={setCart}/>}/>

          <Route path="*" element={<ENopage/>}/>
        </Route>
      </Routes>
      <EFooter/>
     </div>
     </>
  );
}

export default App;
