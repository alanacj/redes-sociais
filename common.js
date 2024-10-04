const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfing = {
    color: getCSS ('--primary-color'),
    size: 16,
    family: getCSS ('--font')
}
