import React from 'react';
import './Profill.css';
import Card from 'react-bootstrap/Card';

import projImg1 from "../assets/img/indus.png";
import projImg2 from "../assets/img/mark.png";
import projImg3 from "../assets/img/dig.jpg";
import projImg4 from "../assets/img/fin.png";
import projImg5 from "../assets/img/audi.png";
import projImg6 from "../assets/img/jur.png";
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService  from "../services/auth.service"
import MsgUserServices from "../services/MsgUserServices";
import { NavLink, useHistory } from 'react-router-dom';


const MsgUser =()  => {
    const currentUser = AuthService.getCurrentUser();
    console.log(currentUser);
    const fileInfos=useState([]);
    const [msgs, setMsgs] = useState([]);
  
    const init = () => {
        MsgUserServices.getAll()
          .then(response => {
            console.log('Printing offre data', response.data);
            setMsgs(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      }
    
      useEffect(() => {
        init();
      }, []);
    
      const handleDelete = (id) => {
        console.log('Printing id', id);
        MsgUserServices.remove(id)
          .then(response => {
            console.log('postule deleted successfully', response.data);
            init();
          })
          .catch(error => {
            console.log('Something went wrong', error);
          })
      }
      
    
  
   
    return (
     <body className='baby'>
        <div className="maincontainer">
        <div class="container">
            <div class="profile-page tx-13">
                <div class="row">
                    <div class="col-12 grid-margin">
                        <div class="profile-header">
                            <div class="cover">
                                <div class="gray-shade"></div>
                            
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
                                  
                                        <h6 class="pt-1px d-none d-md-block" href="#">                                       
                                       
About</h6>
                                    </li>
                                    <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="">
                                      
                                        </svg>
                                        <a class="pt-1px d-none d-md-block" href="./offres">Offres <span class="text-muted tx-12"></span></a>
                                    </li>
                                    <li class="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image mr-1 icon-md">
                                        
                                        </svg>
                                        <a class="pt-1px d-none d-md-block" href="#">Messages</a>
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
                <br></br>
                <div class="row profile-bodyy">

                <div class="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
                        <div class="cardddd rounded">
                            <div class="cardddd-bodyy">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    
                                    <h6 class="card-title mb-0">  &ensp;  About</h6>
                                    <div class="">
                                        <button class="" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal icon-lg text-muted pb-3px">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item d-flex align-items-center" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 icon-sm mr-2">
                                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                </svg> <span class="">Edit</span></a>
                                            <a class="dropdown-item d-flex align-items-center" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch icon-sm mr-2">
                                                    <line x1="6" y1="3" x2="6" y2="15"></line>
                                                    <circle cx="18" cy="6" r="3"></circle>
                                                    <circle cx="6" cy="18" r="3"></circle>
                                                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                                                </svg> <span class="">Update</span></a>
                                            <a class="dropdown-item d-flex align-items-center" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye icon-sm mr-2">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg> <span class="">View all</span></a>
                                        </div>
                                    </div>
                                </div>
                                <p></p>
                                <div class="mt-3">
                                    <label class="tx-11 font-weight-bold mb-0 ">  &ensp; Inscris le:</label>
                                    <p class="text-muted">  &ensp; 20 juillet 2022</p>
                                </div>
                                <div class="mt-3">
                                    <label class="tx-11 font-weight-bold mb-0 ">  &ensp; Nom:</label>
                                    <p class="text-muted"> &ensp; {currentUser?.username}</p>
                                </div>
                                <div class="mt-3">
                                    <label class="tx-11 font-weight-bold mb-0 "> &ensp; Email:</label>
                                    <p class="text-muted"> &ensp; {currentUser?.email}</p>
                                </div>
                                <div class="mt-3">
                                    <label class="tx-11 font-weight-bold mb-0 "> &ensp; Authorities:</label>
                                    <p class="text-muted">    &ensp; {currentUser?.role &&
                     currentUser.role.map((role, index) => <li key={index}>{role}</li>)}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                   
    
                    <div class="d-none d-xl-block col-xl-3 right-wrapper">
                        
                        <div class="row">
                            <div class="col-md-12 grid-margin">
                                <div class="carrd rounded">
                                    <div class="carrd-bodyy">
                                        <h6 class="carrd-title">  <p style={{ color: 'red' }}  > Les derniers messages: </p></h6>
                                        <hr className='hrmsg'></hr>
                                     <hr ></hr>
                                     {  msgs.map(msgs => (
              <div className='' key={msgs.id}>
                 
                 <Card.Subtitle style={{ color: 'black' }}>   <p style={{ color: 'red' }}  >À: </p>  {msgs.email}
</Card.Subtitle>
<br></br>
         
                 <Card.Subtitle style={{ color: 'black' }} >  <p style={{ color: 'red' }}  >Message: </p>
                 <br></br>
                  {msgs.message}</Card.Subtitle>

                
               <hr ></hr>

               <hr className='hrmsg'></hr>




               </div>
            ))
          }   
          <br></br><br></br>
                                        <div class="latest-photos">
                                            <div class="row">
                                                <div class="col-mdd-4">
                                                   
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                   
                        </div>
                    </div>
                                     
                         
            </div>
          </div> 
          </div> 
          </div> 
          <br></br><br></br>
          </body>
             
       
     
        

          );
}


export default MsgUser;