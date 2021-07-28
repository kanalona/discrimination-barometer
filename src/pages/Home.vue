<template>
  <div>
    <banner>
      <div class="intro-quote centered">
        <p class="highlight">
          Vorhersagealgorithmen sind oft genauso gut darin zu diskriminieren wie
          es die Gesellschaft davor schon war. Die Algorithmen zeigen die
          gesellschaftlichen Verhältnisse und somit auch die Diskriminierung.
        </p>
        <router-link class="arrow" to="#intro">&rarr;</router-link>
      </div>
    </banner>

    <div class="background-wrapper" id="intro">
      <div class="background-child">
        <inner-wrapper>
          <div class="ams-algorithm left">
            <div class="summary1">
              <p class="font-big nomargin">
                In Österreich soll ein Algorithmus die Chancen von
                Arbeitssuchenden auf dem Arbeitsmarkt vorhersagen.
              </p>
            </div>
            <div class="content1">
              <p class="nomargin">
                In vielen europäischen Ländern wurden in den letzten Jahren
                immer mehr Algorithmen eingesetzt, um Erwerbslosigkeit zu
                organisieren. So wird seit 2018 in Österreich die Einführung
                eines Algorithmus diskutiert und getestet, der die Chancen von
                Arbeitssuchenden auf dem Arbeitsmarkt vorhersagen soll.
                Arbeitssuchende werden in drei Gruppen eingeteilt:
                Arbeitssuchende mit niedrigen, mittleren und hohe Chancen. Je
                nachdem welcher Gruppe eine Person zugeordnet wird, bekommt sie
                unterschiedliche Ressourcen des Arbeitsmarkt Service (AMS).
                Schlechtere Chancen werden zum Beispiel für Frauen, Mütter,
                Menschen mit Beeinträchtigung, Menschen aus nicht EU-Staaten und
                Menschen über 50 berechnet.
              </p>
            </div>
            <div class="summary2">
              <p class="font-big nomargin">
                Zurück in die Zukunft! Vorhersagealgorithmen machen
                Veränderungen unwahrscheinlich und können so Diskriminierung
                erhalten.
              </p>
            </div>
            <div class="content2">
              <p class="nomargin">
                Die Chance in den Arbeitsmarkt integriert zu werden berechnet
                der Algorithmus mit Daten, die das AMS gesammelt hat. Es werden
                also Daten aus der Vergangenheit genommen um die Zukunft
                vorherzusagen. Das basiert auf der Annahme, dass die Zukunft der
                Vergangenheit ähneln wird: Veränderungen also unwahrscheinlich
                sind. So wird der jetzige Status-Quo erhalten!
              </p>
            </div>
          </div>
        </inner-wrapper>
      </div>
      <div class="background-child">
        <inner-wrapper>
          <div class="discrimination-barometer left">
            <div class="heading"><h1>DAS DISKRIMINIERUNGS BAROMETER</h1></div>
            <div class="content">
              <p>
                Dabei ist der AMS-Algorithmus gar nicht so gut darin für
                einzelne Menschen die Zukunft am Arbeitsmarkt vorherzusagen.
                Vielmehr berechnet er die Chance für Personengruppen mit
                gleichen oder ähnlichen Merkmalen. Der AMS-Algorithmus spiegelt
                also nicht, wie eine einzelne Person
                <em><strong>individuell</strong></em> diskriminiert wurde,
                sondern wie verschiedene Personengruppen in der Vergangenheit
                <em><strong>strukturell</strong></em> am Arbeitsmarkt
                diskriminiert wurden.
              </p>
              <!-- <p>
                Daten und statistische Berechnungen können dabei einen Hinweis
                auf die Verhältnisse am Arbeitsmarkt geben, aber auch nicht
                genau. Der AMS-Algorithmus ist also eher wie ein verzerrtes
                Bild.
              </p> -->
              <p>Es wird sichtbar, wie der österreichische Arbeitsmarkt in der
                Vergangenheit aufgrund von persönlichen Merkmalen strukturell
                diskriminiert hat. Der AMS-Algorithmus wird zum Diskriminierungs-Barometer!</p>
            </div>

            <div class="steps">
              <steps :steps="stepLinks"></steps>
            </div>
          </div>
        </inner-wrapper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepLinks: [
        {
          text: "Das Barometer",
          link: "/barometer",
        },
        {
          text: "Dahinterliegenden Werte",
          link: "/berechnung",
        },
        {
          text: "Gesellschaftlicher Kontext",
          link: "/kontext",
        },
      ],
    };
  },
};
</script>

<style scoped>
.intro-quote {
  margin: auto;
}
.background-wrapper {
  padding: 3rem 0 0 0;
}
.ams-algorithm {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "summary1 content1"
    "summary2 content2";
}
.discrimination-barometer {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "heading content"
    "steps steps";
}
@media (max-width: 800px) {
  .intro-quote p {
    font-size: 2rem;
  }
  .ams-algorithm {
    grid-template-columns: 1fr;
    grid-template-areas:
      "summary1"
      "content1"
      "summary2"
      "content2";
  }
  .discrimination-barometer {
    grid-template-columns: 1fr;
    grid-template-areas:
      "heading"
      "content"
      "steps";
  }
}
.heading {
  grid-area: heading;
}
.content {
  grid-area: content;
}
.steps {
  grid-area: steps;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0 0 10rem 0;
  text-align: left;
}
h1 {
  font-size: 50px;
}
.highlight {
  color: var(--primaryColor);
  font-size: 3rem;
  font-style: italic;
  text-align: center;
}
.arrow {
  font-size: 3rem;
  color: white;
}
.arrow:hover {
  color: var(--primaryColor);
}
</style>