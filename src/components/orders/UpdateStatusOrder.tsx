import { useMutation, useQueryClient } from "@tanstack/react-query";
import { StatusColor, statusOrders } from "../../data/lists";
import { updateStatusOrder } from "../../api/orders";
import { storeOrders } from "../../store";
import Load from "../ui/Load";
import type { OrderType } from "../../types";

type UpdateStatusOrderProps = {
    orderId: OrderType["_id"],
    status: OrderType["status"]
}

export default function UpdateStatusOrder({orderId, status}: UpdateStatusOrderProps) {
    if( status === "Entregado" || status === "Cancelado") return;

    const startDate = storeOrders((state) => state.startDate);
    const endDate = storeOrders((state) => state.endDate);

    const estados = statusOrders.filter(statusOrder => statusOrder != "Cancelado");
    const index = estados.findIndex(estado => status === estado);
    const newStatus = estados[index + 1];

    const queryClient = useQueryClient();
    
    const { mutate, isPending } = useMutation({
        mutationFn: (data: UpdateStatusOrderProps) => updateStatusOrder(data),
        onSuccess: async () => {
            await queryClient.refetchQueries({ 
                queryKey: ["orders", startDate, endDate]
            });
        },
        onError: (error) => {
            console.log(error.message);
        },
    });

    return (
        <>
            <button
                type="button"
                className={`flex justify-center items-center font-semibold text-white bg-${StatusColor[newStatus]} rounded cursor-pointer hover:opacity-80`}
                onClick={() => mutate({orderId, status: newStatus})}
            >
                { isPending ? <Load classNameIcon="size-5 text-white"/> : newStatus }
            </button>
        </>
    )
}