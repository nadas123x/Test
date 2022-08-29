import { PlusIcon, MinusIcon, XIcon, ExclamationIcon, TrashIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom';
import useDeleteOffre from '../hooks/useDeleteOffre';
import useUpdateOffre from '../hooks/useUpdateOffre';
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";




export default function OffreInfo({ offre }) {
    let { id } = useParams();  
      const [showDetail, setShowDetail] = useState(null);
    

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 0) {
            return;
        }

    };

    const handleDelete = id => {
    };
    let navigate = useNavigate();

    function handleNav(id){

        if (offre.id==1) {
            console.log('Le lien a été cliqué.' + offre.id);
            navigate("../offre/direction/1", { replace: true });

  

        }

         if (offre.id==2) {
            navigate("../offre/direction/1", { replace: true });
        }
    

    }
       
        
   
    return (

        <div className="bo">
            <div
                className="p-1"
            >

                
               
                 <div className=''>

                 <Card color="white" border="dark" style={{ width: '18rem' }}>
                 <Card.Body>
                 <Card.Title style={{ color: 'black' }}>                {offre.name}
</Card.Title>
<br></br>

               <NavLink to="/infos">  <Card.Img variant="top" src={offre.imageback}/>
               </NavLink>
               <br></br>
               <br></br>
         
                 <Card.Text style={{ color: 'black' }} > &nbsp; &nbsp; &nbsp;   {offre.description}</Card.Text>
             
                 <br></br>
               <Card.Subtitle style={{ color: 'black' }} >{offre.datepub}.</Card.Subtitle>
               <br></br>
               <Card.Title style={{ color: 'black' }} >Catégorie: {offre.categorie}</Card.Title>
               <Button class="btn btn-success" onClick={() => handleNav(offre.id)}> Consulter 
               </Button>



                </Card.Body>
               </Card>
                </div>
            </div>
            
            <div className="border-t flex flex-row">
              
            </div>
            {showDetail === offre.id ? (
                <div className="absolute top-0 left-0 rounded-lg w-full h-full backdrop-blur-md flex flex-col justify-center items-center">
                    <button className="absolute top-1 right-1" onClick={() => setShowDetail()}>
                        <XIcon className="h-5 w-5" />
                    </button>
                    <span className="font-bold mb-4">Quantity: {offre.quantity}</span>
                  
                    <div className="w-full border-t">
                    
                    </div>
                </div>
            ) : null}
            <html>
<head>

</head>
<body>



</body>
</html>
        </div>
    );
}
