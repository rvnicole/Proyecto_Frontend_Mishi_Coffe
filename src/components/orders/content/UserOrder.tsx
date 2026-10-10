import { Calendar } from "lucide-react";
import type { OrderType } from "../../../types";

type UserOrderProps = Pick<OrderType, "createdAt"|"user"|"phone">

export default function UserOrder({ createdAt, user, phone }: UserOrderProps) {
    const date = createdAt.split('T')[0].split("-");
    const orderDate = date[2]+"/"+date[1]+"/"+date[0];

    return (
        <div className="flex justify-between">
            <div>
                <p><span className="font-normal">Para: </span>{user}</p> 
                <p><span className="font-normal">Telefono: </span>{phone}</p> 
            </div>

            <div className="flex flex-col items-end">
                <Calendar className="text-muted size-6.5"/>
                <p className="text-sm font-semibold text-muted">{orderDate}</p>
            </div>
        </div> 
    )
}