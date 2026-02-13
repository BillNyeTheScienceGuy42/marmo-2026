export default function Footer(){
    return(
        <footer className="w-screen bg-(--blue) text-(--yellow)">
            <div className="px-6 md:px-10 py-8 md:py-12 border-b border-gray-600">
                <div className="flex justify-center md:hidden mb-6">
                    <img src="/MarmoLogo.png" alt="Marmo" className="h-16 w-auto"></img>
                </div>
                
                <div className="flex flex-row justify-between items-center gap-6 md:gap-0 max-w-7xl mx-auto">
                    <div className="hidden md:flex flex-1 justify-start">
                        <img src="/MarmoLogo.png" alt="Marmo" className="h-16 w-auto"></img>
                    </div>
                    
                    <div className="w-px h-30 bg-gray-600"></div>
                    
                    <div className="flex-1 flex flex-col justify-center gap-4 md:gap-6 text-sm md:text-base text-center">
                        <a href="/" className="hover:text-gray-300 transition">HOME</a>
                        <a href="/privacy" className="hover:text-gray-300 transition">PRIVACY POLICY</a>
                        {/* <a href="#" className="hover:text-gray-300 transition">PRESS KIT</a> */}
                    </div>
                    
                    <div className="w-px h-30 bg-gray-600"></div>
                    
                    <div className="flex-1 flex flex-col justify-center gap-4 md:gap-6 text-sm md:text-base text-center">
                        <a href="https://www.tiktok.com/@marmovr" className="hover:text-gray-300 transition">TIKTOK</a>
                        <a href="https://www.youtube.com/@marmovr" className="hover:text-gray-300 transition">YOUTUBE</a>
                        <a href="https://discord.gg/marmo" className="hover:text-gray-300 transition">DISCORD</a>
                    </div>
                    <div className="w-px h-30 bg-gray-600"></div>


                </div>
            </div>
            
            <div className="py-6 text-center text-xs md:text-sm text-gray-400 px-4">
                <p>© 2026 Marmo VR | ScreenVR Studios Limited. All rights reserved.</p>
            </div>
        </footer>
    )
}