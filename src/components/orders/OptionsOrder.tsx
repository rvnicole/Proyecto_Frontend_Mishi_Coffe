import { StatusColor, statusOrders } from "../../data/lists"
import type { OrderType } from "../../types"

type OptionsOrder = {
    orderId: OrderType["_id"],
    status: OrderType["status"]
}

export default function OptionsOrder({orderId, status}: OptionsOrder) {
    if( status === "Entregado" || status === "Cancelado") return;

    const estados = statusOrders.filter(statusOrder => statusOrder != "Cancelado");
    const index = estados.findIndex(estado => status === estado);
    const newStatus = estados[index + 1];

    return (
        <div className="grid grid-cols-2 gap-2">
            <button
                type="button"
                className="font-semibold text-destructive border-2 border-destructive rounded cursor-pointer hover:opacity-80"
            >
                Cancelar orden
            </button>

            <button
                type="button"
                className={`font-semibold text-white bg-${StatusColor[newStatus]} rounded cursor-pointer hover:opacity-80`}
            >
                {newStatus}
            </button>
        </div>
    )
}