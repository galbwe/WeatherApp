export const roundToDecimalPlaces = (x, decimals) => {
    if (decimals === undefined) {
        decimals = 0
    }
    if (decimals <= 0) {
        return Math.round(x)
    }
    for (let i = 0; i < decimals; i++) {
        x = x * 10
    }
    x = Math.round(x)
    for (let j = 0; j < decimals; j++) {
        x = x / 10
    }
    return x
}