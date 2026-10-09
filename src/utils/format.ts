export function formatearMoneda( quantity: number ) {
    return new Intl.NumberFormat('en-ES', {
        style: 'currency',
        currency: 'MXN'
    }).format(quantity);
}