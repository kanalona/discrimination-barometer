<template>
  <inner-wrapper>
    <div>
      <div class="container left">
        <div class="item1">
          <p class="font-big">
            Die Annahme, dass es nur zwei Geschlechter gibt und dass jede Person
            das eine oder andere Geschlecht hat, wird „Zweigeschlechtlichkeit“
            genannt.
          </p>
        </div>
        <div class="item2">
          <p>
            Bei dem Merkmal ‚Geschlecht‘ kann im Diskriminierungs-Barometer
            zwischen ‚männlich‘ und ‚weiblich‘ ausgewählt werden. Die Auswahl
            eines dritten Geschlechts wie „divers, inter, offen oder kein
            Eintrag“ ist nicht möglich. Hier wird also Zweigeschlechtlichkeit
            reproduziert.
          </p>
        </div>
      </div>
      <div class="container left">
        <div class="item1">
          <p class="font-big">
            Das Diskriminierungs-Barometer zeigt die Unsichtbarmachung von
            Geschlechtern die nicht männlich oder weiblich sind.
          </p>
        </div>
        <div class="item2">
          <p>
            Der Ausschluss und die Diskriminierung von nicht-binären Menschen,
            intersexuellen Menschen und trans*Personen ist Realität: auch am
            Arbeitsmarkt. Dies zeigt sich hier im Diskriminierungs-Barometers
            durch den Button „divers/inter/offen/kein Eintrag“ der deaktiviert
            ist sowie durch den Hinweis „keine Daten“.
          </p>
        </div>
      </div>

      <div class="container">
        <base-card class="item1 centered">
          <ul>
            <form-item
              :criterium="criteria.geschlecht"
              :key="'geschlecht'"
              :criterium-key="'geschlecht'"
            ></form-item></ul
        ></base-card>
        <base-card class="item2 centered">
          <img
            class="img-binary"
            src="../../assets/barchart-geschlecht.png"
            alt=""
        /></base-card>
      </div>

      <!-- <img src="../../assets/drittes_geschlecht.png" alt="" />
  <p>____GRAFIK______</p>
  <p>
    <em
      >Grafik 1: (Nicht alle Trans*personen bezeichnen sich selbst als
      nicht-binär, sie können sich als Frau oder Mann bezeichnen, sowie zwischen
      den Geschlechtern oder sich beiden oder keinem der Geschlechter zuordnen
      wollen. Trans*Personen sind hier gemeinsam mit nicht-binären Personen und
      intersexuellen Personen aufgelistet um aufzuzeigen, dass die Realität von
      Trans*frauen und Trans*männer sich von der von Cis-Männer und Cis-Frauen
      unterscheidet. Eine Studie zu Trans*Personen auf dem österreichischem
      Arbeitsmarkt von.. aus dem Jahr.. könnt ihr hier finden.)</em
    >
  </p> -->

      <div class="container left">
        <div class="item1">
          <p class="font-big">
            Die fehlenden Daten zum dritten Geschlecht spiegeln die Rechtslage
            vor 2018, als nur ‚männlich‘ und ‚weiblich‘ als Geschlechter
            anerkannt waren.
          </p>
        </div>
        <div class="item2">
          <p>
            Diese Reproduktion von Zweigeschlechtlichkeit ist gegen die
            Entscheidung vom Verfassungsgerichtshof Österreich vom 15. Juni
            2018, in dem es heißt, dass auch Geschlechtsidentitäten, über
            ‚männlich‘ und ‚weiblich‘ hinaus, anerkannt werden müssen. Dass es
            keine Daten zu einem dritten Geschlechtseintrag gibt, hängt auch
            damit zusammen, dass die Berechnung auf den Jahren 2015 und 2016
            basiert, also bevor der dritte Geschlechtseintrag entschieden wurde.
          </p>
        </div>
      </div>

      <div class="container left">
        <div class="item1">
          <p class="font-big">
            Nicht-binäre Personen sind häufiger von Falschzuordnung betroffen,
            da statistische Berechnungen mit wenigen Daten nicht so gut
            funktionieren.
          </p>
        </div>
        <div class="item2">
          <p>
            Auch mit der Einführung des dritten Geschlechtseintrags sind
            Datenerhebungen mit mehr als zwei Geschlechtern selten – und weniger
            Daten bedeutet oft auch weniger genaue Berechnungen. Nicht-binäre
            Personen sind also zweierlei von Diskriminierung betroffen:
            einerseits von Unsichtbarmachung durch wenige oder keine
            Datenerhebung und andererseits von eventuell häufigerer
            Falschzuordnung, da statistische Vorhersagen mit wenigen Daten
            ungenauer sind.
          </p>
        </div>
      </div>
    </div>
  </inner-wrapper>
</template>

<script>
import criteria from "@/assets/data/criteria.js";
import FormItem from "../../components/form/FormItem.vue";
export default {
  components: {
    FormItem,
  },
  data() {
    return {
      criteria: criteria,
    };
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "item1 item2";
  padding: 20px;
}
.item1 {
  grid-area: item1;
}
.item2 {
  grid-area: item2;
}
.centered {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (max-width: 800px) {
  .container {
    grid-template-areas:
      "item1 item1"
      "item2 item2";
  }
}
ul {
  list-style: none;
  padding: 0;
  align-self: center;
}
.img-binary {
  width: 100%;
}
</style>