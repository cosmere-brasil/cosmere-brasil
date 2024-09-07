function HeaderIten({classe, isExternal, link, children}) {
    return (
        <li className={classe}>
            <a href={link} target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noopener noreferrer" : undefined}>
                {children}
            </a>
        </li>
    );
}

export { HeaderIten }