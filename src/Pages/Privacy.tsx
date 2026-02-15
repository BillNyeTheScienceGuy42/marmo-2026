export default function Privacy(){
    return(
        <div className="w-full bg-(--blue) text-(--yellow) py-20 px-6 md:px-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <div className="w-24 h-1 bg-(--yellow) mx-auto"></div>
                </div>
                
                <p className="text-base md:text-lg leading-relaxed mb-8">
                    SCREEN VR STUDIOS LTD ("we," "us," or "our") is committed to protecting your privacy. This policy explains what information we collect when you play Marmo ("the Game"), how we use it, and the steps we take to keep it safe. By installing or using Marmo, you agree to the practices described below.
                </p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                        
                        <div className="ml-4 space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-3">1.1 Meta Account Information</h3>
                                <p className="mb-3">Marmo relies on Meta accounts for authentication.</p>
                                <p className="mb-2">When you launch the Game, we collect:</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>Your display name</li>
                                    <li>Your Meta user ID</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3">1.2 Gameplay and Technical Data</h3>
                                <p className="mb-2">While you play Marmo, we may collect:</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>Progress, unlocks, and in-game actions</li>
                                    <li>Customization and cosmetic selections</li>
                                    <li>Purchase history related to in-game items or currency</li>
                                    <li>Device details, operating system version</li>
                                </ul>
                                <p className="mt-3">This data helps maintain game functionality.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                        <p className="mb-3">Your information is used for purposes such as:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Operating and maintaining Marmo</li>
                            <li>Enhancing gameplay features</li>
                            <li>Identifying bugs, crashes, and performance issues</li>
                            <li>Supporting community safety and enforcing rules</li>
                            <li>Detecting cheating, abuse, or unauthorized activity</li>
                            <li>Providing support and responding to player requests</li>
                        </ul>
                        <p className="mt-3">We only use data in ways necessary to deliver and improve the Game.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. When We Share Information</h2>
                        <p className="mb-3">Information may be shared with trusted third parties only when needed to run Marmo, such as:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Backend or analytics services used to operate and improve the Game</li>
                            <li>Legal authorities if required to comply with law or protect player safety</li>
                        </ul>
                        <p className="mt-3">We do not sell your information or share it with advertisers.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>We retain data only for as long as needed to operate the Game or meet legal obligations</li>
                            <li>If your Meta account is removed or access to Marmo ends, associated gameplay data will be deleted or anonymized</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Children's Privacy</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Marmo is designed for players aged 13 and older</li>
                            <li>If we discover that data from a child under 13 was collected without proper consent, we will remove it promptly</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Security Practices</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>We implement reasonable safeguards to protect your data from unauthorized access, loss, or misuse</li>
                            <li>No system is completely secure, but we work to minimize risks through technical and organizational measures</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Updates to This Policy</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>We may revise this Privacy Policy as Marmo evolves or as laws change</li>
                            <li>The updated version will be posted with a new effective date</li>
                            <li>Significant updates may also be communicated through in-game notices</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">8. Contact Us / Delete User Data</h2>
                        <p className="mb-3">If you wish to delete any data stored related to your activity that we have collected, or if you have questions regarding this Privacy Policy, reach out to us:</p>
                        <p className="font-semibold">SCREEN VR STUDIOS LTD</p>
                        <p>Email: screenvrstudios@gmail.com</p>
                    </section>
                </div>
            </div>
        </div>
    )
}