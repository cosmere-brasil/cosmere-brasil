<<<<<<< HEAD
interface Props {
    children: React.ReactNode
}

function Conteudo({children}: Props){
    return(
        <main className='relative top-20 h-screen flex justify-center'>
            {children}
=======
import { UniverseCard } from "../UniverseCard/UniverseCard"

function Conteudo(){
    return(
        <main className='relative top-20 h-screen flex justify-center'>
            <article className='w-4/5 h-screen bg-orange-900'>
                <h2>Bem-vindo(a) à Cosmere Brasil!</h2>
                <p>A enciclopédia brasileira sobre Brandon Sanderson, seus livros, <a href='/universos' className='text-cyan-600'>universos literários</a> e tudo mais. <br />Mas cuidado com as revelações.</p>
            </article>

            <UniverseCard></UniverseCard>
>>>>>>> b60a81cd4ef7d59a775f44f07a736762fe2c243b
        </main>
    )
}

<<<<<<< HEAD
export { Conteudo }
=======
export default Conteudo
>>>>>>> b60a81cd4ef7d59a775f44f07a736762fe2c243b
