//Início da importação de CSS:
import './Header.styles.css'
//Fim da importação de CSS.

//Início da importação de ícones:
// import { ChevronDown as ParaBaixo } from 'lucide-react';
//Fim da importação de ícones.

function Header(){
    return(
        <>
            <header id='cabecalho'>
                <nav id='barra_de_navegacao'>
                    <ul id='lista_esquerda'>
                        <li className='item_da_lista'>
                            Cosmere
                        </li>

                        <li className='item_da_lista'>
                            Categorias
                        </li>

                        <li className='item_da_lista'>
                            Universos
                        </li>

                        <li className='item_da_lista'>
                            Comunidade
                        </li>
                    </ul>

                    <ul id='lista_direita'>
                        <li className='item_da_lista'>
                            <a href="">Licenças</a>
                        </li>

                        <li className='item_da_lista'>
                            <a href="https://github.com/cosmere-brasil/cosmere-brasil/blob/main/CONTRIBUTE.md" target='_blank'>Contribua</a>
                        </li>

                        <li className='item_da_lista'>
                            <a href="https://github.com/cosmere-brasil/cosmere-brasil/blob/main/SUPPORT.md" target='_blank'>Contribua</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export { Header }