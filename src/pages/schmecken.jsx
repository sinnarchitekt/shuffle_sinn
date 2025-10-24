import Head from 'next/head';
import Layout from '../components/Layout';

const SchmeckenPage = () => {
  return (
    <Layout>
      <Head>
        <title>Schmecken - SensoryCalm</title>
      </Head>
      
      {/* Container für den Seiteninhalt */}
      <section id="content" className="py-20"> {/* ID für den Anker-Link */}
        <div className="container mx-auto px-4 max-w-4xl"> {/* Zentriert und lesbar */}
          
          <h1 className="text-4xl font-extrabold font-heading mb-6">Der Geschmackssinn</h1>
          
          <p className="text-xl mb-8 leading-relaxed">
            Der Geschmackssinn, oder die gustatorische Wahrnehmung, findet auf unserer Zunge statt. Geschmacksknospen ermöglichen es uns, die fünf Grundgeschmacksrichtungen zu unterscheiden: süß, sauer, salzig, bitter und umami. Das Schmecken ist eng mit dem Geruchssinn verbunden und spielt eine entscheidende Rolle bei der Nahrungsaufnahme und dem Genuss von Speisen.
          </p>

          <div className="border-t pt-8 mt-8"> {/* Trennlinie */}
            <h2 className="text-3xl font-extrabold font-heading mb-4">
              Schmecken und das BFSG: Ein metaphorischer Zusammenhang
            </h2>
            
            <p className="text-xl mb-6 leading-relaxed">
              Ähnlich wie der Geruchssinn hat auch der Geschmackssinn keinen direkten Bezug zum Barrierefreiheitsstärkungsgesetz (BFSG), da es sich auf digitale Produkte und Dienstleistungen konzentriert. Metaphorisch lässt sich jedoch sagen, dass ein "geschmackvolles" und gut durchdachtes Design im Sinne des BFSG ein digitales Erlebnis schafft, das für alle Nutzer "bekömmlich" und angenehm ist. Eine klare, einfache und verständliche Sprache trägt dazu bei, dass Informationen leicht "verdaut" werden können.
            </p>

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

export default SchmeckenPage;