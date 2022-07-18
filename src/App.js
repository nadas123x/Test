import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UploadFiles from "./components/upload-files.component";

import AuthService from "./services/auth.service";
import TousOffre from "./components/TousOffre";
import Tous from "./components/Tous";
import { NavBar } from "./components/NavBar";
import Login from "./components/Login";
import { Banner } from "./components/Banner";

import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import Registration from "./components/Registration";
import Navbarregister from "./components/Navbarregister";
import Postulation from "./components/Postulation";

const App = () => {
  

  return (
    <Router>
      

        <div className="App">
          <Routes>
            
         <Route exact path="/acceuil" element={<>  <NavBar />
         <Banner />
         <Skills />
         <Projects />
         <Contact />
         <Footer /></>}/>
            <Route exact path= "/home" element={<> <Navbarregister/>  <Home/> </>} />
            <Route exact path="/login" element={<><Navbarregister/>  <Login/> </>} />
            <Route exact path="/register" element={<> <Navbarregister/>  <Register/> </>} />
            <Route exact path="/profile" element={<> <Navbarregister/> <Profile/> </>} />
            <Route path="/user" element={<><Navbarregister/> <BoardUser/> </>}/>
            <Route path="/mod" element={<> <Navbarregister/> <BoardModerator/> </>}/>
            <Route path="/admin" element={<><Navbarregister/>  <BoardAdmin/> </>}/>
            <Route  path="/Contact" element={<>   <NavBar/> <Registration/></>} />
            <Route  path="/offre1" element={<> <TousOffre/> </>} />

            <Route  path="/offre" element={<> <Tous/> </>} />
            <Route  path="/files" element={<> <UploadFiles/> </>} />
            <Route  path="/postul" element={<> <Navbarregister/> <Postulation/> </>} />



          </Routes>
        </div>
    </Router>
  );
};

export default App;