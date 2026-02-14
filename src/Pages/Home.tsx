export default function Home() {
  return (
    <div className="w-screen">
        <div className=" border-red-500 bg-[url('/Forest.jpg')] bg-cover bg-center w-full h-screen flex flex-col items-center justify-center md:bg-fixed">
            <img src="/MarmoLogo.png" className="w-[80vw] max-w-125 logo-shake"></img>
            <a href="/download" className="mt-10 bg-gray-800/30 text-md md:text-2xl px-8 py-3 border-(--yellow) border-2 text-(--yellow) hover:bg-(--yellow) hover:text-(--blue) duration-200 cursor-pointer">PLAY FREE</a>
            <a href="#about-section" className="mt-5 text-md md:text-xl text-(--yellow) hover:underline cursor-pointer">LEARN MORE</a>
        </div>
        <div id="about-section" className=" border-red-500 w-screen flex flex-col items-centre bg-(--blue) text-(--yellow) relative" style={{willChange: 'transform', backfaceVisibility: 'hidden'}}>
            <h1 className="mt-20 text-3xl md:text-4xl text-center">
                ABOUT MARMO
            </h1>
            <p className="mt-10 w-4/5 text-center text-lg md:text-xl mx-auto max-w-200">
                Marmo is a free-to-play VR game that is made to recreate the 2022-3 VR experience of nostalgia and simplicity. Explore the forest, shop, PVP, and soon to be horror! Created by Lucid and Screen, the game is made for the community, with constant updates and improvements, led by YOUR suggestions.
            </p>
            <h1 className="mt-20 text-3xl md:text-4xl text-center">
                AROUND THE GAME
            </h1>
            <div className="md:w-[80vw] md:block md:mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 mt-10 place-items-center mb-20">
                    <div className="w-75 h-90 mt-10 rounded-[20px] overflow-hidden relative flex flex-col justify-center items-center">
                        
                        <div className="absolute inset-0 bg-cover bg-center">
                            <img src="/forest2.jpg" className="w-full h-full object-cover scale-110 blur-[3px] brightness-75 cursor-pointer"></img>
                        </div>
                        <h2 className="underline text-2xl md:text-3xl text-center relative z-10">
                            FOREST
                        </h2>

                        <p className="mt-5 w-4/5 text-center text-lg md:text-xl mx-auto max-w-200 relative z-10">
                            The main map of the game, where there is explosive barrels, trampolines, water, club house, and so much more!
                        </p>

                    </div>
                    <div className="w-75 h-90 mt-10 rounded-[20px] overflow-hidden relative flex flex-col justify-center items-center">
                        
                        <div className="absolute inset-0 bg-cover bg-center">
                            <img src="/pvp.jpg" className="w-full h-full object-cover scale-110 blur-[3px] brightness-75 cursor-pointer"></img>
                        </div>

                        <h2 className="underline text-2xl md:text-3xl text-center relative z-10">
                            PVP
                        </h2>

                        <p className="mt-5 w-4/5 text-center text-lg md:text-xl mx-auto max-w-200 relative z-10">
                            Fight against others in the PVP arena, with changing maps, and a variety of weapons
                        </p>
                    </div>
                    <div className="w-75 h-90 mt-10 rounded-[20px] overflow-hidden relative flex flex-col justify-center items-center">
                        
                        <div className="absolute inset-0 bg-cover bg-center">
                            <img src="/shop.jpg" className="w-full h-full object-cover scale-110 blur-[3px] brightness-75 cursor-pointer"></img>
                        </div>

                        <h2 className="underline text-2xl md:text-3xl text-center relative z-10">
                            SHOP
                        </h2>

                        <p className="mt-5 w-4/5 text-center text-lg md:text-xl mx-auto max-w-200 relative z-10">
                            Browse the store for styling cosmetics, and limited time bundles!
                        </p>
                    </div>
                    <div className="w-75 h-90 mt-10  rounded-[20px] overflow-hidden relative flex flex-col justify-center items-center">
                        
                        <div className="absolute inset-0 bg-cover bg-center">
                            <img src="/horror.jpg" className="object-center  w-full h-full object-cover  brightness-75 cursor-pointer"></img>
                        </div>

                        <h2 className="underline text-2xl md:text-3xl text-center relative z-10">
                            HORROR
                        </h2>

                        <p className="mt-5 w-4/5 text-center text-lg md:text-xl mx-auto max-w-200 relative z-10">
                            Coming soon... 
                        </p>
                    </div>
                </div>
            </div>


        </div>

    </div>
  );
}