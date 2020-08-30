export const dumpColors = data => {
    return {
        dominant: data.dominant.split('#').join(''),
        secondary: data.secondary.map((item) => item.color.split('#').join(''))
    }
}