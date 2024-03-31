import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const useCab = () => {
    const {user} = useContext(AuthContext);
    const { refetch, data: cab = [] } = useQuery({
        queryKey: ['cabs', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/cabs?email=${user?.email}`)
            return res.json();
        },
      })
      return[cab, refetch]
};

export default useCab;