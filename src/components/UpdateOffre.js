import { useState,useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import OffreService from "../services/OffreService";
import { useNavigate } from "react-router-dom";

const UpdateOffre = () => {
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[categorie, setCategorie] = useState('');
    const[imageback, setImageback] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    const saveOffre = (e) => {
        e.preventDefault();
        
        const offre = {name, description,imageback, categorie, id};
        if (id) {
            //update
            OffreService.update(offre)
                .then(response => {
                    console.log('offre data updated successfully', response.data);
                    navigate('/o');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            OffreService.create(offre)
            .then(response => {
                console.log("offre added successfully", response.data);
                navigate("/o");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            OffreService.get(id)
                .then(offre => {
                    setName(offre.data.name);
                    setCategorie(offre.data.categorie);
                    setDescription(offre.data.description);
                    setImageback(offre.imageback);


                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add offre</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="department"
                        value={categorie}
                        onChange={(e) => setCategorie(e.target.value)}
                        placeholder="Enter Department"
                    />

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="location"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Location"
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="location"
                        value={imageback}
                        onChange={(e) => setImageback(e.target.value)}
                        placeholder="Enter Location"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveOffre(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default UpdateOffre;