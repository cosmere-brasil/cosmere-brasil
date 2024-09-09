//import { Orbit } from 'lucide-react';
//import Image from 'next/image';

import Image from "next/image"

interface Props {
    enlace: string,
    imagem: string,
    titulo: string,
    descricao: string
}

function UniverseCard({enlace, imagem, titulo, descricao}: Props){
    return(
        <a href={enlace} className='flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-lg bg-cor_de_fundo hover:bg-gray-800'>
            <Image className='object-cover w-72 rounded-t-lg h-72 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg'
                src={imagem}
                alt="Picture of the author"
                priority
            />

            <div className='p-5'>
                <h3 className='mb-2 text-1xl font-bold tracking-tight text-white'>{titulo}</h3>
                <p className='mb-3 text-sm text-gray-400'>{descricao}</p>
            </div>
        </a>
    )
}

export { UniverseCard }