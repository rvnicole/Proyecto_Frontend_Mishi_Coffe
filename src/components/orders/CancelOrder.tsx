import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "../../api/orders";
import { storeOrders } from "../../store";
import Modal from "../ui/Modal";
import Load from "../ui/Load";
import { X } from "lucide-react";
import type { CancelOrderType, OrderType } from "../../types";

type CancelOrderProps = {
    orderId: OrderType["_id"],
    status: OrderType["status"]
}

export default function CancelOrder({orderId, status}: CancelOrderProps) {
    if( status === "Entregado" || status === "Cancelado") return;
    
    const startDate = storeOrders((state) => state.startDate);
    const endDate = storeOrders((state) => state.endDate);

    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState("");

    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: (data: CancelOrderType) => cancelOrder(data),
        onSuccess: async () => {
            await queryClient.refetchQueries({ 
                queryKey: ["orders", startDate, endDate]
            });

            setOpen(false);
        },
        onError: (error) => {
            console.log(error.message);
        },
    });

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if( !description ) return;
        mutate({order: orderId, description});
    }

    return (
        <>
            <button
                type="button"
                className="font-semibold text-destructive border-2 border-destructive rounded cursor-pointer hover:opacity-80"
                onClick={() => setOpen(true)}
            >
                Cancelar orden
            </button>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <>
                    <img src="/mishi-delete.png" className="m-auto w-80"/>
                    <div className="space-y-2">
                        <p className="text-center text-lg font-bold text-text-accent">¿Estás seguro de querer cancelar la orden?</p>

                        <form className="space-y-2" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label className="font-semibold">¿Cuál es el motivo?:</label>
                                <textarea 
                                    id="description"
                                    className="bg-bg-des p-1 rounded"
                                    minLength={10}
                                    maxLength={200}
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>

                            <button
                                className="flex justify-center items-center gap-1 w-full p-1 font-semibold text-white bg-text-accent rounded cursor-pointer hover:opacity-80 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:hover:opacity-100 select-none"
                                disabled={description.length < 10 || isPending}
                            >
                                { isPending ? <Load classNameIcon="size-5 text-white"/> : <X className="size-5 text-white"/>}
                                <span>Cancelar orden</span>
                            </button>
                        </form>
                    </div>
                </>
            </Modal>
        </>
    )
}