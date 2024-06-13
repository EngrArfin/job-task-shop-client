/* import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin, isLoading, isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/admin${user?.email}`);
            console.log('is admin responce', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin; */
