interface Props {
    enlace: string,
    texto: string,
}

function HeaderIten({enlace, texto } : Props){
    return(
        <li className='hover:text-cyan-500'>
            <a href={enlace}>
                {texto}
            </a>
        </li>
    )
}

export { HeaderIten }