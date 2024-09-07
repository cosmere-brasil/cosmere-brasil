//Início da importação de CSS:
import { HeaderIten } from './Header.Iten'
import './Header.styles.css'
//Fim da importação de CSS.

//Início da importação de ícones:
// import { ChevronDown as ParaBaixo } from 'lucide-react';
import { Sparkle as Centelha } from 'lucide-react';
//Fim da importação de ícones.

function Header(){
    return(
        <>
            <header id='cabecalho'>
                <nav id='barra_de_navegacao'>
                    <ul id='lista_esquerda'>
                        <HeaderIten
                            classe="item_da_lista"
                            link="https://cosmere-brasil.vercel.app/"
                            isExternal={false}>
                                <Centelha 
                                    stroke='#41b9ff'/>
                        </HeaderIten>

                        <HeaderIten
                            classe="item_da_lista"
                            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            isExternal={false}>
                                Categorias
                        </HeaderIten>

                        <HeaderIten
                            classe="item_da_lista"
                            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            isExternal={false}>
                                Universos
                        </HeaderIten>

                        <HeaderIten
                            classe="item_da_lista"
                            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            isExternal={true}>
                                Comunidade
                        </HeaderIten>
                    </ul>

                    <ul id='lista_direita'>
                    <HeaderIten
                            classe="item_da_lista"
                            link="https://github.com/cosmere-brasil/cosmere-brasil/blob/main/LICENCES.md"
                            isExternal={true}>
                                Licenças
                        </HeaderIten>

                        <HeaderIten
                            classe='item_da_lista botao'
                            link='https://github.com/cosmere-brasil/cosmere-brasil/blob/main/SUPPORT.md'
                            isExternal={true}>
                                Apoie
                        </HeaderIten>

                        <HeaderIten
                            classe='item_da_lista botao_destacado'
                            link='https://github.com/cosmere-brasil/cosmere-brasil/blob/main/CONTRIBUTE.md'
                            isExternal={true}>
                                Contribua
                        </HeaderIten>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export { Header }