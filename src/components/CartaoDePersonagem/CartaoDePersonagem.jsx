//Importações de dependências:
import PropTypes from 'prop-types';
//Fim das importações de dependências.

import './styles/CartaoDePersonagem.styles.css'

function CartaoDePersonagem(props){
    return(
        <>
            <div className='cartao_de_personagem'>
                <div className='cabecalho'>
                    <h2>
                        {props.nome_do_personagem}
                    </h2>
                    <img src={props.imagem_do_personagem} />
                </div>
            </div>
        </>
    )
}

CartaoDePersonagem.propTypes = {
    nome_do_personagem: PropTypes.string.isRequired,
    imagem_do_personagem: PropTypes.string.isRequired
}
export { CartaoDePersonagem }