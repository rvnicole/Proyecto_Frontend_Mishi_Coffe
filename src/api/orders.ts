import { api } from "../config/api";
import { OrderShema } from "../schemas";
import type { CancelOrderType, OrderType, ResponseOrdersType } from "../types";

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

export const cancelOrder = async (data: CancelOrderType) => {
    try {
        console.log(data);
        
        const url = "/orders/cancel-order";
        const result = await api.post(url, data);

        console.log(result.data);
    }
    catch(error) {
        console.log("Error al cancelar la orden: ", error);
        return { success: false, error: ["Error al cancelar la orden"] };
    }
}