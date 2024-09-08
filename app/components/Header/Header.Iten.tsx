interface Props {
    enlace: string,
    texto: string,
    isExternal: boolean
}

function HeaderIten({enlace, texto, isExternal } : Props){
    return(
        <li className='hover:text-cyan-500'>
            <a href={enlace} target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noopener noreferrer" : undefined}>
                {texto}
            </a>
        </li>
    )
}

export { HeaderIten }