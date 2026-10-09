import { api } from "../config/api";
import { OrderShema } from "../schemas";
import type { CancelOrderType, ResponseOrdersType, UpdateStatusOrderType } from "../types";

export const obtenerOrdenes = async (startDate: string, endDate: string) : Promise<ResponseOrdersType> => {
    try {
        const url = `/orders?startDate=${startDate}&endDate=${endDate}`;
        const result = await api.get(url);

        const orders = OrderShema.array().safeParse(result.data.data.data);
        
        if( !orders.success ) {
            const errores = orders.error.issues.map(i => `${i.path.join(".")}: ${i.message}`);
            return { success: false, error: errores}
        }

        return { success: true, data: orders.data };
    }
    catch(error) {
        console.log("Error al obtener las ordenes: ", error);
        return { success: false, error: ["Error al obtener las ordenes"] };
    }
}

export const updateStatusOrder = async (data: UpdateStatusOrderType) => {
    try {
        console.log(data)
        const url = "/orders/update-status";
        const result = await api.patch(url, data);
        console.log(result.data)
        return result;
    }
    catch(error) {
        console.log("Error al cancelar la orden: ", error);
        return { success: false, error: ["Error al cancelar la orden"] };
    }
}

export const cancelOrder = async (data: CancelOrderType) => {
    try {
        const url = "/orders/cancel-order";
        const result = await api.post(url, data);
        return result;
    }
    catch(error) {
        console.log("Error al cancelar la orden: ", error);
        return { success: false, error: ["Error al cancelar la orden"] };
    }
}