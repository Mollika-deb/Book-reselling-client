import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllUserCard from './AllUserCard';

const AllUsers = () => {

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-blush.vercel.app/users');
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