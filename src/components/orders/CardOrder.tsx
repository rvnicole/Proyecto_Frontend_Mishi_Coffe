import UpdateStatusOrder from "./UpdateStatusOrder";
import CancelOrder from "./CancelOrder";
import DetailsOrder from "./DetailsOrder";
import HeaderOrder from "./content/HeaderOrder";
import UserOrder from "./content/UserOrder";
import TotalOrder from "./content/TotalOrder";
import type { OrderType } from "../../types";

type CardOrderProps = {
    order: OrderType
}

export default function CardOrder({ order }: CardOrderProps) {
    return (
        <div className="bg-bg-card p-2 rounded-lg h-fit">
            <div className="border-2 border-primary border-dotted bg-card p-2 rounded space-y-2">
                <HeaderOrder _id={order._id} status={order.status} />
                <div className="border-b-2 border-primary border-dotted"/>
                <UserOrder createdAt={order.createdAt} user={order.user} phone={order.phone} />     

                { order.note &&
                    <div className="bg-bg-des py-1 px-2 rounded-sm">
                        <p className="text-text-secondary font-semibold">Nota:</p>
                        <p className="text-sm">{order.note}</p>
                    </div>  
                }

                <div className="border-b-2 border-primary border-dotted"/>

                <TotalOrder items={order.items} totalAmount={order.totalAmount}/>
                <DetailsOrder order={order} />

                <div className="grid grid-cols-2 gap-2">
                    <CancelOrder orderId={order._id} status={order.status}/>
                    <UpdateStatusOrder orderId={order._id} status={order.status}/>
                </div>
            </div>
        </div>
    )
}