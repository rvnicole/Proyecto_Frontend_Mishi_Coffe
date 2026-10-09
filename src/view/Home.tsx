import { useQuery } from "@tanstack/react-query";
import { storeOrders } from "../store";
import { obtenerOrdenes } from "../api/orders";
import Load from "../components/ui/Load";
import Orders from "../components/orders/Orders";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
    const startDate = storeOrders((state) => state.startDate);
    const endDate = storeOrders((state) => state.endDate);

    const { data: orders = [], isLoading, isError, error } = useQuery({
        queryKey: ["orders", startDate, endDate],
        queryFn: async () => {
            const result = await obtenerOrdenes(startDate, endDate);
            if (!result.success) throw new Error(result.error.join(", "));
            return result.data;
        },
        refetchInterval: 30_000,
        refetchIntervalInBackground: true,
    });

    if (isLoading) return (
        <Load className="mt-20" classNameIcon="size-12 m-auto text-primary" />
    );

    if(isError) return (
        <ErrorMessage message={error.message} />
    )

    if( !isLoading && !orders.length ) return (
        <div className="text-center my-5">
            <img src="/mishi-home.png" className="m-auto w-96"/>
            <p className="text-2xl font-bold text-primary">¡Oops!</p>
            <p className="text-xl font-bold text-primary">Aún no hay órdenes</p>
        </div>
    );

    return (
        <Orders orders={orders}/>
    )
}