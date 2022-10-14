<template>
  <!-- <div class="row">
  
    <p>
      Wenn du fertig bist, kannst du hier mehr zu diesen zwei fiktiven Personen
      erfahren:
      <a
        class="more-less-btn grey font-regular"
        href="#personas"
        @click="toggleMore()"
        >{{ MoreLessText }}</a
      >
    </p>

    <div v-show="showMore" class="personas" id="personas">
      <base-card class="persona1">
        <p class="nomargin">
          <strong>Linda</strong> ist weiblich, 51 Jahre, wohnt in Graz, hat eine
          Beeinträchtigung (z.B. Diabetes) und Kinder. Sie hat einen
          US-amerikanischen Pass und hat einen Pflichtschulabschluss gemacht.
          Bisher hat sie im Dienstleistungsbereich (z.B. im Handel) gearbeitet.
          In den letzten vier Jahren war sie einmal für knapp ein Jahr
          arbeitslos gemeldet und hat an unterstützenden Maßnahmen des AMS
          teilgenommen<sup class="font-small">1</sup>. Sie beginnt einen neuen
          Job im Supermarkt, aber die Filiale in der Linda arbeitet schließt und
          den Mitarbeiter*innen wird gekündigt. Nun nimmt Linda wieder den Weg
          zum AMS und bekommt eine Integrationschance in den Arbeitsmarkt von
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
          <strong>Lorenz</strong> ist männlich, 23 Jahre, wohnt in Innsbruck,
          hat keine Beeinträchtigung und (keine) Kinder. Er hat einen
          italienischen Pass und hat eine Ausbildung im Produktionsbereich
          gemacht (z.B. als Tischler). Die letzten vier Jahre war er in diesem
          Bereich vollbeschäftigt, hat aber einmal im Jahr nach einem neuen Job
          gesucht und sich für ca. 2,5 Monate pro Jahr beim AMS arbeitslos
          gemeldet<sup class="font-small">2</sup>. Jedes Mal wurde er nach
          dieser Zeit ohne Teilnahme an Maßnahmen des AMS wieder erwerbstätig.
          Thomas beginnt einen neuen Job, doch die Firma in der er arbeitet
          schließt und den Mitarbeiter*innen wird gekündigt. Nun nimmt Thomas
          wieder den Weg zum AMS und bekommt eine Integrationschance in den
          Arbeitsmarkt von <strong>93,64%</strong> errechnet.
        </p>
        <div class="footnote">
          <p>
            <sup>2 </sup>Kriterien: über 75% Beschäftigungstage und unter 180
            Tage Betreuung durch das AMS
          </p>
        </div>
      </base-card>
    </div>
  </div> -->

  <div class="row row-cols-1 g-3">
    <div class="col">
      <img src="@/assets/light_bulb.png" alt="" />
      <h1 class="upper-case">Reflexion</h1>
    </div>
    <div class="col">
      <h5 class="headline-slash-big no-margi">
        Versuche, mit Hilfe des Barometers oben, die höchste und die niedrigste
        Chance zu erreichen.
      </h5>
    </div>

    <div class="col">
      <ul class="d-inline-flex flex-column arrow-list left">
        <li><h5>Was zeichnet diese Personen aus?</h5></li>
        <li>
          <h5>
            Welche Merkmale sind ausschlaggebend für die Arbeitsmarktchancen?
          </h5>
        </li>
        <li><h5>Wie spielen Merkmale zusammen?</h5></li>
      </ul>
    </div>
    <div class="col">
      <base-button link mode="contained" to="#barometer"
        >Zum Barometer &rarr;</base-button
      >
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
        return "⮞ Lösung anzeigen";
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
img {
  height: 15vh;
  width: auto;
}

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
  color: var(--primaryColor);
}
</style>