<template>
  <div class="home-page">
    <div ref="start">
      <Start @scrollTo="scrollTo">
      </Start>
    </div>

    <div ref="intro">
      <mouse-follow mode="rectangle">
        <div class="content-style d-flex justify-content-center align-items-center border border-2 p-3 m-3 p-md-5">
          <p class="quote-text ">Algorithmen sind oft genauso gut darin zu
            diskriminieren wie
            die Gesellschaft von der sie lernen. Algorithmen zeigen die
            gesellschaftlichen Verhältnisse und somit auch ihre Diskriminierung.</p>
        </div>
      </mouse-follow>
    </div>

    <!-- Image Text Introcutions -->
    <bg-wrapper>

      <!-- <div class="">
        <div class="row my-4 my-lg-9 my-xl-10 my-xxl-10">
          <div class="col">
            <p class="display-3">In Österreich soll ein Algorithmus die Chancen von Arbeitssuchenden auf dem Arbeitsmarkt
              vorhersagen.</p>
          </div>
          <div class="col"></div>
        </div>
        <div class="row my-4 my-lg-9 my-xl-10 my-xxl-10">
          <div class="col"><base-card>
              <img src="@/assets/ams-explanation.png" class="img-fluid" alt="" />
            </base-card></div>
          <div class="col"><base-card>
              <p class="py-1 py-xl-2 justify">
                Dabei werden Arbeitssuchende in drei Gruppen eingeteilt: Arbeitssuchende mit niedrigen, mittleren und hohe
                Chancen. Je nachdem welcher Gruppe eine Person zugeordnet wird, bekommt sie unterschiedliche Ressourcen
                des Arbeitsmarkt Service (AMS). Schlechtere Chancen werden zum Beispiel für Frauen, Mütter, Menschen mit
                Beeinträchtigung, Menschen aus nicht EU-Staaten und Menschen über 50 berechnet.
              </p>
            </base-card></div>
        </div>
      </div> -->


      <section class="py-4 py-lg-9 py-xl-10 py-xxl-10" v-for="(item, index) in introduction" :key="index">


        <img-text-item>
          <template #left>
            <p class="left h3 fw-300 ">{{ item.heading }}</p>
            <img :src="require(`@/assets/${item.imgName}`)" class="img-fluid" alt="" />

          </template>

          <template #right>
            <p class="display-4 right py-1 py-xl-2 primaryColor">
              {{ item.text }}
            </p>
          </template>
        </img-text-item>
      </section>

    </bg-wrapper>

    <!-- Das Diskriminierungs Barometer -->
    <div class="d-flex bg-primaryColor">
      <div class="my-7 my-md-8 my-lg-9 my-xl-10 my-xxl-10">
        <div class="row row-cols-1 gy-4 left center">
          <div class="col align-self-center px-lg-5 px-xl-5 px-xxl-8">
            <h1 class="upper-case">Das Diskriminierungs Barometer</h1>
          </div>
          <div class="col align-self-center px-lg-5 px-xl-5 px-xxl-8">
            <h5 class="headline-slash-big">
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
            <steps :steps="steps" clickable></steps>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Start from '../components/home/Start.vue';
export default {
  components: { Start },

  data() {
    return {
      introduction: [
        {
          key: 1,
          imgName: "ams-explanation.png",
          heading:
            "In Österreich soll ein Algorithmus die Chancen von Arbeitssuchenden auf dem Arbeitsmarkt vorhersagen.",
          text: "Arbeitssuchende werden in drei Gruppen eingeteilt: mit niedrigen, mittleren und hohen Chancen. Je nach Gruppe bekommen sie unterschiedliche Ressourcen des Arbeitsmarkt Service (AMS). Schlechtere Chancen werden zum Beispiel für Frauen, Mütter, Menschen mit Beeinträchtigung, Menschen aus nicht EU-Staaten und Menschen über 50 berechnet.",
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
  methods: {
    scrollTo(refName) {
      const el = this.$refs[refName]
      // console.log(el);
      el.scrollIntoView({ behavior: "smooth" })
    }
  },
};
</script>

<style scoped>
.quote-text {
  font-size: clamp(2rem, 0.594rem + 2vh + 1.893vw, 4rem);
}

.content-style {
  color: var(--bg);
  z-index: 0;
  width: 90%;
  max-width: 60rem;
  max-height: 90vh;
  margin: auto;
}
</style>