import type { OrderType } from "../types";

export const categoryEmojis = {
  "Cafés": "☕",
  "Capuchinos": "🥤",
  "Chocolates": "🍫",
  "Licuados": "🥛",
  "Rebanadas de pastel": "🍰",
  "Cupcakes": "🧁",
  "Galletas": "🍪"
};

export const categoryOrders = [
    "Cafés", 
    "Capuchinos", 
    "Chocolates", 
    "Licuados", 
    "Rebanadas de pastel", 
    "Cupcakes", 
    "Galletas"
];

export const statusOrders = [
    "Pendiente",
    "Confirmado",
    "En preparación",
    "Listo",
    "Entregado",
    "Cancelado"
];

export const StatusColor: Record<OrderType["status"], string>= {
    "Pendiente": "yellow-500",
    "Confirmado": "lime-500",
    "En preparación": "purple-500",
    "Listo": "sky-500",
    "Entregado": "primary",
    "Cancelado": "slate-500"
}