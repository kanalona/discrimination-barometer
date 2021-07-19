export default {
  geschlecht: {
    label: 'Geschlecht',
    options: [
      {
        shorttext: 'männlich',
        text: 'männlich',
        value: 0,
      },
      {
        shorttext: 'weiblich',
        text: 'weiblich',
        value: -0.14
      },
      {
        shorttext: 'divers',
        text: 'divers / inter / offen / kein Eintrag',
        value: null,
      }
    ]
  },
  betreuung: {
    label: 'Betreuungspflichten',
    description: 'Betreuungspflichten haben nur bei Frauen Auswirkungen auf ihre Chancen.',
    options: [
      {
        shorttext: 'Nein',
        text: 'Nein',
        value: 0,
      },
      {
        shorttext: 'Ja',
        text: 'Ja',
        value: -0.15
      }
    ]
  },
  alter: {
    label: 'Alter',
    options: [
      {
        shorttext: 'u 30',
        text: 'unter 30',
        value: 0,
      },
      {
        shorttext: '30-49',
        text: '30-49 Jahre',
        value: -0.13,
      },
      {
        shorttext: 'ü 50',
        text: '50 oder älter',
        value: -0.7,
      }
    ]
  },
  staat: {
    label: 'Staatsangehörigkeit',
    options: [
      {
        shorttext: 'Österreich',
        text: 'Österreich',
        value: 0,
      },
      {
        shorttext: 'EU',
        text: 'andere EU-Staaten',
        value: 0.16,
      },
      {
        shorttext: 'Drittstaaten',
        text: 'Drittstaaten',
        value: -0.05,
      },
    ]
  },
  gesundheit: {
    label: 'Gesundheitliche Beeinträchtigung',
    options: [
      {
        shorttext: 'Nein',
        text: 'Nein',
        value: 0,
      },
      {
        shorttext: 'Ja',
        text: 'Ja',
        value: -0.67,
      },
    ]
  },
  ausbildung: {
    label: 'Ausbildung',
    options: [
      {
        shorttext: 'Schule',
        text: 'höchstens Pflichtschule',
        value: 0,
      },
      {
        shorttext: 'Lehre/BMS',
        text: 'Lehre oder berufsbildende mittlere Schule (BMS)',
        value: 0.28,
      },
      {
        shorttext: 'Matura+',
        text: 'Matura oder höhere Ausbildung',
        value: 0.01,
      },
    ]
  },
  wohnort: {
    label: 'Regionales Arbeitsmarktgeschehen',
    description: "Das regionale Arbeitsmarktgeschehen wird auf Basis des Wohnbezirks berechnet. Unten finden Sie eine Übersicht der Zuordnung der einzelnen Bezirke zu den verschiedenen Regionen.",
    options: [
      {
        shorttext: 'Region 1',
        text: 'Region 1',
        value: 0,
      },
      {
        shorttext: 'Region 2',
        text: 'Region 2',
        value: -0.34,
      },
      {
        shorttext: 'Region 3',
        text: 'Region 3',
        value: -0.18,
      },
      {
        shorttext: 'Region 4',
        text: 'Region 4',
        value: -0.83,
      },
      {
        shorttext: 'Region 5',
        text: 'Region 5',
        value: -0.82,
      },
    ]
  },
  beruf: {
    label: 'Bisheriger beruflicher Sektor',
    description: '„Produktion“: Land- und Forstwirtschaft, Industrie und technische Berufe; „Dienstleistung“: Handel, Verkehr, Verwaltung, Bürotätigkeiten, Gesundheits- & Lehrberufe',
    options: [
      {
        shorttext: 'Dienstl.',
        text: 'Dienstleistung',
        value: 0
      },
      {
        shorttext: 'Produktion',
        text: 'Produktion',
        value: 0.17
      }
    ]
  },
  beschaeftigung: {
    label: 'Anteil voll versicherungspflichtiger Beschäftigungstage in den vorangegangenen 1.370 Tagen',
    options: [
      {
        shorttext: '>75%',
        text: 'über 75% (mehr als 1.028 Tage)',
        value: 0
      },
      {
        shorttext: '<75%',
        text: 'unter 75%',
        value: -0.74
      }
    ]
  },
  gfAnzahl: {
    label: 'Jahre mit AMS-Geschäftsfällen',
    description: 'Anzahl der Jahre (in den letzen vier Jahren) in der eine Betreuung des AMS stattgefunden hat. (pro Jahr mindestens 1 Geschäftsfall)',
    options: [
      {
        shorttext: 'keines',
        text: 'in keinem',
        value: 0,
      },
      {
        shorttext: 'eins',
        text: 'in einem',
        value: 0.65,
      },
      {
        shorttext: 'zwei',
        text: 'in zwei',
        value: 1.19,
      },
      {
        shorttext: 'drei oder vier',
        text: 'in drei oder vier',
        value: 1.98,
      }
    ]
  },
  gfDauer: {
    label: 'Längste Dauer einer früheren Betreuung',
    options: [
      {
        shorttext: '<180 Tage',
        text: 'unter 180 Tage',
        value: 0,
      },
      {
        shorttext: '>180 Tage',
        text: '180 Tage oder mehr',
        value: -0.8,
      }
    ]
  },
  massnahmen: {
    label: 'Teilnahme an AMS-Maßnahmen (die letzte zutreffende auswählen)',
    options: [
      {
        shorttext: 'keine',
        text: 'keine Teilnahme',
        value: 0,
      },
      {
        shorttext: 'unterstützend',
        text: 'unterstützende Maßnahme',
        value: -0.57,
      },
      {
        shorttext: 'qualifizir.',
        text: 'qualifizierende Maßnahme',
        value: -0.21,
      },
      {
        shorttext: 'fördernd',
        text: 'Beschäftigungsförderungs-Maßnahme',
        value: -0.43,
      }
    ]
  },
}
