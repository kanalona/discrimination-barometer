<template>
  <div>
    <banner>
      <h1 class="fw-300 primaryColor italic">
        Vorhersagealgorithmen sind oft genauso gut darin zu diskriminieren wie
        es die Gesellschaft davor schon war. Die Algorithmen zeigen die
        gesellschaftlichen Verhältnisse und somit auch die Diskriminierung.
      </h1>
      <router-link class="arrow" to="#intro">Start &rarr;</router-link>
    </banner>
    
    <div class="bg-wrapper" id="intro">
      <img-text-item v-for="item in introduction" :key="item.key">
        <template v-slot:img>
          <img :src="item.imgSource" class="img-fluid" alt="" />
        </template>
        <template v-slot:text>
          <h2 class="fw-300 py-1 py-xl-2">
            {{ item.heading }}
          </h2>
          <p class="py-1 py-xl-2">
            {{ item.text }}
          </p>
        </template>
      </img-text-item>
    </div>

    <!-- <div class="bg-wrapper" id="intro">
      <div class="bg-child">
        <div
          class="
            row row-cols-1 row-cols-lg-2
            my-lg-9 my-xl-10 my-xxl-10
            left
          "
        >
          <div class="col align-self-center">
            <img src="..\assets\ams-explanation.png" class="img-fluid" alt="" />
          </div>
          <div class="col align-self-center p-5 px-lg-4 px-xl-5 px-xxl-8">
            <h2 class="fw-300 py-1 py-xl-2">
              In Österreich soll ein Algorithmus die Chancen von
              Arbeitssuchenden auf dem Arbeitsmarkt vorhersagen.
            </h2>
            <p class="py-1 py-xl-2">
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
            row row-cols-1 row-cols-lg-2
            my-lg-9 my-xl-10 my-xxl-10
            gy-4
            left
          "
        >
          <div class="col order-1 order-lg-2 align-self-center">
            <img src="..\assets\orakel1.png" class="img-fluid" alt="" />
          </div>
          <div class="col align-self-center px-lg-4 px-xl-5 px-xxl-8">
            <h2 class="fw-300 py-1 py-xl-2">
              Vorhersagealgorithmen können Veränderungen unwahrscheinlich machen
              und so Diskriminierung erhalten.
            </h2>
            <p class="py-1 py-xl-2">
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
            row row-cols-1 row-cols-lg-2
            my-7 my-md-8 my-lg-9 my-xl-10 my-xxl-10
            gy-4
            left
          "
        >
          <div class="col align-self-center"><h1>DAS DISKRIMINIERUNGS BAROMETER</h1></div>
          <div class="col align-self-center px-lg-4 px-xl-5 px-xxl-8">
            <p class="py-1 py-xl-2">
              Dabei ist der AMS-Algorithmus gar nicht so gut darin für einzelne
              Menschen die Zukunft am Arbeitsmarkt vorherzusagen. Vielmehr
              berechnet er die Chance für Personengruppen mit gleichen oder
              ähnlichen Merkmalen. Der AMS-Algorithmus spiegelt also nicht, wie
              eine einzelne Person
              <em><strong>individuell</strong></em> diskriminiert wurde, sondern
              wie verschiedene Personengruppen in der Vergangenheit
              <em><strong>strukturell</strong></em> am Arbeitsmarkt
              diskriminiert wurden.
            </p><p>
                Daten und statistische Berechnungen können dabei einen Hinweis
                auf die Verhältnisse am Arbeitsmarkt geben, aber auch nicht
                genau. Der AMS-Algorithmus ist also eher wie ein verzerrtes
                Bild.
              </p> 
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
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduction: [
        {
          key: 1,
          imgSource: "@/assets/ams-explanation.png",
          heading:
            "In Österreich soll ein Algorithmus die Chancen von Arbeitssuchenden auf dem Arbeitsmarkt vorhersagen.",
          text: "Dabei werden Arbeitssuchende in drei Gruppen eingeteilt: Arbeitssuchende mit niedrigen, mittleren und hohe Chancen. Je nachdem welcher Gruppe eine Person zugeordnet wird, bekommt sie unterschiedliche Ressourcen des Arbeitsmarkt Service (AMS). Schlechtere Chancen werden zum Beispiel für Frauen, Mütter, Menschen mit Beeinträchtigung, Menschen aus nicht EU-Staaten und Menschen über 50 berechnet.",
        },
        {
          key: 2,
          imgSource: "../assets/orakel1.png",
          heading:
            "Vorhersagealgorithmen können Veränderungen unwahrscheinlich machen und so Diskriminierung erhalten.",
          text: "Die Chance in den Arbeitsmarkt integriert zu werden berechnet der Algorithmus mit Daten, die das AMS gesammelt hat. Es werden also Daten aus der Vergangenheit genommen um die Zukunft vorherzusagen. Das basiert auf der Annahme, dass die Zukunft der Vergangenheit ähneln wird: Veränderungen also unwahrscheinlich sind. So wird der jetzige Status-Quo erhalten!",
        },
      ],
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
/* .bg-wrapper { */
/* padding: 3rem 0 0 0; */
/* } */
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