import { create } from "zustand";
import type { OrderType, StatusType } from "./types";

interface StoreOrders {
    orders: OrderType[],
    status: StatusType,
    startDate: string,
    endDate: string,
    setOrders: (orders: OrderType[]) => void,
    setStatus: (status: StatusType) => void,
    setRange: (type: "startDate"|"endDate", date: string) => void,
}

const getTodayString = () => new Date().toISOString().split('T')[0];

export const storeOrders = create<StoreOrders>((set) => ({
    orders: [],
    status: "" as StatusType,
    startDate: getTodayString(),
    endDate: getTodayString(),
    setOrders: (orders) => {

    },
    setStatus: (status) => {
        
    },
    setRange: (type, date) => {
        set({
            [type]: date,
        });
    }
}));