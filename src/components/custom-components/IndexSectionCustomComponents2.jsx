import React from 'react';

const IndexSectionCustomComponents2 = () => {
    return (
       <section className="py-26 bg-white">
    <div className="container px-4 mx-auto relative">

        {/* --- Header-Sektion --- */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
            <span className="text-lg font-extrabold text-indigo-500">Durchdachtes Design</span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
                Funktionen, entwickelt für Ihre Bedürfnisse
            </h1>
            <p className="text-xl font-extrabold leading-8">
                Jedes Element wurde sorgfältig konzipiert, um ein ruhiges, vorhersehbares und angenehmes digitales Erlebnis zu schaffen, das sensorische Überlastung reduziert.
            </p>
        </div>

        {/* --- Grid mit den 6 Features --- */}
        <div className="flex flex-wrap -mx-4 -mb-12">

            {/* 1. Karte: Anpassbare Einstellungen */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
                <div className="h-full py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center">
                    <img className="block mx-auto mb-4" src="nigodo-assets/features/icon-settings.svg" alt="" />
                    <h4 className="text-2xl font-extrabold mb-4">Anpassbare Einstellungen</h4>
                    <p className="text-lg font-extrabold leading-7">Steuern Sie Helligkeit, Kontrast, Animationen und Töne passend zu Ihrem Komfortlevel.</p>
                </div>
            </div>

            {/* 2. Karte: Übersichtliches Layout */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
                <div className="h-full py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center">
                    <img className="block mx-auto mb-4" src="nigodo-assets/features/icon-bar.svg" alt="" />
                    <h4 className="text-2xl font-extrabold mb-4">Übersichtliches Layout</h4>
                    <p className="text-lg font-extrabold leading-7">Eine einfache, organisierte Oberfläche mit weniger visueller Unruhe und vorhersehbarer Navigation.</p>
                </div>
            </div>

            {/* 3. Karte: Sanfte Übergänge */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
                <div className="h-full py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center">
                    <img className="block mx-auto mb-4" src="nigodo-assets/features/icon-message.svg" alt="" />
                    <h4 className="text-2xl font-extrabold mb-4">Sanfte Übergänge</h4>
                    <p className="text-lg font-extrabold leading-7">Fließende, minimale Animationen, die sensorische Empfindlichkeiten nicht auslösen oder überfordern.</p>
                </div>
            </div>

            {/* 4. Karte: Fokus-Modus */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
                <div className="h-full py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center">
                    <img className="block mx-auto mb-4" src="nigodo-assets/features/icon-people.svg" alt="" />
                    <h4 className="text-2xl font-extrabold mb-4">Fokus-Modus</h4>
                    <p className="text-lg font-extrabold leading-7">Blenden Sie Ablenkungen aus mit einem speziellen Fokus-Modus, der nur wesentliche Inhalte hervorhebt.</p>
                </div>
            </div>

            {/* 5. Karte: Textoptionen */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
                <div className="h-full py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center">
                    <img className="block mx-auto mb-4" src="nigodo-assets/features/icon-write.svg" alt="" />
                    <h4 className="text-2xl font-extrabold mb-4">Textoptionen</h4>
                    <p className="text-lg font-extrabold leading-7">Wählen Sie lesbare Schriftarten, passen Sie die Textgröße an und steuern Sie den Abstand für maximalen Komfort.</p>
                </div>
            </div>

            {/* 6. Karte: Beruhigende Farben */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
                <div className="h-full py-12 px-8 bg-white border-3 border-indigo-900 shadow-md rounded-2xl text-center">
                    <img className="block mx-auto mb-4" src="nigodo-assets/features/icon-box.svg" alt="" />
                    <h4 className="text-2xl font-extrabold mb-4">Beruhigende Farben</h4>
                    <p className="text-lg font-extrabold leading-7">Weiche, gedämpfte Farbpaletten, entwickelt um visuellen Stress zu reduzieren und Ruhe zu fördern.</p>
                </div>
            </div>

        </div>
    </div>
</section>
    );
};

export default IndexSectionCustomComponents2;