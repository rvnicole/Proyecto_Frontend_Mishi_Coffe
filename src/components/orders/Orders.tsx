import CardOrder from "./CardOrder";
import { storeOrders } from "../../store";
import type { OrderType } from "../../types";

type OrdersProps = {
    orders: OrderType[]
}

export default function Orders({ orders }: OrdersProps) {
    const status = storeOrders((state) => state.status);

    const filterOrders = status
        ? orders.filter((order) => order.status === status)
        : orders;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filterOrders.map((order) => (
                <CardOrder key={order._id} order={order} />
            ))}
        </div>
    );
}