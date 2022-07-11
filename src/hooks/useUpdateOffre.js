import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import useOffre from './useOffre';

export default function useUpdateOffre() {
    const [success, error] = useOffre();
    const queryClient = useQueryClient();




    return useMutation(
        updatedOffre =>
            axios
                .put(`/offre/${updatedOffre.id}`, {
                    quantity: updatedOffre.quantity,
                })
                .then(res => res.data),
        {
            onMutate: updatedOffre => {
                queryClient.setQueryData(['allOffreData', updatedOffre.id], updatedOffre);
            },
            onSuccess: updatedOffre => {
                queryClient.setQueryData(['allOffreData', updatedOffre.id], updatedOffre);

                if (queryClient.getQueryData('allOffreData')) {
                    queryClient.setQueryData('allOffreData', data => {
                        return data.map(oldOffre => {
                            if (oldOffre.id === updatedOffre.id) {
                                return { ...oldOffre, ...updatedOffre };
                            }

                            return oldOffre;
                        });
                    });
                } else {
                    queryClient.setQueryData('allOffreData', [updatedOffre]);
                    queryClient.invalidateQueries('allOffreData');
                }

                success();
            },
            onError: () => error(),
        },
    );
}
