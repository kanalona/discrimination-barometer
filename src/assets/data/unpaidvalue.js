export default {
    annualVolume: {
        label: 'Jahresvolumen bezahlter und unbezahlter Arbeit',
        data: [
            {
                key: 'volumeUnpaid',
                name: 'unbezahlte Arbeit',
                value: 89,
                unit: 'Mrd. Stunden',
                percent: 57
            },
            {
                key: 'volumePaid',
                name: 'bezahlte Arbeit',
                value: 66,
                unit: 'Mrd. Std.'
            }
        ]
    },
    unpaid: {
        label: 'Bruttowertschöpfung bezahlter Arbeit',
        data: [
            {
                name: 'Bruttowertschöpfung unbezahlte Arbeit',
                value: 987,
                unit: 'Mrd. €'
            }
        ]
    },
    percent: {
        label: 'Anteil der unbezahlter Arbeit an der gesamten Bruttowertschöpfung',
        data: [
            {
                name: 'Bruttowertschöpfung unbezahlte Arbeit',
                value: 987,
                unit: 'Mrd. €',
                percent: 40
            },
            {
                name: 'Differenz',
                value: 1467,
                unit: 'Mrd. €'
            },


        ]
    },
    sectors: {
        label: 'Bruttowertschöpfung im Vergleich zu Wirtschaftbereichen',
        data: [
            {
                name: 'Industrie',
                value: 626,
                unit: 'Mrd. €'
            },
            {
                name: 'Handel, Verkehr und Gastgewerbe',
                value: 356,
                unit: 'Mrd. €'
            },  

        ]
    }

}