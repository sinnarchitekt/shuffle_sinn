const Datenschutz = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <h1>Datenschutzerklärung</h1>

      <h2>I. Name und Kontaktdaten des Verantwortlichen</h2>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
      </p>
      <p>
        <strong>Sinnarchitekt</strong><br />
        Radetzkystr. 29<br />
        E-Mail: info@sinnarchitekt.de
      </p>

      <h2>II. Allgemeine Hinweise zur Datenverarbeitung</h2>
      <h3>1. Umfang der Verarbeitung personenbezogener Daten</h3>
      <p>Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.</p>
      <h3>2. Rechtsgrundlage für die Verarbeitung</h3>
      <p>Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Bei der Verarbeitung von personenbezogenen Daten, die zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich ist und die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht überwiegen, dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage.</p>

      <h2>III. Hosting (checkdomain) und Logfiles</h2>
      <p>Die von Ihnen abgerufene Website wird von checkdomain GmbH (Am Hulsberg 31, 28205 Bremen) gehostet.</p>
      <h3>1. Art und Umfang der Datenverarbeitung</h3>
      <p>Beim Aufruf unserer Website sendet Ihr Browser automatisch Informationen an den Server unseres Hostinganbieters. Diese Informationen werden temporär in sogenannten Server-Logfiles gespeichert. Hierbei handelt es sich um folgende Daten:</p>
      <ul>
        <li>IP-Adresse des zugreifenden Rechners</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Website, von der aus der Zugriff erfolgte (Referrer-URL)</li>
        <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
      </ul>
      <h3>2. Zweck und Rechtsgrundlage</h3>
      <p>Die Verarbeitung dieser Daten dient der Gewährleistung eines reibungslosen Verbindungsaufbaus der Website, der Sicherstellung der Funktionsfähigkeit und der Auswertung der Systemsicherheit und -stabilität. Die Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an der technischen Bereitstellung und der Systemsicherheit).</p>
      <h3>3. Speicherdauer</h3>
      <p>Die Logfiles werden nach 14 Tagen automatisch gelöscht.</p>
      <h3>4. Auftragsverarbeitung</h3>
      <p>Wir haben mit checkdomain einen Auftragsverarbeitungsvertrag (AVV) abgeschlossen, der sicherstellt, dass die Datenverarbeitung im Einklang mit der DSGVO erfolgt.</p>
      
      {/* --- WICHTIG: Die folgenden Abschnitte an deine Seite anpassen! --- */}

      <h2>IV. Cookies</h2>
      <p>Unsere Website verwendet keine Cookies.</p>
      {/* Falls du doch Cookies nutzt, passe diesen Text an! */}

      <h2>V. Einbindung externer Dienste (z.B. Google Fonts)</h2>
      <p>Wir binden keine externen Dienste wie Google Fonts ein, die eine Datenübermittlung an Dritte zur Folge haben. Alle Schriftarten werden lokal von unserem Server geladen.</p>
      {/* Falls du doch externe Dienste nutzt, passe diesen Text an! */}

      <h2>VI. Rechte der betroffenen Person (Ihre Rechte)</h2>
      <p>Sie haben als betroffene Person das Recht:</p>
      <ul>
        <li>Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen (Art. 15 DSGVO).</li>
        <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO).</li>
        <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO).</li>
        <li>Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO).</li>
        <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO).</li>
        <li>Datenübertragbarkeit zu erhalten (Art. 20 DSGVO).</li>
        <li>Beschwerde bei einer Aufsichtsbehörde einzulegen (Art. 77 DSGVO).</li>
      </ul>
    </div>
  );
};

export default Datenschutz;