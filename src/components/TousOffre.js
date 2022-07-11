import { UserAddIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import "../ind.css" ;
import { Toaster } from 'react-hot-toast';
import OffreForm from './OffreForm';
import Offre1 from './Offre1';
import useOffreData from '../hooks/useOffreData';
import { NavBar } from './NavBar';
import { FaBeer } from 'react-icons/fa';

import TodoApp from './TodoApp';
import useDataDirection from '../hooks/useDataDirection';



function TousOffre() {
    const [showAddForm, setShowAddForm] = useState(false);
    const { isLoading, isError, data } = useDataDirection();

    return (
        
        <>
                
                <NavBar />
        <body className='N'>
            <div className="">
                <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-purple-200 to-cyan-300 drop-shadow-lg">
                </h1>
            </div>
            <div className="md:container md:mx-auto mb-5 px-2">
                <div className="flex flex-col justify-center text-center mb-5 mx-auto md:w-1/3">
             
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
                            <br></br>
                <br></br>


                <div className="Searrch">
        <input className='h'
          name="search"
          id="search"
          placeholder=" Rechercher                                                 🔍  "         
          
        />
      

       
</div>
<br></br>
<br></br>

<h3> &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      &nbsp;                   Emplois Management, direction générale Maroc : </h3>

                <div className="bloq">
                    {data &&
                        data.length > 0 &&
                        data.map((p, i) => <Offre1 key={i} direction={p} />)}
                </div>
            </div>
            <div class="pagination">
  <a  href="#">&laquo;</a>
  <a class="active" href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>
<br></br>
<br></br>

            <Toaster />
            </body>


        </>

    );
}

export default TousOffre