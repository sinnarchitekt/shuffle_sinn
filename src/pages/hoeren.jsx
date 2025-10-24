import Head from 'next/head';
import Layout from '../components/Layout';


const HoerenPage = () => {
  return (
    <Layout>
      <Head>
        <title>Hören - SensoryCalm</title>
      </Head>
      
      {/* Container für den Seiteninhalt */}
      <section id="content" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl"> {/* max-w-4xl für gute Lesbarkeit */}
          
          <h1 className="text-4xl font-extrabold font-heading mb-6">Der Hörsinn</h1>
          
          <p className="text-xl mb-8 leading-relaxed">
            Der Hörsinn, oder die auditive Wahrnehmung, ermöglicht es uns, Schallwellen aus unserer Umgebung aufzunehmen. Unsere Ohren wandeln diese Schwingungen in Nervenimpulse um, die das Gehirn als Geräusche, Töne, Sprache und Musik interpretiert. Das Gehör ist nicht nur für die Kommunikation von zentraler Bedeutung, sondern warnt uns auch vor Gefahren und trägt zur räumlichen Orientierung bei.
          </p>

          <div className="border-t pt-8 mt-8"> {/* Trennlinie */}
            <h2 className="text-3xl font-extrabold font-heading mb-4">
              Hören und das BFSG: Barrierefreiheit für auditive Inhalte
            </h2>
            
            <p className="text-xl mb-6 leading-relaxed">
              Das BFSG stellt sicher, dass auch Menschen mit Hörbeeinträchtigungen digitale Inhalte uneingeschränkt nutzen können.[1][2][3][4][5] Dies wird durch folgende Anforderungen erreicht:
            </p>

            <ul className="list-disc pl-6 space-y-4 text-xl">
              <li>
                <strong>Untertitel für Videos:</strong> Alle Videoinhalte mit Tonspur müssen mit synchronisierten Untertiteln versehen sein.
              </li>
              <li>
                <strong>Transkriptionen für Audioinhalte:</strong> Für reine Audio-Dateien (z. B. Podcasts) müssen textliche Mitschriften zur Verfügung gestellt werden.
              </li>
              <li>
                <strong>Visuelle Benachrichtigungen:</strong> Systemwarnungen oder Benachrichtigungen dürfen nicht ausschließlich akustisch erfolgen, sondern müssen auch visuell wahrnehmbar sein.
              </li>
              <li>
                <strong>Anpassbare Lautstärke:</strong> Die Lautstärke von Audioinhalten muss vom Nutzer steuerbar sein und darf nicht automatisch ohne Interaktion starten.
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
  );
};

export default HoerenPage;