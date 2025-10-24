import Head from 'next/head';
import Layout from '../components/Layout';

const TastenPage = () => {
  return (
    <Layout>
      <Head>
        <title>Tasten - SensoryCalm</title>
      </Head>
      
      {/* Container für den Seiteninhalt */}
      <section id="content" className="py-20"> {/* ID für den Anker-Link */}
        <div className="container mx-auto px-4 max-w-4xl"> {/* Zentriert und lesbar */}
          
          <h1 className="text-4xl font-extrabold font-heading mb-6">Der Tastsinn</h1>
          
          <p className="text-xl mb-8 leading-relaxed">
            Der Tastsinn, oder die taktile Wahrnehmung, erfolgt über Rezeptoren in unserer Haut. Er ermöglicht es uns, Druck, Vibrationen, Temperaturen und Schmerz zu empfinden. Der Tastsinn ist entscheidend für die Interaktion mit unserer Umwelt, gibt uns Feedback über die Beschaffenheit von Objekten und ist ein wichtiger Bestandteil der nonverbalen Kommunikation.
          </p>

          <div className="border-t pt-8 mt-8"> {/* Trennlinie */}
            <h2 className="text-3xl font-extrabold font-heading mb-4">
              Tasten und das BFSG: Bedienbarkeit und haptisches Feedback
            </h2>
            
            <p className="text-xl mb-6 leading-relaxed">
              Im Kontext des BFSG spielt der Tastsinn eine wesentliche Rolle bei der Bedienbarkeit von digitalen und physischen Produkten.[1][2][3][4][5] Die Anforderungen zielen darauf ab, eine Nutzung ohne Sehsinn zu ermöglichen:
            </p>

            <ul className="list-disc pl-6 space-y-4 text-xl">
              <li>
                <strong>Tastaturbedienbarkeit:</strong> Alle Funktionen einer Webseite oder Anwendung müssen vollständig über die Tastatur zugänglich sein, ohne dass eine Maus erforderlich ist. Dies ist entscheidend für Menschen, die auf alternative Eingabegeräte angewiesen sind.
              </li>
              <li>
                <strong>Haptisches Feedback:</strong> Bei physischen Geräten wie Geldautomaten oder Ticketautomaten spielt haptisches Feedback (z. B. Vibration bei Tastendruck) eine wichtige Rolle für die barrierefreie Bedienung.
              </li>
              <li>
                <strong>Klare und logische Reihenfolge:</strong> Die Navigation per Tastatur (z. B. mit der Tab-Taste) muss einer logischen und nachvollziehbaren Reihenfolge folgen.
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

export default TastenPage;