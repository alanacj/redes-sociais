async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS ('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS ('--bg-color'),
        paper_bgcolor: getCSS ('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários no mundo',
            x: 0,
            font: {
                color: getCSS ('--primary-color'),
                family: getCSS ('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfing,
            title: {
                text: 'nomes das redes sociais',
                font: getCSS('--secundary-color')
            }
        },
        yaxis: {
            tickfont: tickConfing,
            title: {
                text: 'bilhôes de usuários ativos',
                font: getCSS('--secundary-color')
            }
        },
    }

    criarGrafico(data,layout)
}

quantidadeUsuariosPorRede()
