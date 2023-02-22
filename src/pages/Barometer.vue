<template>
  <div>
    <!-- Banner -->
    <banner>
      <template #heading>
        <h1 class="headline-slash">Das Diskriminierungs-Barometer</h1>
      </template>
      <template #text>
        <h5 class="nomargin font-big">
          Für die Berechnung der Chance auf dem Arbeitsmarkt benutzt das AMS
          verschiedene statistische Verfahren und Modelle. Exemplarisch wird
          hier eines davon vorgestellt. Die dabei berechnete Chance kann einen
          Hinweis auf Diskriminierung am Arbeitsmarkt geben.
        </h5>
      </template>
      <template #button>
        <base-button link mode="gradient" to="#barometer-description"
          >Zum Barometer</base-button
        >
      </template>
      <template #more-content> </template>
    </banner>

    <bg-wrapper>
      <!-- Description -->
      <div class="d-flex" id="barometer-description">
        <div class="my-7 my-md-8 my-lg-9 my-xl-10 my-xxl-10">
          <div class="row row-cols-1 gy-4 left center">
            <div class="col align-self-center px-lg-5 px-xl-5 px-xxl-8">
              <h5 class="headline-slash-big">
                Dieses Modell berechnet die kurzfristige Integrationschance für
                Arbeitssuchende, d.h. die Chance in den ersten sieben Monaten
                für mindestens drei Monate beschäftigt zu sein. Für Jugendliche,
                Migrant*innen und Personen, die nicht durchgängig beschäftigt
                waren gibt es andere Modelle.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <!-- Barometer Form -->
      <div class="d-flex">
        <div class="row gy-2 gx-lg-4 my-5 my-lg-9 my-xl-10 my-xxl-10 m-auto">
          <div class="col-12 col-lg-9">
            <div class="card px-3 px-md-4" id="barometer">
              <ul>
                <form-item
                  v-for="(criterium, key) in criteria"
                  :criterium="criterium"
                  :key="key"
                  :criterium-key="key"
                  :isDisabled="setDisabled(key)"
                  @save-option="storeOption"
                ></form-item>
              </ul>
            </div>
          </div>
          <div
            class="col-12 col-lg-3"
            :class="{
              'sticky-bottom': !screenIsBig,
              'd-flex align-items-stretch': screenIsBig,
            }"
          >
            <div class="card">
              <form-result-bar
                class="form-result-bar"
                :class="[screenIsBig? 'sticky-to' : 'sticky-botto']"
                :result="integrationProspectPercentage.toFixed(2)"
                :vertical="isVertical"
              ></form-result-bar>
            </div>
          </div>
        </div>
      </div>

      <!-- Thought Experiment -->
      <div class="d-flex">
        <div class="my-5 my-lg-9 my-xl-10 my-xxl-10 m-auto">
          <personas />
        </div>
      </div>
    </bg-wrapper>
  </div>
</template>

<script>
import criteria from "@/assets/data/criteria.js";
import FormItem from "../components/form/FormItem.vue";
import FormResultBar from "../components/form/FormResultBar.vue";
import Personas from "../components/form/Personas.vue";

export default {
  components: {
    FormItem,
    FormResultBar,
    Personas,
  },
  data() {
    return {
      criteria: criteria,
      selections: {},
      // isRefreshed: false,
      screenIsBig: false,
    };
  },
  computed: {
    isVertical() {
      if (this.screenIsBig) {
        return true;
      } else {
        return false;
      }
    },
    integrationProspect() {
      let chance = 0.1;
      Object.keys(this.selections).forEach((criterium) => {
        chance += this.selections[criterium].value;
      });
      return chance;
    },
    integrationProspectPercentage() {
      return (
        (Math.exp(this.integrationProspect) /
          (1 + Math.exp(this.integrationProspect))) *
        100
      );
    },
  },
  methods: {
    initializeSelection() {
      //initialize with the base-group (value=0)
      Object.keys(this.criteria).forEach((criterium) => {
        this.selections[criterium] = this.criteria[criterium].options.find(
          (opt) => opt.value === 0
        );
      });
    },
    setDisabled(criteriumKey) {
      if (
        criteriumKey === "betreuung" &&
        this.selections.geschlecht.value === 0
      ) {
        return true;
      }
      let gfKeys = ["gfDauer", "massnahmen"];

      if (
        gfKeys.includes(criteriumKey) &&
        this.selections.gfAnzahl.value === 0
      ) {
        return true;
      }
      return false;
    },
    storeOption(option, criteriumKey) {
      this.selections[criteriumKey] = option;
    },
    handleResize() {
      if (window.innerWidth >= this.$screenWidth.lg) {
        this.screenIsBig = true;
      } else {
        this.screenIsBig = false;
      }
    },
  },
  created() {
    this.initializeSelection();
    //handle the width of the browser window
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.sticky-to {
  position: -webkit-sticky;
  position: sticky;
  top: 4rem;
}
.sticky-botto {
  position: m-webkit-sticky;
  position: sticky;
  bottom:0;
  margin-bottom: 0;
}
.vh-100 {
  height: 2vh;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>