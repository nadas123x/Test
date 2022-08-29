import React from 'react';
import { useState } from 'react';
import "../ind.css" ;
import { Toaster } from 'react-hot-toast';
import OffreForm from './OffreForm';
import OffreInfo from './OffreInfo';
import useOffreData from '../hooks/useOffreData';
import { NavBar } from './NavBar';
import OffresAdmin from './OffresAdmin';

export default function TousAdmin() {
    const [showAddForm, setShowAddForm] = useState(false);
    const { isLoading, isError, data } = useOffreData();

    return (
        
        <>
                
                <div className="text-center py-6 mb-5">
                <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-purple-200 to-cyan-300 drop-shadow-lg">
                    Pokemon Quantity App
                </h1>
            </div>
            <div className="md:container md:mx-auto mb-5 px-2">
                <div className="flex flex-col justify-center text-center mb-5 mx-auto md:w-1/3">
                    <button
                        className="flex items-center justify-center rounded-lg bg-cyan-200 hover:bg-cyan-300 px-4 py-2 text-slate-700"
                        onClick={() => setShowAddForm(!showAddForm)}
                    >
                       
                        <span>add pokémon</span>
                    </button>
                    {showAddForm && (
                        <div className="mt-4 rounded-lg p-4 bg-slate-100">
                        
                        </div>
                    )}
                </div>
                {isLoading && (
                    <div className="text-center">
                        <strong>Loading...</strong>
                    </div>
                )}
                {isError && (
                    <div className="text-center">
                        <strong>Error!</strong>
                    </div>
                )}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {data &&
                        data.length > 0 &&
                        data.map((p, i) => <OffresAdmin key={i} offre={p} />)}
                </div>
            </div>
            <Toaster />

        </>

    );

}
