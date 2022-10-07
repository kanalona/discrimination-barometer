<template>
  <div>
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
        <base-button
          link
          mode="outline"
          primaryColor="white"
          secondaryColor="royalblue"
          to="#barometer"
          >Zum Barometer &rarr;</base-button
        >
      </template>
      <template #more-content> </template>
    </banner>

    <p>
      Dieses Modell berechnet die kurzfristige Integrationschance für
      Arbeitssuchende, d.h. die Chance in den ersten sieben Monaten für
      mindestens drei Monate beschäftigt zu sein. Für Jugendliche, Migrant*innen
      und Personen, die nicht durchgängig beschäftigt waren gibt es andere
      Modelle.
    </p>

    <inner-wrapper class="form-parent-container" id="barometer">
      <div class="item">
        <ul>
          <base-card>
            <form-item
              v-for="(criterium, key) in criteria"
              :criterium="criterium"
              :key="key"
              :criterium-key="key"
              :isDisabled="setDisabled(key)"
              @save-option="storeOption"
            ></form-item>
          </base-card>
        </ul>
      </div>
      <div class="item">
        <personas />
      </div>
    </inner-wrapper>

    <!-- <form-result-bar
      :result="integrationProspectPercentage.toFixed(2)"
    ></form-result-bar> -->
  </div>
</template>

<script>
import criteria from "@/assets/data/criteria.js";
import FormItem from "../components/form/FormItem.vue";
// import FormResultBar from "../components/form/FormResultBar.vue";
import Personas from "../components/form/Personas.vue";

export default {
  components: {
    FormItem,
    // FormResultBar,
    Personas,
  },
  data() {
    return {
      criteria: criteria,
      selections: {},
      // isRefreshed: false,
    };
  },
  created() {
    this.initializeSelection();
  },
  computed: {
    integrationProspect() {
      console.log("FORM: calculate integration");
      let chance = 0.1;
      Object.keys(this.selections).forEach((criterium) => {
        chance += this.selections[criterium].value;
      });
      return chance;
    },
    integrationProspectPercentage() {
      console.log("FORM: calculate integrationPercent");
      return (
        (Math.exp(this.integrationProspect) /
          (1 + Math.exp(this.integrationProspect))) *
        100
      );
    },
  },
  methods: {
    initializeSelection() {
      console.log("initialize");
      //initialize with the base-group (value=0)
      Object.keys(this.criteria).forEach((criterium) => {
        this.selections[criterium] = this.criteria[criterium].options.find(
          (opt) => opt.value === 0
        );
      });
    },
    setDisabled(criteriumKey) {
      console.log("setDisable: " + criteriumKey);
      if (
        criteriumKey === "betreuung" &&
        this.selections.geschlecht.value === 0
      ) {
        console.log("true");
        return true;
      }
      let gfKeys = ["gfDauer", "massnahmen"];

      if (
        gfKeys.includes(criteriumKey) &&
        this.selections.gfAnzahl.value === 0
      ) {
        console.log("true");
        return true;
      }
      console.log("false");
      return false;
    },
    storeOption(option, criteriumKey) {
      console.log("FORM: storing in selections");
      this.selections[criteriumKey] = option;
    },
  },
};
</script>

<style scoped>
.form-parent-container {
  display: grid;
  grid-gap: 30px;
  padding: 3rem 0 10rem 0;
  /* bottom padding fo sticky result bar */
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>