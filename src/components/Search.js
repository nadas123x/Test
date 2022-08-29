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

import "../Registration.css";

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
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            
              <div>
                <h2></h2>
               
                <p> <b>Vous souhaitez nous rejoindre mais ne trouvez pas d’offre d’emploi correspondant à votre profil? Nous vous invitons à soumettre votre candidature spontanée. </b></p>
                <div class="contenant">
         <a href='#home'><img className="imgsearch" src={require('../assets/img/Y.jpg')}  />  </a> 
            <div class="texte_centrer">Candidature spontanée</div>
          
</div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Métiers</Nav.Link>
                    </Nav.Item>
                  
                    <Nav.Item>
                      <Nav.Link eventKey="third">Raisons de nous rejoindre</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Au sein du Groupe OCP, vous aurez l’opportunité de vous réaliser en contribuant à une mission noble – « nourrir la terre pour nourrir la planète » –, en vous investissant dans des secteurs d’avenir qui se situent au centre des enjeux mondiaux et apportent des services essentiels à l’humanité. Ce challenge, nous voulons le relever avec vous et pour vous.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

                <section className="banner" id="home">

<div className="register-container">
<Col xs={40} md={14} xl={4} >
<br></br>
    <TrackVisibility>
      {({ isVisible }) =>
        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
          <img src={headerImg} alt="Header Img"/>
        </div>}
    </TrackVisibility>
    </Col>
    <form className="register-form" onSubmit={handleSubmit}> 
    <br></br>    
    
    <div className="contactez">


    </div>

   

   

    <input type="text" 
    name="firstname" 
    placeholder=" &nbsp;
    Prénom &nbsp;
    " 
    onChange={(event) =>
        {
            setFname(event.target.value);       
        }}
    />

    <input type="text" 
    name="lastname"
    placeholder="&nbsp;
    Nom &nbsp;
    "
    onChange={(event) =>
        {
            setLname(event.target.value);       
        }}           
    />

     
    <input type="text" 
    name="email" 
    placeholder="&nbsp;
    Email&nbsp;
    "
    onChange={(event) =>
        {
            setEmail(event.target.value);       
        }}           
    />



<input type="text" 
    name="phone" 
    placeholder="&nbsp;
    Numéro de téléphone &nbsp;
    "
    onChange={(event) =>
        {
            setPhone(event.target.value);       
        }}           
    />
    <input type="text" 
    name="pays" 
    placeholder="&nbsp;
    Pays &nbsp;
    "
    onChange={(event) =>
        {
            setPays(event.target.value);       
        }}           
    />

<div className="msg">

<input type="text" 
    name="message" 
    placeholder="&nbsp;
    Message &nbsp;
    "
    onChange={(event) =>
        {
            setMessage(event.target.value);       
        }}           
    />
    </div>


    <h1 className="nom"> </h1>    <UploadFiles/> 

    <div className="contactez">

    <button type="submit" >Envoyer</button>

</div>
    </form>     


</div>
</section>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
    <NavBar/>
   
    </>
  );
}