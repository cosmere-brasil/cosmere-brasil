//Importações de dependências:
import PropTypes from 'prop-types';
//Fim das importações de dependências.

function CharacterCardHeader(props){
    return(
        <>
            <h2>{props.character_name}</h2>
            <img src={props.character_pic} alt={props.cpic_alt} />
        </>
    )
}

CharacterCardHeader.propTypes = {
    character_name: PropTypes.string.isRequired,
    character_pic: PropTypes.string.isRequired,
    cpic_alt: PropTypes.string.isRequired
}

export { CharacterCardHeader }