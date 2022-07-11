import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import useOffre from './useOffre';

export default function useDeleteOffre() {
    const queryClient = useQueryClient();
    const [success, error] = useOffre();

    return useMutation(offre => axios.delete(`/offre/${offre.id}`).then(res => res.data), {
        onSettled: () => {
            queryClient.invalidateQueries('allOffreData');
        },
        onSuccess: () => success(),
        onError: () => error(),
    });
}
