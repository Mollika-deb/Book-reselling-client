import {  useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import OrderCard from './OrderCard';

const MyOrders = () => {
    useTitle("My order")
    const {user} = useContext(AuthContext);

    const url = `https://assignment-12-server-blush.vercel.app/order?email=${user?.email}`;
    const {data : orders = []} = useQuery({
        queryKey:['order', user?.email],
        queryFn: async () =>{
            const res = await fetch(url,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }

    })

    return (
        <div className='mr-32'>
            {
                orders.map(order =><OrderCard
                    kye={order._id}
                    order = {order}
                    ></OrderCard>)
            }
        </div>
    );
};

export default MyOrders;