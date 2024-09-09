import { Header } from "../components/Header/Header"
import { Conteudo } from "../components/Main/Main"
import { UniverseCard } from "../components/UniverseCard/UniverseCard"

function Universos(){
    return(
        <>
            <Header />
            
            <Conteudo>
                <UniverseCard
                    enlace='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                    titulo='Cosmere'
                    descricao='Cosmere é o Universo principal do Brandon Sanderson, é onde se passa os livros Nascidos da Bruma, Os Relatos da Guerra das Tempestades etc.'
                />
            </Conteudo>
        </>
    )
}

export default Universos