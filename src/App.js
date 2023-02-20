import Header from "./Header";
import Product from "./Product";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ShopingCart from './ShopingCart';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
function App(){
  return(
   <div className="App">
    <Header/>
    
    <Router>
   <Routes>
   <Route path="/Home" element={<Home/>}/>
   <Route path="/Product" element={<Product/>}/>
  <Route path="/Contact" element={<Contact/>} />
   <Route path="/ShopingCart" element={<ShopingCart/>} />
   </Routes>
   <Footer/>
   </Router>
   </div>
  );
}
export default App;
