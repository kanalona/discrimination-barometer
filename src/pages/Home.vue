<template>
  <div>
    <!-- Banner -->
    <banner>
      <h1 class="fw-300 primaryColor italic">
        Vorhersagealgorithmen sind oft genauso gut darin zu diskriminieren wie
        es die Gesellschaft davor schon war. Die Algorithmen zeigen die
        gesellschaftlichen Verhältnisse und somit auch die Diskriminierung.
      </h1>
      <router-link class="arrow" to="#intro">Start &rarr;</router-link>
    </banner>

    <!-- Image Text Introcutions -->
    <bg-wrapper id="intro">
      <img-text-item
        v-for="(item, index) in introduction"
        :key="index"
        :isImgOnRight="index % 2 == 1"
      >
        <template v-slot:img>
          <img
            :src="require(`@/assets/${item.imgName}`)"
            class="img-fluid"
            alt=""
          />
        </template>
        <template v-slot:text>
          <h2 class="py-1 py-xl-2 headline-slash fw-300">
            {{ item.heading }}
          </h2>
          <p class="py-1 py-xl-2 justify">
            {{ item.text }}
          </p>
        </template>
      </img-text-item>

      <!-- Das Diskriminierungs Barometer -->
      <div class="d-flex">
        <div class="my-7 my-md-8 my-lg-9 my-xl-10 my-xxl-10">
          <div class="row row-cols-1 gy-4 left center">
            <div class="col align-self-center px-lg-5 px-xl-5 px-xxl-8">
              <h1 class="upper-case">Das Diskriminierungs Barometer</h1>
            </div>
            <div class="col align-self-center px-lg-5 px-xl-5 px-xxl-8">
              <h5 class="headline-slash">
                Dabei ist der AMS-Algorithmus gar nicht so gut darin für
                einzelne Menschen die Zukunft am Arbeitsmarkt vorherzusagen.
                Vielmehr berechnet er die Chance für Personengruppen mit
                gleichen oder ähnlichen Merkmalen. Der AMS-Algorithmus spiegelt
                also wie verschiedene Personengruppen in der Vergangenheit
                strukturell am Arbeitsmarkt diskriminiert wurden. Der
                AMS-Algorithmus wird zum Diskriminierungs-Barometer!
              </h5>
            </div>
          </div>
          <!-- steps -->
          <div class="row justify-content-center mt-5">
            <div class="col px-4 px-sm-6 px-md-7 px-lg-5 px-xl-5 px-xxl-8">
              <steps
                :steps="steps"
              ></steps>
            </div>
          </div>
        </div>
      </div>
    </bg-wrapper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduction: [
        {
          key: 1,
          imgName: "ams-explanation.png",
          heading:
            "In Österreich soll ein Algorithmus die Chancen von Arbeitssuchenden auf dem Arbeitsmarkt vorhersagen.",
          text: "Dabei werden Arbeitssuchende in drei Gruppen eingeteilt: Arbeitssuchende mit niedrigen, mittleren und hohe Chancen. Je nachdem welcher Gruppe eine Person zugeordnet wird, bekommt sie unterschiedliche Ressourcen des Arbeitsmarkt Service (AMS). Schlechtere Chancen werden zum Beispiel für Frauen, Mütter, Menschen mit Beeinträchtigung, Menschen aus nicht EU-Staaten und Menschen über 50 berechnet.",
        },
        {
          key: 2,
          imgName: "orakel1.png",
          heading:
            "Vorhersage-Algorithmen können Veränderungen unwahrscheinlich machen und so Diskriminierung erhalten.",
          text: "Die Chance in den Arbeitsmarkt integriert zu werden berechnet der Algorithmus mit Daten, die das AMS gesammelt hat. Es werden also Daten aus der Vergangenheit genommen um die Zukunft vorherzusagen. Das basiert auf der Annahme, dass die Zukunft der Vergangenheit ähneln wird: Veränderungen also unwahrscheinlich sind. So wird der jetzige Status-Quo erhalten!",
        },
      ],

      steps: {
        1: {
          name: "1",
          heading: "Das Barometer ausprobieren!",
          link: "/barometer",
        },
        2: {
          name: "2",
          heading: "Dahinterliegenden Werte!",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ",
          link: "/berechnung",
        },
        3: {
          name: "3",
          heading: "Gesellschaftlicher Kontext!",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
          link: "/kontext",
        },
      },
    };
  },
};
</script>

<style scoped>
/* .bg-wrapper { */
/* padding: 3rem 0 0 0; */
/* } */

.arrow {
  font-size: 3rem;
  color: white;
}
.arrow:hover {
  color: var(--primaryColor);
}
</style>