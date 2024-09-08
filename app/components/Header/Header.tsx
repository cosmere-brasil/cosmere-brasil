import Image from "next/image";

import Cobre from "/app/assets/images/cobre.svg"
import { HeaderIten } from "./Header.Iten";
import { HeaderButton } from "./Header.Button";

function Header(){
    return(
        <header className='z-9 fixed flex justify-center w-screen h-16 max-h-16 bg-cor_de_fundo text-sm'>
            <h1 className="flex items-center">
                <a href="/">
                    <Image src={Cobre} alt="Cosmere Brasil" width={60} height={60} priority/>
                </a>
            </h1>

            <nav className='flex items-center justify-between w-4/5 h-16 bg-cor_de_fundo'>
                

                <ul className='flex items-center gap-4'> {/*Lista esquerda*/}
                    <HeaderIten
                        enlace='/categorias'
                        texto='Categorias'
                    />

                    <HeaderIten
                        enlace='/universos'
                        texto='Universos'
                    />

                    <HeaderIten
                        enlace='/comunidade'
                        texto='Comunidade'
                    />

                    <HeaderIten
                        enlace='/noticias'
                        texto='Notícias'
                    />
                </ul>

                <ul className='flex items-center gap-4 justify-'> {/*Lista direita*/}
                    <HeaderIten
                        enlace='/licencas'
                        texto='Licenças'
                    />

                    <HeaderButton 
                        enlace='https://codeberg.org/cosmere/cosmere-brasil/src/branch/main'
                        texto='Contribua'
                        isExternal={true}
                    />
                </ul>
            </nav>
            
        </header>
    )
}

export { Header }