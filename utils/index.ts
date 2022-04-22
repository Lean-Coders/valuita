export const excelNumberToDate = (excelNum: number): string =>
  !excelNum ? '0' : new Date(Math.round((excelNum - 25569) * 86400 * 1000)).toLocaleDateString('de-DE');

export const excelFloatToPercentage = (excelFloat: number): string =>
  !excelFloat
    ? '0'
    : `${(100 * excelFloat).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;

export const excelFloatToString = (excelFloat: number): string =>
  !excelFloat
    ? '0'
    : excelFloat.toLocaleString(
        'de-DE',
        Math.floor(excelFloat) == excelFloat ? {} : { minimumFractionDigits: 2, maximumFractionDigits: 2 },
      );

export enum State {
  IDLE,
  LOADING,
  ERROR,
  DONE,
}

export const organizeData = (data: any[][]) => {
  return data.map((sheet, index) => {
    let table, tableSize;
    switch (index) {
      case 0:
        table = new Array(23).fill(0).map((_, i) => {
          const row = 4 + i;
          return {
            Jahr: Number(sheet[row][4]).toString(),
            KreditstandTilgungsverlauf1: excelFloatToString(sheet[row][5]),
            KreditstandTilgungsverlauf2: excelFloatToString(sheet[row][6]),
            Sondertilgung: excelFloatToString(sheet[row][7]),
            MieteNetto: excelFloatToString(sheet[row][8]),
            Mietausfall: excelFloatToString(sheet[row][9]),
            Instandhaltung: excelFloatToString(sheet[row][10]),
            Verwaltung: excelFloatToString(sheet[row][11]),
            Steuerberatung: excelFloatToString(sheet[row][12]),
            Vermietungsmakler: excelFloatToString(sheet[row][13]),
            AfaInklusiveKüche: excelFloatToString(sheet[row][14]),
            BeschleunigteAfa: excelFloatToString(sheet[row][15]),
            Zinsen: excelFloatToString(sheet[row][16]),
            SteuerlichesErgebnis: excelFloatToString(sheet[row][17]),
          };
        });
        return {
          Kaufdatum: excelNumberToDate(sheet[3][1]),
          Vermietungsbeginn: excelNumberToDate(sheet[4][1]),
          KaufpreisInklKücheNetto: excelFloatToString(sheet[0][1]),
          KüchenpreisNetto: excelFloatToString(sheet[1][1]),
          Konzeptionsgebühr: excelFloatToString(sheet[2][1]),
          MietausfallInstandhaltung: excelFloatToPercentage(sheet[5][1]),
          IndexierungProJahr: excelFloatToPercentage(sheet[6][1]),
          Eigenmittel: excelFloatToString(sheet[8][1]),
          KreditbetragGesamt: excelFloatToString(sheet[9][1]),
          Finanzierungsnebenkosten: excelFloatToString(sheet[10][1]),
          KreditzinsenBisBeginn: excelFloatToString(sheet[11][1]),
          Tilgungsbeginn: excelNumberToDate(sheet[12][1]),
          Tilgungszeitraum: excelFloatToString(sheet[13][1]),
          KreditzinsenProJahr: excelFloatToPercentage(sheet[14][1]),
          KreditzinsenProMonat: excelFloatToString(sheet[15][1]),
          PrognoseZeitraum: sheet[17][1],
          Kaufpreis: excelFloatToString(sheet[20][1]),
          Kaufnebenkosten: excelFloatToString(sheet[21][1]),
          Grundanteil: excelFloatToString(sheet[22][1]),
          AfaImmobilieProJahr: excelFloatToString(sheet[23][1]),
          AfaKücheProJahr: excelFloatToString(sheet[25][1]),
          table,
        };
      case 1:
        tableSize = [...sheet].splice(3).findIndex((array) => !array[2]);
        table = new Array(tableSize).fill(0).map((_, i) => {
          const row = 3 + i;
          return {
            Jahr: Number(sheet[row][2]).toString(),
            MieteNetto: excelFloatToString(sheet[row][3]),
            Kreditrate: excelFloatToString(sheet[row][4]),
            Leerstand: excelFloatToString(sheet[row][5]),
            LeerstandProzentMiete: excelFloatToPercentage(sheet[row][6]),
            Instandhaltung: excelFloatToString(sheet[row][7]),
            InstandhaltungProzentMiete: excelFloatToPercentage(sheet[row][8]),
            Eigenmittel: excelFloatToString(sheet[row][9]),
            EigenmittelGesamt: excelFloatToString(sheet[row][10]),
            Est: excelFloatToString(sheet[row][11]),
            Saldo: excelFloatToString(sheet[row][12]), // TODO: immer leer im excel?
            Afa: excelFloatToString(sheet[row][13]),
            Zinsen: excelFloatToString(sheet[row][14]),
            VerwaltungSteuerberatung: excelFloatToString(sheet[row][15]),
            SteuerlichesErgebnis: excelFloatToString(sheet[row][16]),
          };
        });
        return {
          IndexMiete: excelFloatToPercentage(sheet[1][1]),
          IndexWohnung: excelFloatToPercentage(sheet[2][1]),
          LaufzeitRenditeberechnung: excelFloatToString(sheet[3][1]),
          EndeRenditeberechnung: Number(sheet[4][1]).toString(),
          Progressionsstufe: excelFloatToPercentage(sheet[5][1]),
          Rendite: excelFloatToPercentage(sheet[7][1]),
          table,
        };
      case 2:
        tableSize = [...sheet].splice(4).findIndex((array) => !array[2]);
        table = new Array(tableSize).fill(0).map((_, i) => {
          const row = 4 + i;
          return {
            Jahr: Number(sheet[row][2]).toString(),
            Mieteinnahmen: excelFloatToString(sheet[row][3]),
            Zuzahlung: excelFloatToString(sheet[row][4]),
            Kreditrate: excelFloatToString(sheet[row][5]),
            Überschuss: excelFloatToString(sheet[row][6]),
            ÜberschussKumuliert: excelFloatToString(sheet[row][7]),
            KreditstandTilgungsverlauf1: excelFloatToString(sheet[row][8]),
            KreditstandTilgungsverlauf2: excelFloatToString(sheet[row][9]),
            Saldo: excelFloatToString(sheet[row][11]), // TODO: gibt es nicht im excel?
            VerkehrswertImmobilieVorImmoEst: excelFloatToString(sheet[row][10]),
          };
        });
        return {
          IndexMiete: excelFloatToPercentage(sheet[2][1]),
          IndexWertentwicklungWohnung: excelFloatToPercentage(sheet[3][1]),
          LaufzeitRenditeberechnung: excelFloatToString(sheet[4][1]),
          EndeRenditeberechnung: Number(sheet[5][1]).toString(),
          table,
        };
    }
  });
};
