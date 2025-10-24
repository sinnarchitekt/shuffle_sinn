import Head from 'next/head';
import Layout from '../components/Layout'; // Unser neues Layout importieren

const SehenPage = () => {
  return (
  <Layout>
      <Head>
        <title>Sehen - SensoryCalm</title>
      </Head>
        <section id="content" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl"> {/* max-w-4xl für bessere Lesbarkeit */}
            
            <h1 className="text-4xl font-extrabold font-heading mb-6">Der Sehsinn</h1>
            
            <p className="text-xl mb-8 leading-relaxed">
              Der Sehsinn, auch visuelle Wahrnehmung genannt, ist einer der komplexesten Sinne des Menschen. Unsere Augen nehmen Lichtreize aus der Umwelt auf und wandeln sie in elektrische Impulse um, die an das Gehirn weitergeleitet werden. Dort werden diese Informationen zu Bildern verarbeitet, die es uns ermöglichen, Formen, Farben, Bewegungen und Entfernungen zu erkennen. Der Sehsinn ist entscheidend für unsere Orientierung und Interaktion mit der Welt.
            </p>

            <div className="border-t pt-8 mt-8"> {/* Trennlinie für bessere Gliederung */}
              <h2 className="text-3xl font-extrabold font-heading mb-4">
                Sehen und das BFSG: Digitale Barrierefreiheit für die Augen
              </h2>
              
              <p className="text-xl mb-6 leading-relaxed">
                Das Barrierefreiheitsstärkungsgesetz (BFSG) legt einen besonderen Fokus auf die visuelle Barrierefreiheit digitaler Angebote.[1][2][3][4][5] Um Menschen mit Sehbehinderungen oder Farbenblindheit den Zugang zu erleichtern, fordert das Gesetz unter anderem:
              </p>

              <ul className="list-disc pl-6 space-y-4 text-xl">
                <li>
                  <strong>Kontrastreiche Gestaltung:</strong> Texte und Bedienelemente müssen sich farblich deutlich vom Hintergrund abheben.
                </li>
                <li>
                  <strong>Alternative Texte:</strong> Bilder und grafische Elemente benötigen beschreibende Alternativtexte, die von Screenreadern vorgelesen werden können.
                </li>
                <li>
                  <strong>Vergrößerbare Schrift:</strong> Die Schriftgröße muss ohne Informationsverlust anpassbar sein.
                </li>
                <li>
                  <strong>Verzicht auf rein farbliche Informationsvermittlung:</strong> Wichtige Informationen dürfen nicht ausschließlich durch Farben vermittelt werden (z. B. bei Fehler- oder Erfolgsmeldungen).
                </li>
                <li>
                  <strong>Klare Struktur und Navigation:</strong> Eine übersichtliche und logische Gliederung von Webseiten erleichtert die Orientierung.
                </li>
              </ul>
            </div>
          {/* Quellen-Block Anfang */}
<div className="border-t pt-8 mt-12">
  <h2 className="text-2xl font-extrabold font-heading mb-4">
    Quellen:
  </h2>
  <ul className="list-none space-y-2 text-lg">
    <li>
      <a href="https://www.vielsinn.de" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline">
        vielsinn.de
      </a>
    </li>
    <li>
      <a href="https://www.7p-group.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline">
        7p-group.com
      </a>
    </li>
    <li>
      <a href="https://www.lexware.de" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline">
        lexware.de
      </a>
    </li>
    <li>
      <a href="https://www.ihk-muenchen.de" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline">
        ihk-muenchen.de
      </a>
    </li>
    <li>
      <a href="https://www.bfsg-gesetz.de" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline">
        bfsg-gesetz.de
      </a>
    </li>
  </ul>
</div>
{/* Quellen-Block Ende */}
          </div>
        </section>
  </Layout>
  )
};
export default SehenPage;