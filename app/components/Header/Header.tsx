import Image from "next/image";

import Cobre from "/app/assets/images/cobre.svg"
import { HeaderIten } from "./Header.Iten";
import { HeaderButton } from "./Header.Button";

function Header(){
    return(
        <header className='fixed flex justify-center w-screen h-16 max-h-16 bg-cor_de_fundo text-sm'>
            <h1 className="flex items-center">
                <a href="http://cosmere-brasil.vercel.app/">
                    <Image src={Cobre} alt="Cosmere Brasil" width={60} height={60} priority/>
                </a>
            </h1>

            <nav className='flex items-center justify-between w-4/5 h-16 bg-cor_de_fundo'>
                

                <ul className='flex items-center gap-4'> {/*Lista esquerda*/}
                    <HeaderIten
                        enlace=''
                        texto='Categorias'
                        isExternal={false}
                    />

                    <HeaderIten
                        enlace=''
                        texto='Universos'
                        isExternal={false}
                    />

                    <HeaderIten
                        enlace=''
                        texto='Comunidade'
                        isExternal={false}
                    />

                    <HeaderIten
                        enlace=''
                        texto='Notícias'
                        isExternal={false}
                    />
                </ul>

                <ul className='flex items-center gap-4 justify-'> {/*Lista direita*/}
                    <HeaderIten
                        enlace='https://github.com/cosmere-brasil/cosmere-brasil/blob/main/public/markdown/LICENSES.md'
                        texto='Licenças'
                        isExternal={true}
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