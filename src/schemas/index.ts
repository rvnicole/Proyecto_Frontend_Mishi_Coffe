import z from "zod";
import { category_orders, status_orders } from "../data/lists";

export const StatusSchema = z.literal(status_orders);

export const ProductSchema = z.object({
    _id: z.string(),
    name: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.literal(category_orders)
});

export const ItemOrderSchema = z.object({
    _id: z.string(),
    product: ProductSchema,
    quantity: z.number().min(1),
    amount: z.number()
});

export const OrderShema = z.object({
    _id: z.string(),
    user: z.string(),
    phone: z.string(),
    note: z.string(),
    totalAmount: z.number(),
    status: StatusSchema,
    startDate: z.string(),
    endDate: z.string(),
    items: z.array(ItemOrderSchema)
});
