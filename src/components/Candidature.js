import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { NavBar } from "./NavBar";
import  Slide  from "./Slide";
import UploadFiles from "../components/upload-files.component";
import headerImg from "../assets/img/go.png";
import axios from "axios";

import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import 'animate.css';
import './Search.css';


import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/indus.png";
import projImg2 from "../assets/img/cli.png";
import projImg3 from "../assets/img/dig.jpg";
import projImg4 from "../assets/img/fin.png";
import projImg5 from "../assets/img/audi.png";
import projImg6 from "../assets/img/jur.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Search.css";

export default function Search() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const projects = [
   
  ];
  const [id, setId] = useState("");
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [pays, setPays] = useState("");

  const navigate = useNavigate();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "vous !" ];
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser);

  const period = 2000;
  useEffect(() => {
   let ticker = setInterval(() => {
     tick();
   }, delta);

   return () => { clearInterval(ticker) };
 }, [text])

 const tick = () => {
   let i = loopNum % toRotate.length;
   let fullText = toRotate[i];
   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

   setText(updatedText);

   if (isDeleting) {
     setDelta(prevDelta => prevDelta / 2);
   }

   if (!isDeleting && updatedText === fullText) {
     setIsDeleting(true);
     setIndex(prevIndex => prevIndex - 1);
     setDelta(period);
   } else if (isDeleting && updatedText === '') {
     setIsDeleting(false);
     setLoopNum(loopNum + 1);
     setIndex(1);
     setDelta(500);
   } else {
     setIndex(prevIndex => prevIndex + 1);
   }
 }


  async function handleSubmit(event)
   {
       event.preventDefault();
   try
       {
        await axios.post("http://localhost:8080/savecandidature" , 

       {
       id: id,
       fname: firstname,
       lname : lastname,
       email : email,
       phone : phone,
       message :message ,
       pays: pays
       });
         alert("User Registation Successfully");
         setId("");
         setFname("");
         setLname("");
         setEmail("");
         setPhone("");
         setMessage("");
         setPays("");
         navigate("/");

       }
   catch(err)
       {
         alert("User Registation Failed");
       }
  }
  useEffect(() => {
    fetch("http://localhost:8080/categories")
      .then((response) => response.json())
      .then((json) => setDatas(json));
      
  }, []);

  const handleSearchTerm = (e) => {
    setSearchTerm("");
    let value = e.target.value;
    value.length > 2 && setSearchTerm(e.target.value);
  };

  return (
  <>
  
  <section className="yes">
    <br></br>
    <br></br>
    <br></br>
  <a href='#home'><img className="imgsearch" src={require('../assets/img/Y.jpg')}  />  </a> 
            <div class="cat">Nos catégories </div>
          

      <div className="searchBar">
        <input
          type="text"
          name="search"
          id="search"
        
          placeholder="Nos suggestions                                                                                          🔍 "
          onChange={handleSearchTerm}
        />
      </div>
      <div className="search__results">
        {datas
          .filter((val) => {
            return val.categorie?.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((val) => {
            return (
              <NavLink to="/offre/direction">  <div className="search__result" key={val?.id}> 
             {val?.categorie}
              </div>
              </NavLink>  
            );
          })}
          
      </div>
      </section>
    </>
  );
}