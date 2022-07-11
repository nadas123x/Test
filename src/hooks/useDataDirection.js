import axios from 'axios';
import { useQuery } from 'react-query';

export default function useDataDirection() {
    return useQuery('allDirectionData', () => axios.get('/direction').then(res => res.data));
}
