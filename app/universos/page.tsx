import { Header } from "../components/Header/Header"
<<<<<<< HEAD
import { Conteudo } from "../components/Main/Main"
=======
import Conteudo from "../components/Main/Main"
>>>>>>> b60a81cd4ef7d59a775f44f07a736762fe2c243b
import { UniverseCard } from "../components/UniverseCard/UniverseCard"

function Universos(){
    return(
        <>
            <Header />
<<<<<<< HEAD
            
            <Conteudo>
                <UniverseCard
                    enlace='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                    titulo='Cosmere'
                    descricao='Cosmere é o Universo principal do Brandon Sanderson, é onde se passa os livros Nascidos da Bruma, Os Relatos da Guerra das Tempestades etc.'
                />
=======
            <Conteudo>
                <UniverseCard>
                    
                </UniverseCard>
>>>>>>> b60a81cd4ef7d59a775f44f07a736762fe2c243b
            </Conteudo>
        </>
    )
}

export default Universos