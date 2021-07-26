<template>
  <div class="background-wrapper">
    <div class="background-child">
      <inner-wrapper>
        <h1 class="left">{{ "Zweigeschlechtlichkeit".toUpperCase() }}</h1>
        <div class="parent-container">
          <div class="container left">
            <div class="item1">
              <p class="font-big">
                Die Annahme, dass es nur zwei Geschlechter gibt und dass jede
                Person das eine oder andere Geschlecht hat, wird
                „Zweigeschlechtlichkeit“ genannt.<sup class="font-small"
                  ><a href="#source1">1</a></sup
                >
              </p>
            </div>
            <div class="item2">
              <p>
                Bei dem Merkmal ‚Geschlecht‘ kann im Diskriminierungs-Barometer
                zwischen ‚männlich‘ und ‚weiblich‘ ausgewählt werden. Die
                Auswahl eines dritten Geschlechts wie „divers, inter, offen oder
                kein Eintrag“ ist nicht möglich. Hier wird also
                Zweigeschlechtlichkeit reproduziert.
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
                Der Ausschluss und die Diskriminierung von nicht-binären
                Menschen, intersexuellen Menschen und trans*Personen ist
                Realität: auch am Arbeitsmarkt. Dies zeigt sich hier im
                Diskriminierungs-Barometers durch den Button
                „divers/inter/offen/kein Eintrag“ der deaktiviert ist sowie
                durch den Hinweis „keine Daten“.
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

          <div class="container left">
            <div class="item1">
              <p class="font-big">
                Die fehlenden Daten zum dritten Geschlecht spiegeln die
                Rechtslage vor 2018, als nur ‚männlich‘ und ‚weiblich‘ als
                Geschlechter anerkannt waren.
              </p>
            </div>
            <div class="item2">
              <p>
                Diese Reproduktion von Zweigeschlechtlichkeit ist gegen die
                Entscheidung vom Verfassungsgerichtshof Österreich vom 15. Juni
                2018, in dem es heißt, dass auch Geschlechtsidentitäten, über
                ‚männlich‘ und ‚weiblich‘ hinaus, anerkannt werden müssen.<sup
                  class="font-small"
                  ><a href="#source2">2</a></sup
                >
                Dass es keine Daten zu einem dritten Geschlechtseintrag gibt,
                hängt auch damit zusammen, dass die Berechnung auf den Jahren
                2015 und 2016 basiert, also bevor der dritte Geschlechtseintrag
                entschieden wurde.
              </p>
            </div>
          </div>

          <div class="container left">
            <div class="item1">
              <p class="font-big">
                Nicht-binäre Personen sind häufiger von Falschzuordnung
                betroffen, da statistische Berechnungen mit wenigen Daten nicht
                so gut funktionieren.
              </p>
            </div>
            <div class="item2">
              <p>
                Auch mit der Einführung des dritten Geschlechtseintrags sind
                Datenerhebungen mit mehr als zwei Geschlechtern selten – und
                weniger Daten bedeutet oft auch weniger genaue Berechnungen.
                Nicht-binäre Personen sind also zweierlei von Diskriminierung
                betroffen: einerseits von Unsichtbarmachung durch wenige oder
                keine Datenerhebung und andererseits von eventuell häufigerer
                Falschzuordnung, da statistische Vorhersagen mit wenigen Daten
                ungenauer sind.
              </p>
            </div>
          </div>
          <div class="footnote">
            <p id="source1">
              <sup>1</sup>
              Wetterer, A. (2008): Konstruktion von Geschlecht:
              Reproduktionsweisen der Zweigeschlechtlichkeit. In: Becker, Ruth;
              Kortendiek, Beate (Hg.) (2010): Handbuch Frauen- und
              Geschlechterforschung Theorien, Methoden, Empirie. 3.Auflage,
              Wiesbaden: Springer, S. 126-136
            </p>
            <p id="source2">
              <sup>2</sup>
              VfGH 15.06.2018, G 77/2018-9, Verfügbar:
              <a
                href="https://www.vfgh.gv.at/downloads/VfGH_Entscheidung_G_77-2018_unbestimmtes_Geschlecht_anonym.pdf"
                >online</a
              >, (Zugriff: 05.12.2019, 16:40 MEZ).
            </p>
          </div>
        </div>
      </inner-wrapper>
    </div>
    <div class="background-child">
      <next-prev
        :next="true"
        text="(Beispiel Betreuungspflichten)"
        :link="'/kontext/betreuungspflichten#context'"
      ></next-prev>
    </div>
  </div>
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
.parent-container {
  display: grid;
  grid-gap: 20px;
}
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "item1 item2";
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
.footnote {
  margin-top: 2rem;
}
@media (max-width: 800px) {
  .container {
    grid-template-areas:
      "item1 item1"
      "item2 item2";
  }
  .footnote {
    max-width: 100%;
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

p {
  margin: 0;
}
</style>