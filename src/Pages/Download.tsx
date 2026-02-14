import { useEffect } from 'react'
import Spinner from '../Components/Spinner'

export default function Download(){
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = 'https://www.meta.com/en-gb/experiences/marmo/24881288181514277/'
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center px-4">
            <Spinner />
            <p className="text-(--yellow) text-xl md:text-2xl mt-4">
                Redirecting to download page...
            </p>            
        </div>
    )
}
