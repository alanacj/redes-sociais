async function redesSociaisFavoritaMinhaEscola () {
    const dadosLocais = localStorage.getItem('respostaRedesSociais')
    if (dadosLocais) {
        const dadosLocais = JSON.parse(dadosLocais)
        processarDados(dadosLocais)
    } else {
        const url = "https://script.google.com/macros/s/AKfycbxuXGRBVq5n5QKk-800XHJSZcdTpEeUJmUUm1lURxJviN1Co3GSO4DSdc7iLchvaNtOog/exec"
        const res = await fetch (url)
        const dados = await res.json ()
        localStorage.setItem(respostaRedesSociais, JSON.stringify(dados))
        processarDados(dadosLocais)
    }

    const redesSociais = dados.slice(1).map(redes => redes [1])
    contagemRedesSociais = redesSociais.reduce((acc, redesSociais) => {
        acc[redesSociais] = (acc[redesSociais] || 0) + 1
        return acc
    }, {})
    const valores = Object.values (contagemRedesSociais)
    const label = Object.keys (contagemRedesSociais)

    const data = [
        {
            values: valores,
            labels: label,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS ('--bg-color'),
        paper_bgcolor: getCSS ('--bg-color'),
        height: 700,
        title: {
            text: 'Redes sociais que os alunos do terceiro ano do ensino médio mais gostam',
            x: 0,
            font: {
                color: getCSS ('--primary-color'),
                family: getCSS ('--font'),
                size: 30
            }
        },
        legend: {
            font:{
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }

    criarGrafico(data,layout)
    incluirTexto(``)

}

redesSociaisFavoritaMinhaEscola ()
