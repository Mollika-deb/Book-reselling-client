import {  useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import OrderCard from './OrderCard';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const url = `https://assignment-12-server-blush.vercel.app/order?email=${user?.email}`;
    const {data : orders = []} = useQuery({
        queryKey:['order', user?.email],
        queryFn: async () =>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

    return (
        <div>
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