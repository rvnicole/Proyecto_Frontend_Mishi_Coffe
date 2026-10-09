import { Check, ClockFading, CookingPot, Ghost, PaperBag, Star } from "lucide-react";
import type { OrderType } from "../../types";
import type { ReactNode } from "react";

const StatusIcons: Record<OrderType["status"], ReactNode> = {
    "Pendiente": <ClockFading className="bg-yellow-500 text-white size-10 p-1 rounded-full"/>,
    "Confirmado": <Check className="bg-lime-500 text-white size-10 p-1 rounded-full"/>,
    "En preparación": <CookingPot className="bg-purple-500 text-white size-10 p-1 rounded-full"/>,
    "Listo": <PaperBag className="bg-sky-500 text-white size-10 p-1 rounded-full"/>,
    "Entregado": <Star className="bg-primary text-white size-10 p-1 rounded-full"/>,
    "Cancelado": <Ghost className="bg-slate-500 text-white size-10 p-1 rounded-full"/>
}

type StatusOrderProps = {
    status: OrderType["status"]
}

export default function StatusOrder({ status }: StatusOrderProps) {
    return (
        <div>
            {StatusIcons[status]}
        </div>
    )
}