import Head from 'next/head';
import Layout from '../components/Layout'; // Absoluter Pfad, sehr gut!

const RiechenPage = () => {
  return (
    <Layout>
      <Head>
        <title>Riechen - SensoryCalm</title>
      </Head>
      
      {/* Container für den Seiteninhalt */}
      <section id="content" className="py-20"> {/* ID für den Anker-Link */}
        <div className="container mx-auto px-4 max-w-4xl"> {/* Zentriert und lesbar */}
          
          <h1 className="text-4xl font-extrabold font-heading mb-6">Der Geruchssinn</h1>
          
          <p className="text-xl mb-8 leading-relaxed">
            Der Geruchssinn, auch olfaktorische Wahrnehmung genannt, ist unser "chemischer Detektiv". Die Nase nimmt Duftmoleküle aus der Luft auf und leitet die Informationen an das Gehirn weiter. Der Geruchssinn ist eng mit unseren Emotionen und Erinnerungen verknüpft und kann unser Wohlbefinden stark beeinflussen. Er warnt uns vor Gefahren wie verdorbenen Lebensmitteln oder Feuer und spielt eine wichtige Rolle beim Genuss von Speisen.
          </p>

          <div className="border-t pt-8 mt-8"> {/* Trennlinie */}
            <h2 className="text-3xl font-extrabold font-heading mb-4">
              Riechen und das BFSG: Ein (noch) indirekter Bezug
            </h2>
            
            <p className="text-xl mb-6 leading-relaxed">
              Das Barrierefreiheitsstärkungsgesetz (BFSG) konzentriert sich primär auf die digitale Barrierefreiheit und hat daher keinen direkten Bezug zum Geruchssinn. Im digitalen Raum spielen olfaktorische Reize derzeit noch eine untergeordnete Rolle. Zukünftige Technologien könnten dies jedoch ändern. Im Sinne einer ganzheitlichen Barrierefreiheit ist es jedoch wichtig, bei der Gestaltung von physischen Produkten und Umgebungen darauf zu achten, dass keine unangenehmen oder irritierenden Gerüche entstehen, die für geruchsempfindliche Menschen eine Barriere darstellen könnten.
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

export default RiechenPage;