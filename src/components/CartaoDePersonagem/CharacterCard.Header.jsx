//Importações de dependências:
import PropTypes from 'prop-types';
//Fim das importações de dependências.

function CharacterCardHeader(props){
    return(
        <>
            <h2>{props.nome_do_personagem}</h2>
            <img src={props.foto_do_personagem} alt="" />
        </>
    )
}

CharacterCardHeader.propTypes = {
    nome_do_personagem: PropTypes.string.isRequired,
    foto_do_personagem: PropTypes.string.isRequired
}

export { CharacterCardHeader }