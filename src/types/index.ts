import type z from "zod";
import { OrderShema, ResponseOrders, StatusSchema } from './../schemas/index';

export type OrderType = z.infer<typeof OrderShema>;
export type StatusType = z.infer<typeof StatusSchema>;

export type ResponseOrdersType = z.infer<typeof ResponseOrders>;