import { useEffect, useState } from "react"
import { storeOrders } from "../store";
import { obtenerOrdenes } from "../api/orders";

export default function Home() {
    const orders = storeOrders((state) => state.orders);
    const startDate = storeOrders((state) => state.startDate);
    const endDate = storeOrders((state) => state.endDate);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        obtenerOrdenes(startDate, endDate)
    }, [startDate, endDate]);

    if( !loading && !orders.length ) return (
        <div className="text-center my-5">
            <img src="/mishi-home.png" className="m-auto w-96"/>
            <p className="text-2xl font-bold text-primary">¡Oops!</p>
            <p className="text-xl font-bold text-primary">Aún no hay órdenes</p>
        </div>
    );
}