const IndexSectionCustomComponents3 = () => {
    return (
        <section>
            <div className="pt-26 border-3 border-l-0 border-r-0 border-indigo-900">
                <div className="pb-16 border-b-3 border-indigo-900">
                    <div className="container px-4 mx-auto text-center">
                        <a className="inline-block mx-auto mb-20" href="#">
                            {/* WICHTIG: Ersetze <img> durch die Next.js <Image> Komponente für bessere Performance! */}
                            <img className="h-32" src="../LogoWebsite.png" alt="Sinnarchitekt Logo" />
                        </a>
                        
                        {/* --- KORRIGIERTER BEREICH --- */}
                        <div className="flex justify-center items-center gap-x-10 md:gap-x-16">
                            <a className="text-xl md:text-2xl font-extrabold hover:text-indigo-800" href="/datenschutz">Datenschutz</a>
                            <a className="text-xl md:text-2xl font-extrabold hover:text-indigo-800" href="/impressum">Impressum</a>
                        </div>
                        {/* --- ENDE KORRIGIERTER BEREICH --- */}

                    </div>
                </div>
                <div className="container px-4 pt-16 pb-24 mx-auto">
                    <p className="text-center text-xl md:text-2xl font-extrabold">© 2025 Sinnarchitekt. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default IndexSectionCustomComponents3;