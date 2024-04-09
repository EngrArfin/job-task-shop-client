import React from 'react';
import {useQuery} from '@tanstack/react-query'

const AllUsers = () => {
    const {data: users = [], refetch } = useQuery(['users'], async() =>{
        const res = await fetch('http://localhost:5000/users')
            return res.json();
    })
    return (
        <div>
            <h2>Welcome to All Users: {users.length} </h2>
        </div>
    );
};

export default AllUsers;