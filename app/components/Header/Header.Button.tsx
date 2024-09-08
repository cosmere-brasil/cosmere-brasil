import { Plus } from 'lucide-react';

interface Props {
    enlace: string,
    texto: string,
    isExternal: boolean
}

function HeaderButton({enlace, texto, isExternal}: Props){
    return(
        <a href={enlace} target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noopener noreferrer" : undefined}>
            <button type="button" className="px-3 py-1 text-center inline-flex items-center justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {texto}
                <Plus 
                    size={20}
                    strokeWidth={2}
                />
            </button>
        </a>
    )
}

export { HeaderButton }