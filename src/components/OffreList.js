import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import OffreService from '../services/OffreService';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import './Offreform.css'

const OffreList = () => {

  const [offre, setOffre] = useState([]);

  const init = () => {
    OffreService.getAll()
      .then(response => {
        console.log('Printing offre data', response.data);
        setOffre(response.data);
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
    OffreService.remove(id)
      .then(response => {
        console.log('offre deleted successfully', response.data);
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
       
      
        <Link to="/AddOffreadmin" className="btn btn-warn mb-2">Add offre</Link>
        <br></br>
        <br></br>

        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th></th>
              <th>Nom</th>
              <th>Description</th>
              <th>Catégorie</th>
              <th>Date pub</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
          {
            offre.map(offre => (
              <tr key={offre.id}>
                                <Card.Img variant="top" src={offre.imageback}/>

                <td>{offre.name}</td>
                <td>{offre.description}</td>
                <td>{offre.categorie}</td>
                <td>{offre.datepub}</td>

                <td>
                  <Link className="btnupdate" to={`/offre/edit/${offre.id}`}>✍️</Link>
                  <br></br>
                  <br></br>
                  
                  <button className="btnupdate" onClick={() => {
                    handleDelete(offre.id);
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

export default OffreList;