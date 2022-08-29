import axios from "axios";
import { useEffect } from "react";

import { useState } from "react";
import "./Messages.css";
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/mbg.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import AuthService from "../services/auth.service";

import { useNavigate } from "react-router-dom";

function Messages()
{
  
   const [id, setId] = useState("");
  
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
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
         await axios.post("http://localhost:8080/admin/savemsg" , 


        {
        id: id,
    
        email : email,
   
        message :message 
        });
          alert("User Registation Successfully");
          setId("");
       
          setEmail("");
        
          setMessage("");
          navigate("/");

        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <section className="banner" id="home">

        <div className="register-container">
  <Col xs={49} md={19} xl={5} >
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

            <h6 class="tagline">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; Votre Message   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;                       </h6>
            </div>
        
           <br></br>

           

          


             
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
    
   

       
<br></br>
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
            <br></br>
            </div>
            <br></br>
            <br></br>
            <div className="contactez">

            <button type="submit" >Répondre</button>

    </div>
            </form>     

   
        </div>
        </section>
    )
}

export default Messages;