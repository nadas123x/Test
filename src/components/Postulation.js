import axios from "axios";
import { useEffect } from "react";
import UploadFiles from "../components/upload-files.component";
import './Profill.css';

import { useState } from "react";
import "./Postulation.css";
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/nn.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import AuthService from "../services/auth.service";

import { useNavigate } from "react-router-dom";
import { DescriptionOutlined } from "@material-ui/icons";

function Postulation()
{
   const [id, setId] = useState("");
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [description, setDescription] = useState("");
   const [datedenaissance, setDatedenaissance] = useState("");
   const [compagnie, setCompagnie] = useState("");

   const [adresse, setAdresse] = useState("");


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
         await axios.post("http://localhost:8080/savepostuls" , 

        {
        id: id,
        firstname: firstname,
        lastname : lastname,
        email : email,
        phone : phone,
        description : description,
        datedenaissance: datedenaissance,
        compagnie: compagnie,
        adresse: adresse,
        });
          alert("User Registation Successfully");
          setId("");
          setFirstname("");
          setLastname("");
          setEmail("");
          setPhone("");
          setDescription("");
          setDatedenaissance("");
          setCompagnie("");
          setAdresse("");
          navigate("/");

        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <section className="" id="home">
              <body className='baby'>
        <div className="maincontainer">
        <div class="container">
            <div class="profile-page tx-13">
            <div class="row">
                  <div class="col-12 grid-margin">
                        <div class="profile-header">
                            <div class="cover">
                                <div class="gray-shade">                 </div>

                            
                                <div class="cover-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <img class="profile-pic" src="https://www.w3schools.com/howto/img_avatar2.png" alt="profile" />
                                        <span class="profile-name">{currentUser?.username}</span>
                                    </div>
                                    <div class="d-none d-md-block">
                                        <button class="btn btn-primary btn-icon-text btn-edit-profile">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit btn-icon-prepend">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                            </svg> Edit profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="header-links">
                                <ul class="links d-flex align-items-center mt-3 mt-md-0">
                                    <li class="header-link-item d-flex align-items-center active">
                                       
                                    </li>
                                    <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user mr-1 icon-md">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <a class="pt-1px d-none d-md-block" href="#">About</a>
                                    </li>
                                    <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="">
                                      
                                        </svg>
                                        <a class="pt-1px d-none d-md-block" href="./offres">Offres <span class="text-muted tx-12"></span></a>
                                    </li>
                                    <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image mr-1 icon-md">
                                        
                                        </svg>
                                        <a class="pt-1px d-none d-md-block" href="/user/messages">Messages</a>
                                    </li>
                                    <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video mr-1 icon-md">
                                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
          </div> 
          </body>
<div className="cardd">
       <div className="registerr">
 
            <form className="registerr-form" onSubmit={handleSubmit}> 
            <br></br>    
            
            <div className="postulez">

            <h6 class="tit">

Informations Personnelles:</h6>
            </div>
        
            <br></br>  
            <div className="">
           

     <h1 className="nom"> Votre nom:</h1>      <input type="text" 
            name="firstname" 
            placeholder=" &nbsp;
            Prénom &nbsp;
            " 
            onChange={(event) =>
                {
                    setFirstname(event.target.value);       
                }}
            />
<br></br>

   
<h1 className="nom"> Votre prénom:</h1>          <input type="text" 
            name="lastname"
            placeholder="&nbsp;
            Nom &nbsp;
            "
            onChange={(event) =>
                {
                    setLastname(event.target.value);       
                }}           
            />
<br></br>



<h1 className="nom"> Votre adresse:</h1> <input type="text" 
            name="adresse"
            placeholder="&nbsp;
            adresse &nbsp;
            "
            onChange={(event) =>
                {
                    setAdresse(event.target.value);       
                }}           
            />
<br></br>


<h1 className="nom"> Votre date de naissance:</h1> <input type="text" 
            name="lastname"
            placeholder="&nbsp;
            Nom &nbsp;
            "
            onChange={(event) =>
                {
                    setLastname(event.target.value);       
                }}           
            />
<br></br>
             
      
     <h1 className="nom"> Votre email:</h1>       <input type="text" 
            name="email" 
            placeholder="&nbsp;
            Email&nbsp;
            "
            onChange={(event) =>
                {
                    setEmail(event.target.value);       
                }}           
            />
         <br></br>
   

     
         <h1 className="nom"> Votre numéro:</h1>    <input type="text" 
            name="phone" 
            placeholder="&nbsp;
            Numéro de téléphone &nbsp;
            "
            onChange={(event) =>
                {
                    setPhone(event.target.value);       
                }}           
            />
<br></br>
<div className="msg">

   
<h1 className="nom"> Vos expériences:</h1>  <input type="text" 
            name="description" 
            placeholder="&nbsp;
            description &nbsp;
            "
            onChange={(event) =>
                {
                    setDescription(event.target.value);       
                }}           
            />
       
     <h1 className="nom"> Votre compagnie:</h1>       <input type="text" 
            name="compagnie" 
            placeholder="&nbsp;
            compagnie &nbsp;
            "
            onChange={(event) =>
                {
                    setCompagnie(event.target.value);       
                }}           
            />
            </div>
         
     <h1 className="nom"> Votre CV:</h1>    <UploadFiles/> 
            </div>
            <div className="postulez">

            <button type="submit" >Envoyer</button>

    </div>
            </form>     

   
        </div>
        </div>
        </section>
    )
}

export default Postulation;