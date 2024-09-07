//Importações de dependências:
import PropTypes from 'prop-types';
//Fim das importações de dependências.

import './styles/CartaoDePersonagem.styles.css'

function CharacterCard(props){
    return(
        <>
            <div className='cartao_de_personagem'>
                <div className='cabecalho'>
                    <h2>
                        {props.character_name}
                    </h2>
                    <img src={props.character_pic} />
                </div>
            </div>
        </>
    )
}

CharacterCard.propTypes = {
    character_name: PropTypes.string.isRequired,
    character_pic: PropTypes.string.isRequired
}
export { CharacterCard }