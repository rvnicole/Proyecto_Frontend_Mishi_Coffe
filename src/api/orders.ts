import { api } from "../config/api";

export const obtenerOrdenes = async (startDate: string, endDate: string) => {
    try {
        const url = `/orders?startDate=${startDate}&endDate=${endDate}`;
        const result = await api.get(url);
        console.log(result);
    }
    catch(error) {
        console.log("Error al obtener las ordenes: ", error);
    }
}