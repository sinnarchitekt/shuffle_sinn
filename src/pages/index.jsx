import Head from 'next/head';
import Layout from '../components/Layout'; // Unser neues Layout importieren
import IndexSectionCustomComponents2 from '../components/custom-components/IndexSectionCustomComponents2';

const Index = () => {
  return (
    <Layout> {/* Die Seite in die Layout-Schablone packen */}
      <Head>
        <title>Sinnarchitekt</title>
        {/* Den Rest vom Head kannst du hier lassen, falls er seitenspezifisch ist */}
      </Head>

      {/* Nur noch der mittlere Teil ist hier nötig! */}
      <IndexSectionCustomComponents2 />

    </Layout>
  );
};

export default Index;

