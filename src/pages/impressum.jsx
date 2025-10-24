// src/pages/impressum.jsx

const Impressum = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <h1>Impressum</h1>
      
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        <strong>Sinnarchitekt</strong>
        <br />Radetzkystr. 29<br />
        86165 Augsburg
      </p>
      
      <h2>Haftungsausschluss</h2>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>
      <p>
        <em>Hinweis: Dies ist eine Vorlage und stellt keine Rechtsberatung dar.</em>
      </p>
    </div>
  );
};

export default Impressum;