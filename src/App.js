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
import  Header  from "./components/Header";
import  Paperbase  from "./components/Paperbase";
import  Content  from "./components/Content";
import  Navigator  from "./components/Navigator.js";
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
import Search from "./components/Search"
import Postulation from "./components/Postulation";
import OffresAdmin from "./components/OffresAdmin";
import OffreForm from "./components/OffreForm";
import TousAdmin from "./components/TousAdmin";
import OffreList from "./components/OffreList";
import UpdateOffre from "./components/UpdateOffre";
import Candidature from "./components/Candidature"
import PostulList from "./components/PostulList";
import FileList from "./components/FilesList";
import Loginn from "./components/Loginn";
import Profill from "./components/Profill";
import MessagesList from "./components/MessagesList";
import Messages from "./components/Messages";

import CandidatureList
from "./components/CandidatureList";

import  Foot  from "./components/Foot";
import MsgUser from "./components/MsgUser";
import Industrie from "./components/Industrie";
import Chatbot from "./components/ChatBot";
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';



const App = () => {


  return (
    <Router>


        <div className="App">
          <Routes>
                  
         <Route exact path="/adminpage" element={<>  
        <Navbarregister />
        <br></br>
        <br></br>
      
        

         <Paperbase />
         <Foot/>  
      </>}/>
      <Route path="/chatbot" element={<Chatbot/>} />

         <Route exact path="/" element={<>  <NavBar />
         <Banner />
         <Skills />
         <Projects />
         <Contact />
         <Footer /></>}/>
            <Route exact path= "/home" element={<> <Navbarregister/>  <Home/> </>} />
            <Route exact path= "/AddOffreAdmin" element={<> <Navbarregister/><br></br><br></br><Header />  <Navigator/> <br></br> <OffreForm></OffreForm> <br></br><br></br> <Foot/></>} />
            <Route exact path= "/pok" element={<> <Navbarregister/>  <TousAdmin/> </>} />


            <Route exact path="/list" element={ <> <Navbarregister></Navbarregister> <br></br>  <br></br><Header /><OffreList/> <br></br><Foot/></>} />
            <Route path="/add" element={<UpdateOffre/>} />
            <Route path="/offre/edit/:id" element={<UpdateOffre/>} />
            <Route path="/footer" element={<Foot/>} />
            <Route path="/CandidatureList" element={<> <Navbarregister></Navbarregister>  <br></br>  <br></br><Header/><CandidatureList/> <br></br>  <br></br><Foot/> </>} />

            <Route path="/admin/messages" element={<> <Navbarregister></Navbarregister>  <br></br>  <br></br><Header/> <MessagesList/> </>} />
            <Route path="/admin/reponses" element={<> <Navbarregister></Navbarregister>  <br></br>  <br></br><Header/> <Messages/> <Foot/> </>} />
            <Route path="/user/messages" element={<> <Navbarregister></Navbarregister>  <br></br>   <MsgUser/> <Foot/></>} />



            <Route exact path="/offres" element={<> <NavBar /> <Candidature/>  <Foot/>   </> } />
            <Route exact path="/cvcandidatures" element={<> <NavBar /> <Candidature/> </> } />


            <Route exact path="/loginn" element={<><Navbarregister/>  <Loginn/> </>} />
            <Route exact path="/profill" element={<><Navbarregister/>  <Profill/> </>} />


            <Route exact path="/login" element={<><Navbarregister/>  <Login/> </>} />
            <Route exact path="/register" element={<> <Navbarregister/>  <Register/> </>} />
            <Route exact path="/profile" element={<> <Navbarregister/> <Profile/> </>} />
            <Route path="/user" element={<><Navbarregister/> <BoardUser/> </>}/>
            <Route path="/mod" element={<> <Navbarregister/> <BoardModerator/> </>}/>
            <Route path="/admin" element={<><Navbarregister/>  <BoardAdmin/> </>}/>
            <Route  path="/Contact" element={<>   <NavBar/> <Registration/> <Foot/></>} />
            <Route  path="/offre/direction/1" element={<> <TousOffre/> </>} />
            <Route  path="/search" element={<> <Search/> <Foot/> </>} />
            <Route  path="/industrie" element={<> <Industrie/> <Foot/> </>} />

            <Route  path="/postulationadmin" element={<><Navbarregister/> <br></br> <br></br> <Header/> <PostulList/>  <br></br> <br></br> <br></br><br></br> <br></br> <br></br> <br></br>  <Foot/>  </>} />
            <Route  path="/filesadmin" element={<> <FileList/> </>} />

            <Route  path="/offre/direction" element={<><Navbarregister></Navbarregister> <Tous/>  <Foot/>   </>} />
            <Route  path="/files" element={<> <UploadFiles/> </>} />
            <Route  path="/postul" element={<> <Navbarregister/> <Postulation/> <Foot/>  </>} />



          </Routes>
        </div>
    </Router>
  );
};

export default App;