<template>
  <div class="personas-parent-container left">
    <base-card>
      <div class="border-bottom padding-bottom">
        <h4 class="nomargin">Gedankenexperiment</h4>
      </div>
      <p>
        Versuchen Sie den höchsten und den niedrigsten Wert zu erreichen. Was
        zeichnet diese Personen und ihren Alltag aus? Welche Merkmale sind
        ausschlaggebend für die Arbeitsmarktchancen? Und welche Merkmale spielen
        wie zusammen?
      </p>
      <p>
        Wenn Sie fertig sind können Sie hier mehr zu diesen zwei fiktiven
        Personen zu erfahren:
        <a
          class="more-less-btn grey font-regular"
          href="#personas"
          @click="toggleMore()"
          >{{ MoreLessText }}</a
        >
      </p>
    </base-card>
    <div v-show="showMore" class="personas" id="personas">
      <base-card class="persona1">
        <p class="nomargin">
          <strong>Linda</strong> ist weiblich, 51 Jahre, wohnt in Graz, hat eine
          Beeinträchtigung (z.B. Diabetes) und Kinder. Sie hat einen schweizer
          Pass und hat einen Pflichtschulabschluss gemacht. Bisher hat sie im
          Dienstleistungsbereich (z.B. im Handel) gearbeitet. In den letzten
          vier Jahren war sie einmal für knapp 1 Jahr arbeitslos gemeldet und
          hat an unterstützenden Maßnahmen des AMS teilgenommen<sup
            class="font-small"
            >1</sup
          >. Sie beginnt einen neuen Job im Supermarkt, aber die Filiale, in der
          Linda arbeitet schließt und den Mitarbeiter*innen werden gekündigt.
          Nun nimmt Linda wieder den Weg zum AMS und bekommt eine
          Integrationschance in den Arbeitsmarkt von
          <strong>1,98%</strong> errechnet.
        </p>
        <div class="footnote">
          <p>
            <sup>1 </sup>Kriterien: unter 75% Beschäftigungstage und über 180
            Tage Betreuung durch das AMS
          </p>
        </div>
      </base-card>
      <base-card class="persona2">
        <p class="nomargin">
          <strong>Thomas</strong> ist männlich, 23 Jahre, wohnt in Innsbruck,
          hat keine Beeinträchtigung und keine Kinder. Er hat einen
          italienischen Pass und hat eine Ausbildung im Produktionsbereich
          gemacht (z.B. als Tischler). Die letzten 4 Jahre war er in diesem
          Bereich vollbeschäftigt, hat aber einmal im Jahr nach einem neuen Job
          gesucht und sich für ca. 2,5 Monate pro Jahr beim AMS arbeitslos
          gemeldet<sup class="font-small">2</sup>. Jedes Mal wurde er nach
          dieser Zeit ohne Teilnahme an Maßnahmen des AMS wieder erwerbstätig.
          Thomas beginnt einen neuen Job, doch die Firma in der er arbeitet geht
          bankrott und die Mitarbeiter*innen verlieren ihre Arbeit. Nun nimmt
          Thomas wieder den Weg zum AMS und bekommt eine Integrationschance in
          den Arbeitsmarkt von <strong>93,64%</strong> errechnet.
        </p>
        <div class="footnote">
          <p>
            <sup>2 </sup>Kriterien: über 75% Beschäftigungstage und unter 180
            Tage Betreuung durch das AMS
          </p>
        </div>
      </base-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
    };
  },
  computed: {
    MoreLessText() {
      if (this.showMore === true) {
        return "⮟ Lösung verbergen";
      } else {
        return "⮞ Lösung anzeigen"
      }
    },
  },
  methods: {
    toggleMore() {
      this.showMore = !this.showMore;
    },
  },
};
</script>

<style scoped>
.personas {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: auto auto;
  grid-template-areas: "persona1 persona2";
  padding-top: 15px;
}
.persona1 {
  grid-area: persona1;
  display: grid;
  grid-template-rows: 1fr auto;
}
.persona2 {
  grid-area: persona2;
  display: grid;
  grid-template-rows: 1fr auto;
}
@media (max-width: 800px) {
  .personas {
    grid-template-areas:
      "persona1"
      "persona2";
  }
}
.more-less-btn {
  cursor: pointer;
  text-decoration: none;
}
.more-less-btn:hover {
  color: #ff7b00;
}
</style>