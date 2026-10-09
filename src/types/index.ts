import type z from "zod";
import { OrderShema, ResponseOrders, StatusSchema } from './../schemas/index';

export type OrderType = z.infer<typeof OrderShema>;
export type StatusType = z.infer<typeof StatusSchema>;

export type ResponseOrdersType = z.infer<typeof ResponseOrders>;

export type CancelOrderType = {
    order: OrderType["_id"],
    description: string
}

export type UpdateStatusOrderType = {
    orderId: OrderType["_id"],
    status: OrderType["status"]
}