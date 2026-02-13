
export default function NotFound(){
    return(
        <>
            <div className="w-screen bg-(--blue) text-(--yellow) py-20 px-6 md:px-10 flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-7xl md:text-8xl font-bold mb-4">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
                    <p className="text-lg md:text-xl mb-8 opacity-90">The page you're looking for doesn't exist or has been moved.</p>
                    <a href="/" className="inline-block px-8 py-3 border-2 border-(--yellow) text-(--yellow) hover:bg-(--yellow) hover:text-(--blue) transition-colors duration-200">
                        Back to Home
                    </a>
                </div>
            </div>
        </>
    )
}
