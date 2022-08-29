import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CandidatureServices from '../services/CandidatureServices';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import './Offreform.css';
import FileList from './FilesList';

const CandidatureList = () => {
 
  const fileInfos=useState([]);
  const [candidature, setCandidature] = useState([]);

  const init = () => {
    CandidatureServices.getAll()
      .then(response => {
        console.log('Printing offre data', response.data);
        setCandidature(response.data);
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
    CandidatureServices.remove(id)
      .then(response => {
        console.log('Candidaturee deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  

  return (
    <div className="container">
      
      <hr/>
     
      <div>
       
      
        <br></br>
        <br></br>
<h1 className='nadalaplusbelle'>Les Candidatures spontanées:</h1>
<br></br>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Nom</th>

              <th>Prénom</th>
             
              <th>description</th>
              <th>phone</th>
              <th>email</th>
           
              <th>Cv</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
          {
            candidature.map(candidature => (
              <tr key={candidature.id}>

                <td>{candidature.fname}</td>
                <td>{candidature.lname}</td>
                <td>{candidature.message}</td>
                <td>{candidature.phone}</td>
                <td>{candidature.email}</td>
<td>  <FileList/> </td>


                <td>
                  <Link className="btnupdate" to="/admin/reponses">✉️</Link>
                  <br></br>
                  <br></br>
                  
                  <button className="btnupdate" onClick={() => {
                    handleDelete(candidature.id);
                  }}>❌</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default CandidatureList;