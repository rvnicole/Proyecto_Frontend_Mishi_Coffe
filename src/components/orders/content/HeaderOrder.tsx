import StatusOrder from "./StatusOrder";
import { StatusColor } from "../../../data/lists";
import type { OrderType } from "../../../types";

type HeaderOrderProps = Pick<OrderType, "_id"|"status">

export default function HeaderOrder({_id, status}: HeaderOrderProps) {

    return (
        <div className="flex items-start gap-2">
                <StatusOrder status={status} />
        
                <div className="md:leading-3">
                    <p className="font-normal break-all leading-1">
                        <span className="font-bold text-lg mr-1">Orden</span>
                        <span className="text-sm md:text-normal">#{_id}</span>
                    </p>
        
                <p className={`font-bold text-sm text-${StatusColor[status]}`}>{status}</p>
            </div>
        </div>
    )
}