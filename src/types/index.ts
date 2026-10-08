import type z from "zod";
import { OrderShema, StatusSchema } from './../schemas/index';

export type OrderType = z.infer<typeof OrderShema>;
export type StatusType = z.infer<typeof StatusSchema>;