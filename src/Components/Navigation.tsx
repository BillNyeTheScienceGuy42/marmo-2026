export default function Navigation(){
    
    return(
        <>
        <div className="w-full h-15 md:h-20 fixed bg-(--bluetrans) z-100" style={{contain: 'layout'}}>
            <div className="w-full h-full flex items-center justify-between px-5 md:px-10">
                <a href="/"><img src="/MarmoLogo.png" className="w-20 md:w-25 hover:scale-105 transition-transform duration-150 cursor-pointer"></img></a>
                <div className="flex items-center gap-10 text-(--yellow) text-lg">
                    <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
                    <a href="https://www.meta.com/en-gb/experiences/marmo/24881288181514277/" className="hover:text-gray-300 transition-colors">Download</a>
                    <a href="https://discord.gg/marmo" className="hover:text-gray-300 transition-colors">Discord</a>
                </div>
            </div>
        </div>
        </>
    )
}