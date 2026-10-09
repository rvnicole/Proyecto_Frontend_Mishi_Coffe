import { create } from "zustand";
import type { StatusType } from "./types";

interface StoreOrders {
    status: StatusType,
    startDate: string,
    endDate: string,
    setStatus: (status: StatusType) => void,
    setRange: (type: "startDate"|"endDate", date: string) => void,
}

const getTodayString = () => new Date().toISOString().split('T')[0];

export const storeOrders = create<StoreOrders>((set) => ({
    status: "" as StatusType,
    startDate: getTodayString(),
    endDate: getTodayString(),
    setStatus: (status) => {
        set({ status });
    },
    setRange: (type, date) => {
        set({
            [type]: date,
        });
    }
}));