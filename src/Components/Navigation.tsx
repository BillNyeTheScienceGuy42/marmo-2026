export default function Navigation(){
    
    return(
        <>
        <div className="w-full h-15 md:h-20 fixed bg-(--bluetrans) z-100" style={{contain: 'layout'}}>
            <div className="w-full h-full flex items-center justify-between px-7 md:px-10">
                <a href="/"><img src="/MarmoLogo.png" className="w-20 md:w-25 hover:scale-105 transition-transform duration-150 cursor-pointer"></img></a>
                <div className="flex items-center md:gap-10 gap-5  text-(--yellow) text-lg">
                    <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
                    <a href="/download" className="hover:text-gray-300 transition-colors">Download</a>
                    <a href="/discord" className="hover:text-gray-300 transition-colors">Discord</a>
                </div>
            </div>
        </div>
        </>
    )
}