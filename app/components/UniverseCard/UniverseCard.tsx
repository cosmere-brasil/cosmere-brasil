<<<<<<< HEAD
//import { Orbit } from 'lucide-react';
//import Image from 'next/image';

import Image from "next/image"
import Wind from "/src/images/capa_wind_and_truth.jpg"

interface Props {
    enlace: string,
    titulo: string,
    descricao: string
}

function UniverseCard({enlace, titulo, descricao}: Props){
    return(
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <a href={enlace}>
                <Image 
                    src={Wind}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    priority
                />
            </a>
            
            <a href={enlace}>
                <h3>{titulo}</h3>
            </a>
            <p>{descricao}</p>
=======
import { Orbit } from 'lucide-react';

interface Props {
    titulo: string
    descricao: string
}

function UniverseCard({titulo, descricao}: Props){
    return(
        <div>
            
>>>>>>> b60a81cd4ef7d59a775f44f07a736762fe2c243b
        </div>
    )
}

export { UniverseCard }