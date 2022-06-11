import React from "react";
import FirstP from './pages/FirstP'
import Header from './components/Header';
import NotFoundPage from "./pages/NotFoundPage";
import '../src/scss/app.scss'

import {
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Cart from "./pages/Cart";

  function App(){
  return (
    
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path="/" element={<FirstP/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        
      </Routes>        
    </div>
    
  );
}

export default App;
