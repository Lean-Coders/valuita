import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  section: {
    paddingHorizontal: '35px',
    paddingVertical: '30px',
  },
  title: {
    fontSize: '25px',
    color: '#7AC6A7',
  },
  logo: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    width: '100px',
    height: '45px',
  },
  overviewCol: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '5px',
  },
  overviewRow: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: '2px',
  },
  overviewGap: {
    width: '0.5%',
  },
  overviewItem: {
    display: 'flex',
    border: '1px solid #666',
    paddingVertical: '2.5px',
    paddingHorizontal: '2.5px',
    flexDirection: 'row',
    width: '33%',
    justifyContent: 'space-between',
  },
  overviewItemOdd: {
    display: 'flex',
    border: '1px solid #666',
    paddingVertical: '2.5px',
    paddingHorizontal: '2.5px',
    flexDirection: 'row',
    width: '33%',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
  },
  overviewGapBig: {
    width: '2%',
  },
  overviewItemBig: {
    display: 'flex',
    border: '1px solid #666',
    paddingVertical: '2.5px',
    paddingHorizontal: '2.5px',
    flexDirection: 'row',
    width: '49%',
    justifyContent: 'space-between',
  },
  overviewItemOddBig: {
    display: 'flex',
    border: '1px solid #666',
    paddingVertical: '2.5px',
    paddingHorizontal: '2.5px',
    flexDirection: 'row',
    width: '49%',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
  },
  overviewItemTitle: {
    fontSize: '10px',
  },
  overviewItemValue: {
    fontSize: '10px',
  },
  tableCol: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #666',
    borderTop: '1px solid #666',
    alignItems: 'center',
    fontSize: '8px',
  },
  tableHeaderOdd: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #666',
    alignItems: 'center',
    fontSize: '8px',
  },
  tableHeaderItem: {
    display: 'flex',
    flexDirection: 'row',
    height: '25px',
    alignItems: 'center',
    flexGrow: 1,
    justifyItems: 'center',
    borderRight: '1px solid #666',
  },
  tableRow: {
    display: 'flex',
    borderBottom: '1px solid #999',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '7px',
  },
  tableRowOdd: {
    display: 'flex',
    borderBottom: '1px solid #999',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '7px',
    backgroundColor: '#eee',
  },
});

const Template = ({ data }: any) => {
  return (
    <Document>
      <Page wrap={false} size="A4" orientation="landscape" style={styles.page}>
        <View>
          <Image src={'https://i.imgur.com/nXTB8AG.png'} style={styles.logo} />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Prognoserechnung</Text>
          <View id="PrognoseRechnungOverview" style={styles.overviewCol}>
            <View style={styles.overviewRow}>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>Kaufdatum:</Text>
                <Text style={styles.overviewItemValue}>{data[0].Kaufdatum}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>Eigenmittel:</Text>
                <Text style={styles.overviewItemValue}>{data[0].Eigenmittel}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>Prognosezeitraum:</Text>
                <Text style={styles.overviewItemValue}>{data[0].PrognoseZeitraum}</Text>
              </View>
            </View>
            <View style={styles.overviewRow}>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Beginn der Vermietung:</Text>
                <Text style={styles.overviewItemValue}>{data[0].Vermietungsbeginn}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Kreditbetrag gesamt:</Text>
                <Text style={styles.overviewItemValue}>{data[0].KreditbetragGesamt}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Kreditzinsen bis Beginn:</Text>
                <Text style={styles.overviewItemValue}>{data[0].KreditzinsenBisBeginn}</Text>
              </View>
            </View>
            <View style={styles.overviewRow}>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>Kaufpreis inkl. Küche (netto):</Text>
                <Text style={styles.overviewItemValue}>{data[0].KaufpreisInklKücheNetto}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>Finanzierungsnebenkosten:</Text>
                <Text style={styles.overviewItemValue}>{data[0].Finanzierungsnebenkosten}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>Kaufpreis:</Text>
                <Text style={styles.overviewItemValue}>{data[0].Kaufpreis}</Text>
              </View>
            </View>
            <View style={styles.overviewRow}>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Küchenpreis (netto):</Text>
                <Text style={styles.overviewItemValue}>{data[0].KüchenpreisNetto}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Tilgungszeitraum:</Text>
                <Text style={styles.overviewItemValue}>{data[0].Tilgungszeitraum}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Kaufnebenkosten:</Text>
                <Text style={styles.overviewItemValue}>{data[0].Kaufnebenkosten}</Text>
              </View>
            </View>
            <View style={styles.overviewRow}>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>Konzeptionsgebühr:</Text>
                <Text style={styles.overviewItemValue}>{data[0].Konzeptionsgebühr}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Beginn der Tilgung:</Text>
                <Text style={styles.overviewItemValue}>{data[0].Tilgungsbeginn}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Grundanteil:</Text>
                <Text style={styles.overviewItemValue}>{data[0].Grundanteil}</Text>
              </View>
            </View>
            <View style={styles.overviewRow}>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>Mietausfall / Instandhaltung:</Text>
                <Text style={styles.overviewItemValue}>{data[0].MietausfallInstandhaltung}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>Kreditzinsen pro Jahr:</Text>
                <Text style={styles.overviewItemValue}>{data[0].KreditzinsenProJahr}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>AfA Immobilie pro Jahr:</Text>
                <Text style={styles.overviewItemValue}>{data[0].AfaImmobilieProJahr}</Text>
              </View>
            </View>
            <View style={styles.overviewRow}>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Indexierung pro Jahr:</Text>
                <Text style={styles.overviewItemValue}>{data[0].IndexierungProJahr}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Kreditzinsen pro Monat:</Text>
                <Text style={styles.overviewItemValue}>{data[0].KreditzinsenProMonat}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>AfA Küche pro Jahr:</Text>
                <Text style={styles.overviewItemValue}>{data[0].AfaKücheProJahr}</Text>
              </View>
            </View>
          </View>
          <View id="PrognoseRechnungTable" style={styles.tableCol}>
            <View style={styles.tableHeader}>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '5%',
                  borderLeft: '1px solid #666',
                }}
              >
                <Text style={{ padding: '2px' }}>Jahr</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '14%',
                }}
              >
                <Text style={{ padding: '2px' }}>Kreditstand Tilgungsverlauf (1.1. & 31.12.)</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px' }}>Sondertilgung</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px' }}>Miete (netto)</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '6%',
                }}
              >
                <Text style={{ padding: '2px' }}>Mietausfall</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '6%',
                }}
              >
                <Text style={{ padding: '2px' }}>Instandhaltung</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '6%',
                }}
              >
                <Text style={{ padding: '2px' }}>Verwaltung</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '6%',
                }}
              >
                <Text style={{ padding: '2px' }}>Steuerberatung</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '8%',
                }}
              >
                <Text style={{ padding: '2px' }}>Vermietungsmakler</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '8%',
                }}
              >
                <Text style={{ padding: '2px' }}>AfA inkl. Küche</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '10%',
                }}
              >
                <Text style={{ padding: '2px' }}>Beschleunigte AfA</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px' }}>Zinsen</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '10%',
                }}
              >
                <Text style={{ padding: '2px' }}>Steuerliches Ergebnis</Text>
              </View>
            </View>
            {/* <View style={styles.tableHeaderOdd}>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '5%',
                  height: '15px',
                  borderLeft: '1px solid #666',
                }}
              ></View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                  height: '15px',
                }}
              >
                <Text style={{ padding: '2px' }}>01. Jän</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                  height: '15px',
                }}
              >
                <Text style={{ padding: '2px' }}>31. Dez</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                  height: '15px',
                }}
              ></View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                  height: '15px',
                }}
              ></View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '6%',
                  height: '15px',
                }}
              ></View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '6%',
                  height: '15px',
                }}
              ></View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '6%',
                  height: '15px',
                }}
              ></View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '6%',
                  height: '15px',
                }}
              ></View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '8%',
                  height: '15px',
                }}
              ></View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '8%',
                  height: '15px',
                }}
              ></View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '10%',
                  height: '15px',
                }}
              ></View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                  height: '15px',
                }}
              ></View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  height: '15px',
                  width: '10%',
                }}
              ></View>
            </View> */}
            {data[0].table.map((item: any, i: number) => (
              <View style={i % 2 == 0 ? styles.tableRowOdd : styles.tableRow} key={i}>
                <Text
                  style={{
                    width: '5%',
                    flexGrow: 1,
                    padding: '2px',
                    borderLeft: '1px solid #999',
                    borderRight: '1px solid #999',
                  }}
                >
                  {item.Jahr}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.KreditstandTilgungsverlauf1}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.KreditstandTilgungsverlauf2}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Sondertilgung}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.MieteNetto}
                </Text>
                <Text style={{ width: '6%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Mietausfall}
                </Text>
                <Text style={{ width: '6%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Instandhaltung}
                </Text>
                <Text style={{ width: '6%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Verwaltung}
                </Text>
                <Text style={{ width: '6%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Steuerberatung}
                </Text>
                <Text style={{ width: '8%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Vermietungsmakler}
                </Text>
                <Text style={{ width: '8%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.AfaInklusiveKüche}
                </Text>
                <Text style={{ width: '10%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.BeschleunigteAfa}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Zinsen}
                </Text>
                <Text style={{ width: '10%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.SteuerlichesErgebnis}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
      <Page wrap={true} size="A4" orientation="landscape" style={styles.page}>
        <View>
          <Image src={'https://i.imgur.com/nXTB8AG.png'} style={styles.logo} />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Rendite - Detailansicht</Text>
          <View id="RenditeDetailRechnungOverview" style={styles.overviewCol}>
            <View style={styles.overviewRow}>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>Index für Wohnung:</Text>
                <Text style={styles.overviewItemValue}>{data[1].IndexWohnung}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>Laufzeit der Renditeberechnung:</Text>
                <Text style={styles.overviewItemValue}>{data[1].LaufzeitRenditeberechnung}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItem}>
                <Text style={styles.overviewItemTitle}>Progressionsstufe:</Text>
                <Text style={styles.overviewItemValue}>{data[1].Progressionsstufe}</Text>
              </View>
            </View>
            <View style={styles.overviewRow}>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Index für Miete:</Text>
                <Text style={styles.overviewItemValue}>{data[1].IndexMiete}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Ende der Renditeberechnung:</Text>
                <Text style={styles.overviewItemValue}>{data[1].EndeRenditeberechnung}</Text>
              </View>
              <View style={styles.overviewGap}></View>
              <View style={styles.overviewItemOdd}>
                <Text style={styles.overviewItemTitle}>Rendite:</Text>
                <Text style={styles.overviewItemValue}>{data[1].Rendite}</Text>
              </View>
            </View>
          </View>
          <View id="RenditeDetailRechnungTable" style={styles.tableCol}>
            <View style={styles.tableHeader}>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '5%',
                  borderLeft: '1px solid #666',
                }}
              >
                <Text style={{ padding: '2px' }}>Jahr</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px' }}>Miete (netto)</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px' }}>Kreditrate</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px' }}>Leerstand</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px', fontSize: '6px' }}>Leerstand in Prozent der Miete</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px' }}>Instandhaltung</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px', fontSize: '6px' }}>Instandhaltung in Prozent der Miete</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px' }}>Eigenmittel</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px' }}>Eigenmittel gesamt</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '6%',
                }}
              >
                <Text style={{ padding: '2px' }}>ESt.</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px' }}>Saldo</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '5%',
                }}
              >
                <Text style={{ padding: '2px' }}>AfA</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px' }}>Zinsen</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px', fontSize: '6px' }}>Verwaltung, Steuerberatung</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '7%',
                }}
              >
                <Text style={{ padding: '2px' }}>Steuerliches Ergebnis</Text>
              </View>
            </View>
            {data[1].table.map((item: any, i: number) => (
              <View style={i % 2 == 0 ? styles.tableRowOdd : styles.tableRow} key={i}>
                <Text
                  style={{
                    width: '5%',
                    flexGrow: 1,
                    padding: '2px',
                    borderLeft: '1px solid #999',
                    borderRight: '1px solid #999',
                  }}
                >
                  {item.Jahr}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.MieteNetto}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Kreditrate}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Leerstand}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.LeerstandProzentMiete}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Instandhaltung}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.InstandhaltungProzentMiete}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Eigenmittel}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.EigenmittelGesamt}
                </Text>
                <Text style={{ width: '6%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Est}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Saldo}
                </Text>
                <Text style={{ width: '5%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Afa}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Zinsen}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.VerwaltungSteuerberatung}
                </Text>
                <Text style={{ width: '7%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.SteuerlichesErgebnis}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
      <Page wrap={true} size="A4" orientation="landscape" style={styles.page}>
        <View>
          <Image src={'https://i.imgur.com/nXTB8AG.png'} style={styles.logo} />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Rendite - Gesamtansicht</Text>
          <View id="RenditeGesamtRechnungOverview" style={styles.overviewCol}>
            <View style={styles.overviewRow}>
              <View style={styles.overviewItemBig}>
                <Text style={styles.overviewItemTitle}>Index für Wertentwicklung Wohnung:</Text>
                <Text style={styles.overviewItemValue}>{data[2].IndexWertentwicklungWohnung}</Text>
              </View>
              <View style={styles.overviewGapBig}></View>
              <View style={styles.overviewItemBig}>
                <Text style={styles.overviewItemTitle}>Laufzeit der Renditeberechnung:</Text>
                <Text style={styles.overviewItemValue}>{data[2].LaufzeitRenditeberechnung}</Text>
              </View>
            </View>
            <View style={styles.overviewRow}>
              <View style={styles.overviewItemOddBig}>
                <Text style={styles.overviewItemTitle}>Index für Miete:</Text>
                <Text style={styles.overviewItemValue}>{data[2].IndexMiete}</Text>
              </View>
              <View style={styles.overviewGapBig}></View>
              <View style={styles.overviewItemOddBig}>
                <Text style={styles.overviewItemTitle}>Ende der Renditeberechnung:</Text>
                <Text style={styles.overviewItemValue}>{data[2].EndeRenditeberechnung}</Text>
              </View>
            </View>
          </View>
          <View id="RenditeGesamtRechnungTable" style={styles.tableCol}>
            <View style={styles.tableHeader}>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '5%',
                  borderLeft: '1px solid #666',
                }}
              >
                <Text style={{ padding: '2px' }}>Jahr</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '10%',
                }}
              >
                <Text style={{ padding: '2px' }}>Mieteinnahmen</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '10%',
                }}
              >
                <Text style={{ padding: '2px' }}>Zuzahlung</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '10%',
                }}
              >
                <Text style={{ padding: '2px' }}>Kreditrate</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '10%',
                }}
              >
                <Text style={{ padding: '2px' }}>Überschuss</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '15%',
                }}
              >
                <Text style={{ padding: '2px' }}>Überschuss kumuliert</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '20%',
                }}
              >
                <Text style={{ padding: '2px' }}>Kreditstand Tilgungsverlauf (1.1. & 31.12.)</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '10%',
                }}
              >
                <Text style={{ padding: '2px' }}>Saldo</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeaderItem,
                  width: '10%',
                }}
              >
                <Text style={{ padding: '2px' }}>Verkehrswert Immobilie vor ESt.</Text>
              </View>
            </View>
            {data[2].table.map((item: any, i: number) => (
              <View style={i % 2 == 0 ? styles.tableRowOdd : styles.tableRow} key={i}>
                <Text
                  style={{
                    width: '5%',
                    flexGrow: 1,
                    padding: '2px',
                    borderLeft: '1px solid #999',
                    borderRight: '1px solid #999',
                  }}
                >
                  {item.Jahr}
                </Text>
                <Text style={{ width: '10%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Mieteinnahmen}
                </Text>
                <Text style={{ width: '10%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Zuzahlung}
                </Text>
                <Text style={{ width: '10%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Kreditrate}
                </Text>
                <Text style={{ width: '10%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Überschuss}
                </Text>
                <Text style={{ width: '15%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.ÜberschussKumuliert}
                </Text>
                <Text style={{ width: '10%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.KreditstandTilgungsverlauf1}
                </Text>
                <Text style={{ width: '10%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.KreditstandTilgungsverlauf2}
                </Text>
                <Text style={{ width: '10%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.Saldo}
                </Text>
                <Text style={{ width: '10%', flexGrow: 1, padding: '2px', borderRight: '1px solid #999' }}>
                  {item.VerkehrswertImmobilieVorImmoEst}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Template;
