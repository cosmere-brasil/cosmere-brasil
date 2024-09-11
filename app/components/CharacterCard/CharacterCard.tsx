import { ImageMinus } from "lucide-react"
import Image from "next/image"

interface Props {
    nome: string,
    imagem: string,
    desc: string,
    creditos: string
}

function CharacterCard({nome, imagem, desc, creditos}: Props){
    return(
        <section className='bg-cor_de_fundo'>
            <div className='flex justify-center'>
                <h3>{nome}</h3>
                <Image 
                    src={imagem}
                    alt={desc}
                />
                <p>{creditos}</p>
            </div>
        </section>
    )
}

export { CharacterCard }