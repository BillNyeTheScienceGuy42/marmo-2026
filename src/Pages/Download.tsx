import { useEffect } from 'react'

export default function Download(){
    useEffect(() => {
        window.location.href = 'https://www.meta.com/en-gb/experiences/marmo/24881288181514277/'
    }, [])
    
    return (
        <div>
            <p className="w-screen h-screen flex items-center justify-center text-(--yellow) text-2xl">
                Redirecting to download page...
            </p>            
        </div>
    )
}
