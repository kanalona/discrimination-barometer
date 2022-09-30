<template>
  <div>
    <banner>
      <p class="font-huge primaryColor italic">
        Vorhersagealgorithmen sind oft genauso gut darin zu diskriminieren wie
        es die Gesellschaft davor schon war. Die Algorithmen zeigen die
        gesellschaftlichen Verhältnisse und somit auch die Diskriminierung.
      </p>
      <router-link class="arrow" to="#intro">Start &rarr;</router-link>
    </banner>

    <div class="container-fluid bg-wrapper" id="intro">
      <div class="bg-child">
        <div
          class="
            row
            my-7 my-md-8 my-lg-9 my-xl-10
            mx-7 mx-md-8 mx-lg-9 mx-xl-10
            left
          "
        >
          <div class="col">
            <p class="font-big">
              In Österreich soll ein Algorithmus die Chancen von
              Arbeitssuchenden auf dem Arbeitsmarkt vorhersagen.
            </p>
          </div>
          <div class="col">
            <p>
              Dabei werden Arbeitssuchende in drei Gruppen eingeteilt:
              Arbeitssuchende mit niedrigen, mittleren und hohe Chancen. Je
              nachdem welcher Gruppe eine Person zugeordnet wird, bekommt sie
              unterschiedliche Ressourcen des Arbeitsmarkt Service (AMS).
              Schlechtere Chancen werden zum Beispiel für Frauen, Mütter,
              Menschen mit Beeinträchtigung, Menschen aus nicht EU-Staaten und
              Menschen über 50 berechnet.
            </p>
          </div>
        </div>
      </div>
      <div class="bg-child">
        <div
          class="
            row
            my-7 my-md-8 my-lg-9 my-xl-10
            mx-7 mx-md-8 mx-lg-9 mx-xl-10
            left
          "
        >
          <div class="col">
            <p class="font-big">
              Vorhersagealgorithmen können Veränderungen unwahrscheinlich machen
              und so Diskriminierung erhalten.
            </p>
          </div>
          <div class="col">
            <p>
              Die Chance in den Arbeitsmarkt integriert zu werden berechnet der
              Algorithmus mit Daten, die das AMS gesammelt hat. Es werden also
              Daten aus der Vergangenheit genommen um die Zukunft vorherzusagen.
              Das basiert auf der Annahme, dass die Zukunft der Vergangenheit
              ähneln wird: Veränderungen also unwahrscheinlich sind. So wird der
              jetzige Status-Quo erhalten!
            </p>
          </div>
        </div>
      </div>
      <div class="bg-child">
        <div
          class="
            row
            my-7 my-md-8 my-lg-9 my-xl-10
            mx-7 mx-md-8 mx-lg-9 mx-xl-10
            left
          "
        >
          <div class="col"><h1>DAS DISKRIMINIERUNGS BAROMETER</h1></div>
          <div class="col">
            <p>
              Dabei ist der AMS-Algorithmus gar nicht so gut darin für einzelne
              Menschen die Zukunft am Arbeitsmarkt vorherzusagen. Vielmehr
              berechnet er die Chance für Personengruppen mit gleichen oder
              ähnlichen Merkmalen. Der AMS-Algorithmus spiegelt also nicht, wie
              eine einzelne Person
              <em><strong>individuell</strong></em> diskriminiert wurde, sondern
              wie verschiedene Personengruppen in der Vergangenheit
              <em><strong>strukturell</strong></em> am Arbeitsmarkt
              diskriminiert wurden.
            </p>
            <!-- <p>
                Daten und statistische Berechnungen können dabei einen Hinweis
                auf die Verhältnisse am Arbeitsmarkt geben, aber auch nicht
                genau. Der AMS-Algorithmus ist also eher wie ein verzerrtes
                Bild.
              </p> -->
            <p>
              Es wird sichtbar, wie der österreichische Arbeitsmarkt in der
              Vergangenheit aufgrund von persönlichen Merkmalen strukturell
              diskriminiert hat. Der AMS-Algorithmus wird zum
              Diskriminierungs-Barometer!
            </p>
          </div>
        </div>
      </div>
      <div
        class="
          row
          my-7 my-md-8 my-lg-9 my-xl-10
          mx-7 mx-md-8 mx-lg-9 mx-xl-10
          left
        "
      >
        <div class="steps">
          <steps :steps="stepLinks"></steps>
        </div>
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
.bg-wrapper {
  padding: 3rem 0 0 0;
}
/* .row {
  margin-top:10rem;
  margin-bottom: 10rem;
} */
/*.heading {
  grid-area: heading;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0 0 10rem 0;
  text-align: left;
}*/
.arrow {
  font-size: 3rem;
  color: white;
}
.arrow:hover {
  color: var(--primaryColor);
}
</style>