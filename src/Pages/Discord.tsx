import { useEffect } from 'react'

export default function Discord(){
    useEffect(() => {
        window.location.href = 'https://discord.gg/marmo'
    }, [])
    
    return (
        <div>
            <p className="w-screen h-screen flex items-center justify-center text-(--yellow) text-2xl">
                Redirecting to Discord...
            </p>
        </div>
    )
}