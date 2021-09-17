import { Cabecalho } from './styled.js'


export default function Cabe(){

    return (
        <Cabecalho>
            <div className="cb-usuario"> 
                <img className='img-user' src="/assets/images/Ellipse.svg" alt=""/>
                <div className="nick"> Olá, <span> Bruno Oliveira </span> </div>
            </div>
            <div className="botoes-cabecalho"> 
                <button> <img src="/assets/images/log-out.svg" alt=""></img> </button>
                <button> <img src="/assets/images/Refresh.svg" alt=""></img> </button>
            </div>
        </Cabecalho>
    )
}