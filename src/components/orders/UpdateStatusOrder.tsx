import { StatusColor, statusOrders } from "../../data/lists"
import type { OrderType } from "../../types"

type UpdateStatusOrderProps = {
    orderId: OrderType["_id"],
    status: OrderType["status"]
}

export default function UpdateStatusOrder({orderId, status}: UpdateStatusOrderProps) {
    if( status === "Entregado" || status === "Cancelado") return;

    const estados = statusOrders.filter(statusOrder => statusOrder != "Cancelado");
    const index = estados.findIndex(estado => status === estado);
    const newStatus = estados[index + 1];

    return (
        <>
            <button
                type="button"
                className={`font-semibold text-white bg-${StatusColor[newStatus]} rounded cursor-pointer hover:opacity-80`}
            >
                {newStatus}
            </button>
        </>
    )
}