import Link from 'next/link';

const IndexSectionCustomComponents1 = () => {
    return (
        <section className="relative pb-24 bs-section-dragged">
            <img className="hidden md:block absolute top-0 right-0 w-36 sm:w-1/2 lg:w-auto lg:h-full object-contain" src="nigodo-assets/background/background-indigo-right.svg" alt="" />
            <nav className="flex mb-24 justify-between items-center py-6 px-10 relative">
                <Link href="/" legacyBehavior>
                    <a className="text-lg font-bold">
                        <img className="h-32" src="../LogoWebsite.png" alt="SensoryCalm Logo" width="auto" />
                    </a>
                </Link>
                <div className="xl:hidden">
                    <button className="focus:outline-none text-indigo-900 hover:text-indigo-800">
                        <svg className="block h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <ul className="hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <li><Link href="/sehen#content" legacyBehavior><a className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800">Sehen</a></Link></li>
                    <li><Link href="/hoeren#content" legacyBehavior><a className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800">Hören</a></Link></li>
                    <li><Link href="/riechen#content" legacyBehavior><a className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800">Riechen</a></Link></li>
                    <li><Link href="/tasten#content" legacyBehavior><a className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800">Tasten</a></Link></li>
                    <li><Link href="/schmecken#content" legacyBehavior><a className="text-lg font-extrabold hover:text-indigo-800">Schmecken</a></Link></li>
                </ul>
                <div className="hidden xl:flex items-center" />
            </nav>
            <div className="container px-4 mx-auto relative">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                        <div className="lg:max-w-lg">
                            <span className="text-xl md:text-2xl font-extrabold text-indigo-500">Sinnarchitekt</span>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mt-1 mb-6">Eine digitale Oase für deine Sinne.</h1>
                            <p className="text-xl md:text-2xl font-extrabold leading-8 mb-10">Willkommen bei SensoryCalm. Wir schaffen digitale Erlebnisse, die auf Ihre sensorischen Bedürfnisse zugeschnitten sind. In einer Welt voller Reizüberflutung bieten wir Ihnen einen ruhigen und barrierefreien Raum. Erfahren Sie mehr über die faszinierende Welt der menschlichen Sinne und wie wir sie im Einklang mit dem Barrierefreiheitsstärkungsgesetz (BFSG) berücksichtigen.</p>
                            <div className="flex flex-wrap -mx-2 mb-6">
                                <div className="w-full md:w-auto px-2" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <img className="block h-128 lg:h-140 w-full xl:max-w-lg object-cover border-3 border-indigo-900 rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop" alt="" />
                    </div>
                </div>
            </div>
            {/* Mobile Menü */}
            <div className="hidden relative z-50">
                <div className="fixed inset-0 bg-gray-800 opacity-25" />
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 bg-indigo-200 border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-2xl font-bold leading-none" href="#">
                            <img className="h-6" src="https://static.shuffle.dev/uploads/files/06/06df74eda6b17208f097f099339392047565d8ad/logos/logo-8ccdf18831058240d80476bc47b1c9c4.png" alt="" width="auto" />
                        </a>
                        <button>
                            <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default IndexSectionCustomComponents1;