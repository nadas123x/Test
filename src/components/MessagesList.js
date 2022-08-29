import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MessagesServices from '../services/MessagesServices';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import "../ind.css" ;


import Header from './Header';
import './Offreform.css'

const MessagesList = () => {

  const [records, setRecords] = useState([]);

  const init = () => {
    MessagesServices.getAll()
      .then(response => {
        console.log('Printing offre data', response.data);
        setRecords(response.data);
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
    MessagesServices.remove(id)
      .then(response => {
        console.log('records deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="bxg">
      
      <hr/>
     
      <div>
       
      
        <br></br>
        <br></br>

    
           

          
          {
            records.map(records => (
              <div className='pourtoi' key={records.id}>
    <Card color="white" border="dark" style={{ width: '18rem' }}>
                 <Card.Body>
                 <Card.Subtitle style={{ color: 'black' }}>    Message par:            {records.fname} {records.lname}
</Card.Subtitle>

<br></br>

               <NavLink to="/infos">  <Card.Img variant="top" src="https://img.freepik.com/vecteurs-libre/caractere-couple-tenant-nouvelle-illustration-message_53876-26822.jpg"/>
               </NavLink>
               <br></br>
               <br></br>
         
                 <Card.Text style={{ color: 'black' }} >Message:  {records.message}</Card.Text>
             
                 <br></br>
               <Card.Subtitle style={{ color: 'black' }} >{records.phone}.</Card.Subtitle>
               <br></br>
               <Card.Subtitle style={{ color: 'black' }} > {records.email}</Card.Subtitle>
               <button className="btnupdate" onClick={() => {
                    handleDelete(records.id);
                  }}>❌</button>



                </Card.Body>
               </Card>


                 <br></br>
                  
                 
              </div>
            ))
          }
        </div>
        </div>
 
  );
}

export default MessagesList;