interface Props {
    children: React.ReactNode
}

function Conteudo({children}: Props){
    return(
        <main className='relative top-20 h-screen flex justify-center max-w-4/5'>
            {children}
        </main>
    )
}

export { Conteudo }
