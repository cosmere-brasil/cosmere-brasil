function LeftIten({link, children}) {
    return (
        <li className='item_da_lista botoes'>
            <a href={link} target='_blank'>
                {children}
            </a>
        </li>
    );
}

export { LeftIten }