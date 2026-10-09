import z from "zod";
import { categoryOrders, statusOrders } from "../data/lists";

export const StatusSchema = z.literal(statusOrders);

export const ProductSchema = z.object({
    _id: z.string(),
    name: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.literal(categoryOrders)
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
    items: z.array(ItemOrderSchema),
    createdAt: z.string()
});

export const ResponseOrders = z.discriminatedUnion("success", [
    z.object({
        success: z.literal(true),
        data: z.array(OrderShema),
    }),
    z.object({
        success: z.literal(false),
        error: z.array(z.string()),
    }),
]);