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




export default function Offre1({ direction }) {
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

        if (direction.id==1) {
            console.log('Le lien a été cliqué.' + direction.id);
            navigate("../Offre1", { replace: true });

  

        }

         if (direction.id==2) {
            navigate("../", { replace: true });
        }
    

    }
       
        
   
    return (

        <div className="bo">
            <div
                className="p-1"
            >

                
               
                 <div className=''>

                 <Card border="dark" style={{ width: '18rem' }}>
                 <Card.Body>
                 <Card.Title style={{ color: 'black' }}>                {direction.name}
</Card.Title>
<br></br>

               <NavLink to="/infos">  <Card.Img variant="top" src={direction.imageback}/>
               </NavLink>
               <br></br>
               <br></br>
         
                 <Card.Text style={{ color: 'black' }} > &nbsp; &nbsp; &nbsp;   {direction.description}</Card.Text>
             
              
               <Card.Subtitle style={{ color: 'black' }} >{direction.datepub}.</Card.Subtitle>
               <br></br>
               <Card.Title style={{ color: 'black' }} >Catégorie: {direction.categorie}</Card.Title>
               <Button class="btn btn-success" onClick={() => handleNav(direction.id)}> Consulter 
               </Button>



                </Card.Body>
               </Card>
                </div>
            </div>
            
            <div className="border-t flex flex-row">
              
            </div>
            {showDetail === direction.id ? (
                <div className="absolute top-0 left-0 rounded-lg w-full h-full backdrop-blur-md flex flex-col justify-center items-center">
                    <button className="absolute top-1 right-1" onClick={() => setShowDetail(null)}>
                        <XIcon className="h-5 w-5" />
                    </button>
                    <span className="font-bold mb-4">Quantity: {direction.quantity}</span>
                  
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
