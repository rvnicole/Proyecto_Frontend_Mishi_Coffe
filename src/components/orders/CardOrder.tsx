import UpdateStatusOrder from "./UpdateStatusOrder";
import StatusOrder from "./StatusOrder";
import CancelOrder from "./CancelOrder";
import { Calendar, Coffee } from "lucide-react";
import { StatusColor } from "../../data/lists";
import { formatearMoneda } from "../../utils/format";
import type { OrderType } from "../../types";

type CardOrderProps = {
    order: OrderType
}

export default function CardOrder({ order }: CardOrderProps) {
    const date = order.createdAt.split('T')[0].split("-");
    const orderDate = date[2]+"/"+date[1]+"/"+date[0];

    return (
        <div className="bg-bg-card p-2 rounded-lg h-fit">
            <div className="border-2 border-primary border-dotted bg-card p-2 rounded space-y-2">
                <div className="flex items-start gap-2">
                    <StatusOrder status={order.status} />

                    <div className="md:leading-3">
                        <p className="font-normal break-all leading-1">
                            <span className="font-bold text-lg mr-1">Orden</span>
                            #{order._id}
                        </p>

                        <p className={`font-bold text-${StatusColor[order.status]}`}>{order.status}</p>
                    </div>
                </div>
                
                <div className="border-b-2 border-primary border-dotted"/>

                <div className="flex justify-between">
                    <div>
                        <p><span className="font-normal">Para: </span>{order.user}</p> 
                        <p><span className="font-normal">Telefono: </span>{order.phone}</p> 
                    </div>

                    <div className="flex flex-col items-end">
                        <Calendar className="text-muted size-6.5"/>
                        <p className="text-sm font-semibold text-muted">{orderDate}</p>
                    </div>
                </div>     

                { order.note &&
                    <div className="bg-bg-des py-1 px-2 rounded-sm">
                        <p className="text-text-secondary font-semibold">Nota:</p>
                        <p className="text-sm">{order.note}</p>
                    </div>  
                }

                <div className="border-b-2 border-primary border-dotted"/>

                <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                        <Coffee className="size-4"/>
                        <p>({order.items.length}) Producto{order.items.length > 1 && "s"}</p>
                    </div>

                    <p className="font-bold">Total:  
                        <span className="text-xl"> {formatearMoneda(order.totalAmount)}</span>
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <CancelOrder orderId={order._id} status={order.status}/>
                    <UpdateStatusOrder orderId={order._id} status={order.status}/>
                </div>
            </div>
        </div>
    )
}