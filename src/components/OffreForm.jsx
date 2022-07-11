import { SaveIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import useCreateOffre from '../hooks/useCreateOffre';

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
        <form className="inline-grid" onSubmit={handleSubmit}>
            <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="enter name..."
                value={newOffre.name}
                required
                onChange={e => setNewOffre({ ...newOffre, name: e.target.value })}
            />
            <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="enter front image url..."
                value={newOffre.description}
                required
                onChange={e => setNewOffre({ ...newOffre, description: e.target.value })}
            />
                <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="enter front image url..."
                value={newOffre.categorie}
                required
                onChange={e => setNewOffre({ ...newOffre, description: e.target.value })}
            />
            <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="enter back image url..."
                value={newOffre.imageback}
                required
                onChange={e => setNewOffre({ ...newOffre, imageback: e.target.value })}
            />
              <input
                type="text"
                className="rounded-md border-slate-300 shadow-md p-2 mb-2"
                placeholder="enter back image url..."
                value={newOffre.datepub}
                required
                onChange={e => setNewOffre({ ...newOffre, datepub: e.target.value })}
            />
            <button
                type="submit"
                className="flex items-center justify-center rounded-lg bg-cyan-200 hover:bg-cyan-300 px-4 py-2 text-slate-700 mt-4"
                disabled={mutationCreateOffre.isLoading}
            >
                <SaveIcon className="h-5 w-5 mr-1" />
                <span>save</span>
            </button>
        </form>
    );
}
