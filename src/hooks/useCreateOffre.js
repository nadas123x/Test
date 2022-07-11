import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import useOffre from './useOffre';

export default function useCreateOffre() {
    const queryClient = useQueryClient();
    const [success, error] = useOffre();

    return useMutation(data => axios.post('/offre', data).then(res => res.data), {
        onMutate: newOffre => {
            const oldOffre = queryClient.getQueryData('allOffreData');

            if (oldOffre) {
                queryClient.setQueryData('allOffreData', oldOffre => [
                    ...oldOffre,
                    newOffre,
                ]);
                return;
            }

            return () => queryClient.setQueryData('allOffreData', oldOffre);
        },
        onSettled: () => {
            queryClient.invalidateQueries('allOffreData');
        },
        onSuccess: () => success(),
        onError: () => error(),
    });
}
