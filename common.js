const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfing = {
    color: getCSS ('--primary-color'),
    size: 16,
    family: getCSS ('--font')
}

function criarGrafico(data, layout) {
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    const config= {
        responsive: true
    }
    Plotly.newPlot(grafico, data, layout)
}
