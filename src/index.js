// Import React
import React from 'react'
import ReactDom from 'react-dom'

// Import CSS
import './index.css'

function Header() {
    return(
        <header>
            Titulo da Pagina
        </header>
    )
}

ReactDom.render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>
    
    ,document.getElementById('root')
)