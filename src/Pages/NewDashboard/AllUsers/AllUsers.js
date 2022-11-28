import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllUserCard from './AllUserCard';

const AllUsers = () => {

    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }

    })
    return (
        <div>
            {
                users.map(user =><AllUserCard
                    key = {user._id}
                    user = {user}
                    ></AllUserCard>)
            }
        </div>
    );
};

export default AllUsers;