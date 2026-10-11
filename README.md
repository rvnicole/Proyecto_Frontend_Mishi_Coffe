# Mishi Coffee

Mishi Coffee es un sistema para tomar y administrar pedidos de una cafetería mediante un asistente virtual en WhatsApp. El proyecto está dividido en tres partes: un microservicio ejecutado desde Google Colab, una API backend y un panel administrativo web.

## Demo
https://mishi-coffe.aretecne.xyz/

## Componentes del sistema

### Microservicio en Google Colab — Asistente virtual

El microservicio contiene un asistente virtual con Llama que interactúa con los clientes por WhatsApp. A través de la conversación, ayuda al cliente a crear una orden y envía esa orden al backend para que sea registrada y pueda consultarse desde el panel administrativo.

### Backend — API

El backend expone la API que utiliza el panel administrativo para consultar, actualizar y cancelar órdenes. También recibe las órdenes creadas por el asistente virtual y gestiona su registro y disponibilidad para el resto del sistema.

### Frontend — Panel administrativo

Este repositorio contiene el panel web de Mishi Coffee. Permite al personal consultar las órdenes recibidas, revisar sus detalles, cambiar su estado y cancelarlas.

## Flujo de una orden

1. El cliente conversa con el asistente virtual por WhatsApp y solicita sus productos.
2. El asistente con Llama procesa la solicitud y crea la orden a través del backend.
3. El backend registra la orden y la expone para que el panel administrativo pueda consultarla.
4. El personal revisa la orden y actualiza su estado desde el panel.
5. Si es necesario, el personal puede cancelar la orden e indicar el motivo.

## Funcionalidades del panel

- Consultar órdenes dentro de un rango de fechas.
- Filtrar las órdenes por estado.
- Ver información del cliente, productos, cantidades, notas y total.
- Avanzar el estado de una orden.
- Cancelar una orden indicando un motivo.
- Actualizar la lista periódicamente para mostrar cambios recientes.

Los estados disponibles son: **Pendiente**, **Confirmado**, **En preparación**, **Listo**, **Entregado** y **Cancelado**.

## Tecnologías

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router
- TanStack Query
- Zustand
- Axios
- Zod

## Requisitos

- Node.js y npm.
- Acceso a una instancia del backend.
- La variable de entorno `VITE_BACKEND_MISHI_API` configurada con la URL base de la API.

## Configuración

Crea un archivo `.env` en la raíz del proyecto y define la URL del backend:

```env
VITE_BACKEND_MISHI_API=https://tu-api.example.com
```

Reemplaza el valor de ejemplo con la URL correspondiente a tu backend.

## Instalación y ejecución

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará la dirección local donde puedes abrir el panel.

## Otros comandos

Crear una compilación de producción:

```bash
npm run build
```

Previsualizar la compilación:

```bash
npm run preview
```

Revisar el código con ESLint:

```bash
npm run lint
```

## Estructura del frontend

```text
src/
├── api/          # Solicitudes para consultar y modificar órdenes
├── components/   # Filtros, mensajes y componentes de órdenes
├── config/       # Configuración de Axios y conexión al backend
├── data/         # Estados y categorías disponibles
├── layout/       # Estructura general del panel
├── schemas/      # Validación de datos con Zod
├── types/        # Tipos inferidos y tipos de solicitudes
├── view/         # Vista principal
├── Router.tsx    # Rutas de la aplicación
└── store.tsx     # Estado compartido de filtros
```

## Actualización de órdenes

El panel consulta las órdenes para las fechas seleccionadas y vuelve a consultarlas cada 30 segundos. Después de cambiar el estado o cancelar una orden, actualiza la lista para mostrar el resultado.

## Nota

El asistente de Google Colab, el backend y el frontend son componentes independientes. Este repositorio contiene únicamente el frontend administrativo.
