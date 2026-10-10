import { formatearMoneda } from "../../../utils/format";
import { Coffee } from "lucide-react";
import type { OrderType } from "../../../types";

type TotalOrderProps = Pick<OrderType, "items"|"totalAmount">

export default function TotalOrder({items, totalAmount}: TotalOrderProps) {
    const totalProducts = items.reduce((total, item) => total += item.quantity, 0);

    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-1">
                <Coffee className="size-4"/>
                <p>({totalProducts}) Producto{totalProducts > 1 && "s"}</p>
            </div>

            <p className="font-bold">Total:  
                <span className="text-xl"> {formatearMoneda(totalAmount)}</span>
            </p>
        </div>
    )
}