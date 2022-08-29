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
import Navbarregister from './Navbarregister';



function TousOffre() {
    const [showAddForm, setShowAddForm] = useState(false);
    const { isLoading, isError, data } = useDataDirection();

    return (
        
        <>
                
                <Navbarregister />
        <body className=''>
       
            
<br></br>
<br></br>


                <div className="">
                    {data &&
                        data.length > 0 &&
                        data.map((p, i) => <Offre1 key={i} direction={p} />)}
                </div>
      
<br></br>
<br></br>

            <Toaster />
            </body>


        </>

    );
}

export default TousOffre