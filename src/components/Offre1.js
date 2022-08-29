import { PlusIcon, MinusIcon, XIcon, ExclamationIcon, TrashIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'
import { NavLink, useHistory ,Link } from 'react-router-dom';
import useDeleteOffre from '../hooks/useDeleteOffre';
import useUpdateOffre from '../hooks/useUpdateOffre';
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Offre1.css';





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

    
        
   
    return (

            <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
            
          <h3>Catégorie: {direction.categorie}</h3>


<div className="checkout">
      <div className="checkoutleft">
       

        <div>
          <h2 className="checkout__title"> {direction.name} </h2>
<hr className='ligne1'></hr>
                  
<div className="checkoutProduct">
      <img className="checkoutProduct__image" src={direction.imageback}/>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{direction.description}</p>
        <br></br>
        
        <p className="checkoutProduct__price">
          
          <small><strong>   <p className="checkoutProduct__price">{direction.datepub} 🕐 </p></strong></small>
          <br></br>
          <small><strong>   <p className="checkoutProduct__price">{direction.categorie} 🖥️ </p></strong></small>

        </p>
        <hr className='ligne'></hr>

        <div className="checkoutProduct__rating">
          {Array()
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
     
      </div>
    </div>
        </div>
      </div>
      </div>

      <div className="checkoutright">
      </div>
    </div>



      
    <Link to="/login"  className="subtotal">
      <button >Postulez maintenant   </button>
      </Link>
      
    
 
  












               
                

            </div>
            
            <div className="">
              
            </div>
            {showDetail === direction.id ? (
                <div className="">
                    <button className="" onClick={() => setShowDetail(null)}>
                        <XIcon className="" />
                    </button>
                    <span className="">Quantity: {direction.quantity}</span>
                  
                    <div className="">
                    
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
