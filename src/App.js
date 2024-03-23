import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
const App=()=>
{
  return(
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/contact' Component={Contact}/>
        </Routes>
      </div>
    </Router>
  );
};
export default App;