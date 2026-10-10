import { useState } from "react";
import Modal from "../ui/Modal";
import HeaderOrder from "./content/HeaderOrder";
import UserOrder from "./content/UserOrder";
import type { OrderType } from "../../types";
import TotalOrder from "./content/TotalOrder";
import ItemsOrder from "./content/ItemsOrder";

type DetailsOrderProps = {
    order: OrderType
}

export default function DetailsOrder({ order }: DetailsOrderProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className="w-full border-2 border-primary text-text-accent font-semibold rounded cursor-pointer hover:opacity-80"
                onClick={() => setOpen(true)}
            >
                Ver detalles
            </button>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className="p-2 space-y-2">
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
                    <ItemsOrder items={order.items}/>
                    <div className="border-b-2 border-primary border-dotted"/> 
                    <TotalOrder items={order.items} totalAmount={order.totalAmount}/>
                </div>
            </Modal>
        </>
    )
}