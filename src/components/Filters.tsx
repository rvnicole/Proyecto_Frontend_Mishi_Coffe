import { status_orders } from "../data/lists";
import { storeOrders } from "../store";

type DateType = "startDate" | "endDate";

export default function Filters() {
    const setRange = storeOrders((state) => state.setRange);
    const startDate = storeOrders((state) => state.startDate);
    const endDate = storeOrders((state) => state.endDate);

    const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {id, value} = e.target;
        setRange(id as DateType, value);
    }

    return (
        <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex gap-2">
                <div>
                    <label htmlFor="startDate" className="font-medium mr-2">Ordenes de:</label>
                    <input 
                        id="startDate"
                        type="date" 
                        className="text-sm font- border bg-input py-1 px-2 cursor-pointer rounded-full"
                        value={startDate}
                        onChange={handleChangeDate}
                    />
                </div>
                        
                <div>
                    <label htmlFor="endDate" className="font-medium mr-2">a</label>
                    <input
                        id="endDate"
                        type="date" 
                        className="text-sm border bg-input py-1 px-2 cursor-pointer rounded-full"
                        value={endDate}
                        onChange={handleChangeDate}
                    />
                </div>
            </div>

            <select
                className="text-sm border bg-input py-1 px-2 cursor-pointer rounded-full"
            >
                <option key={0} value="">-- Todas --</option>
                { status_orders.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                ))}
            </select>
        </div>
    )
}