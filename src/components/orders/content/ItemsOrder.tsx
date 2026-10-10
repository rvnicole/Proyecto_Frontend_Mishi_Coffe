import type { OrderType } from "../../../types"
import { formatearMoneda } from "../../../utils/format";

type ItemsOrderProps = Pick<OrderType, "items">;

export default function ItemsOrder({ items }: ItemsOrderProps) {
    return (
        <div className="h-[30vh] overflow-y-scroll bg-products py-1 px-2 rounded-sm">
            { items.map(item => (
                <div key={item._id} className="grid grid-cols-3 w-full">
                    <p className="font-semibold col-span-2">({item.quantity}) {item.product.name}</p>
                    <p className="font-semibold text-end">{formatearMoneda(item.amount)}</p>
                    <p className="text-xs font-semibold col-span-2 text-text-products">{item.product.description}</p>
                    <p className="text-xs font-semibold text-text-products text-end items-start">{formatearMoneda(item.product.price)} c/u</p>
                </div>
            ))}
        </div>
    )
}