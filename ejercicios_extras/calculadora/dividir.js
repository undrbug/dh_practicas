export const dividir = (a, b) => {
    if (b === 0) {
        return 'No se puede dividir por 0';
    }
    return a / b;
}