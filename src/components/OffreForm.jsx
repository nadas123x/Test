import { SaveIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import useCreateOffre from '../hooks/useCreateOffre';
import "./Offreform.css";


export default function OffreForm() {
    const [newOffre, setNewOffre] = useState({
        name: '',
        description: '',
        imageback: '',
    });
    const mutationCreateOffre = useCreateOffre();

    const handleSubmit = e => {
        e.preventDefault();

        mutationCreateOffre.mutate(newOffre);

        setNewOffre({
            name: '',
            description: '',
            imageback: '',
        });
    };

    return (
        <form className="carddd" onSubmit={handleSubmit}>
            <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="Nom de l'offre"
                value={newOffre.name}
                required
                onChange={e => setNewOffre({ ...newOffre, name: e.target.value })}
            />
            <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="Description de l'offre"
                value={newOffre.description}
                required
                onChange={e => setNewOffre({ ...newOffre, description: e.target.value })}
            />
                <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="Catégorie de l'offre "
                value={newOffre.categorie}
                required
                onChange={e => setNewOffre({ ...newOffre, description: e.target.value })}
            />
            <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="url image"
                value={newOffre.imageback}
                required
                onChange={e => setNewOffre({ ...newOffre, imageback: e.target.value })}
            />
              <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="Date de publication"
                value={newOffre.datepub}
                required
                onChange={e => setNewOffre({ ...newOffre, datepub: e.target.value })}
            />
            <button 
                type="submit"
                className="btnaddform"                disabled={mutationCreateOffre.isLoading}
            >
                <SaveIcon  />
                <span>save</span>
            </button>
        </form>
    );
}
