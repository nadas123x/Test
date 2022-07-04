
import "./App.css";

import Student from "./Student";
import Test from "./Test";
import Register from "./components/Registration";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Newsletter } from "./components/Newsletter";




function App() {
  return (
    
    <div className="App">
     <Router>
       
       <div className="App">
     
         <Routes>

         <Route exact path="/accueil" element={<>  <NavBar />
         <Banner />
         <Skills />
         <Projects />
         <Contact />
         <Footer /></>}/>
   
         <Route exact path="/Contact" element={<><NavBar/><Register/></>}/>
   
   
         <Route  path="/Test" element={<Test />} />
         
          
         </Routes>
       </div>
     </Router>
    </div>
   
  );
}

export default App;

