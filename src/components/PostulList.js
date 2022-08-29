import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PostulServices from '../services/PostulServices';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import './Offreform.css';
import FileList from './FilesList';

const PostulList = () => {
 
  const fileInfos=useState([]);
  const [postule, setPostule] = useState([]);

  const init = () => {
    PostulServices.getAll()
      .then(response => {
        console.log('Printing offre data', response.data);
        setPostule(response.data);
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
    PostulServices.remove(id)
      .then(response => {
        console.log('postule deleted successfully', response.data);
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
<h1 className='nadalaplusbelle'>Les demandes de postulation:</h1>
<br></br>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Nom</th>

              <th>Prénom</th>
              <th>ddn</th>
              <th>compagnie </th>
              <th>description</th>
              <th>phone</th>
              <th>adresse</th>
              <th>email</th>
           
              <th>Cv</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
          {
            postule.map(postule => (
              <tr key={postule.id}>

                <td>{postule.fname}</td>
                <td>{postule.lname}</td>
                <td>{postule.datedenaissance}</td>
                <td>{postule.compagnie}</td>
                <td>{postule.message}</td>
                <td>{postule.phone}</td>
                <td>{postule.adresse}</td>
                <td>{postule.email}</td>
<td>  <FileList/> </td>


                <td>
                  <Link className="btnupdate" to="/admin/reponses">✉️</Link>
                  <br></br>
                  <br></br>
                  
                  <button className="btnupdate" onClick={() => {
                    handleDelete(postule.id);
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

export default PostulList;