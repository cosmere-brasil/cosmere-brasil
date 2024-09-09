import { Header } from "../components/Header/Header"
import { Conteudo } from "../components/Main/Main"
import { UniverseCard } from "../components/UniverseCard/UniverseCard"

import Cosmere from "/src/images/wok.jpg"
import Cytoverse from "/src/images/skyward.jpeg"
import Reckoners from "/src/images/steelheart.jpeg"
import Autonomos from "/src/images/mago_frugal.jpg"

function Universos(){
    return(
        <>
            <Header />
            
            <Conteudo>
                <article className='w-4/5 h-fit pb-5 flex flex-wrap gap-5'>
                    <UniverseCard
                        enlace='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        imagem={Cosmere}
                        titulo='Cosmere'
                        descricao='O principal e mais conhecido dos universos literários do Brandon Sanderson. O grande universo de alta fantasia onde se passam as histórias das séries Nascidos da Bruma, Os Relatos da Guerra das Tempestades etc.'
                    />

                    <UniverseCard
                        enlace='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        imagem={Cytoverse}
                        titulo='Cytoverso'
                        descricao='Num futuro distante, a humanidade evoluiu a ponto de começar grandes guerras de conquista pelo universo. A forças humanas eram inigualáveis, mas um dia foi derrotada e agora está aprisionada e sendo caçada.'
                    />

                    <UniverseCard
                        enlace='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        imagem={Reckoners}
                        titulo='Executores'
                        descricao='Uma versão da Terra onde um evento mágico deu poderes a algumas pessoas. Estas se tornaram hérois... por um tempo, até que perceberam que os governos não tinham poder para enfrentá-los.'
                    />

                    <UniverseCard
                        enlace='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        imagem={Autonomos}
                        titulo='Outros'
                        descricao='Livros autônomos que não fazem parte do Cosmere, histórias em quadrinhos, contos e todas as outras séries menos conhecidas do Sanderson.'
                    />

                    
                </article>
            </Conteudo>
        </>
    )
}

export default Universos