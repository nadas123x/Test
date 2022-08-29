import axios from 'axios';
import { useQuery } from 'react-query';

export default function useOffreData() {
    return useQuery('allOffreData', () => axios.get('/getall').then(res => res.data));
}
