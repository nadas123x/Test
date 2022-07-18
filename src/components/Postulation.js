import axios from "axios";
import { useEffect } from "react";
import UploadFiles from "../components/upload-files.component";

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
        });
          alert("User Registation Successfully");
          setId("");
          setFirstname("");
          setLastname("");
          setEmail("");
          setPhone("");
          setDescription("");
          setDatedenaissance("");
          navigate("/");

        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <section className="bannerr" id="home">
<div className="cardd">
<br></br>   
<br></br>   
<br></br>        <div className="registerr">
 
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



<h1 className="nom"> Votre Prénom:</h1> <input type="text" 
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


<h1 className="nom"> Votre nom:</h1> <input type="text" 
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
             
      
     <h1 className="nom"> Votre nom:</h1>       <input type="text" 
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
   

     
         <h1 className="nom"> Votre nom:</h1>    <input type="text" 
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

   
<h1 className="nom"> Votre nom:</h1>  <input type="text" 
            name="description" 
            placeholder="&nbsp;
            description &nbsp;
            "
            onChange={(event) =>
                {
                    setDescription(event.target.value);       
                }}           
            />
       
     <h1 className="nom"> Votre nom:</h1>       <input type="text" 
            name="datedenaissance" 
            placeholder="&nbsp;
            datedenaissance &nbsp;
            "
            onChange={(event) =>
                {
                    setDatedenaissance(event.target.value);       
                }}           
            />
            </div>
         
     <h1 className="nom"> Votre nom:</h1>    <UploadFiles/> 
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