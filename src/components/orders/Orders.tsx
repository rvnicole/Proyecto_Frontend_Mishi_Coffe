import { useEffect, useState } from "react";
import CardOrder from "./CardOrder";
import { storeOrders } from "../../store";
import type { OrderType } from "../../types";

type OrdersProps = {
    orders: OrderType[]
}

export default function Orders({ orders }: OrdersProps) {
    const status = storeOrders((state) => state.status );
    const [filterOrders, setFilterOrders] = useState(orders);

    useEffect(() => {
        if(status === "") {
            setFilterOrders(orders);
            return;
        }

        const newOrders = orders.filter(order => order.status === status);
        setFilterOrders(newOrders);
    }, [status]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            { filterOrders.map(order => (
                <CardOrder key={order._id} order={order} />
            ))}            
        </div>
    )
}