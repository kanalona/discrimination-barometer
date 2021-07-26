<template>
  <div>
    <banner>
      <template #heading>
        <h1 class="nomargin">Das Diskriminierungs-Barometer</h1>
      </template>
      <template #content>
        <p class="nomargin font-big">
          Die hier angezeigte Chance gibt nicht die tatsächlich berechnete
          Chance an, kann aber trotzdem einen Hinweis auf Diskriminierung am
          Arbeitsmarkt geben.
        </p>
      </template>
      <template #button>
        <base-button
          link
          mode="flat"
          primaryColor="#ffffff"
          secondaryColor="#ff7b00"
          to="#barometer"
          >Barometer &rarr;</base-button
        >
      </template>
      <template #more-content>
        <p>
          Für die Berechnung der Integrationschance auf dem Arbeitsmarkt benutzt
          das AMS verschiedene statistische Verfahren und Modelle. Exemplarisch
          wird hier nur eines von vielen Modellen vorgestellt. Dieses Modell
          berechnet die kurzfristige Integrationschance für Arbeitssuchende,
          d.h. die Chance in den ersten sieben Monaten für mindestens 3 Monate
          beschäftigt zu sein. Für Jugendliche, Migrant*innen und Personen, die
          nicht durchgängig beschäftigt waren gibt es andere Modelle.
        </p>
      </template>
    </banner>

    <inner-wrapper class="form-parent-container" id="barometer">
      <div class="item">
        <ul>
          <base-card>
            <form-item
              v-for="(criterium, key) in criteria"
              :criterium="criterium"
              :key="key"
              :criterium-key="key"
              :disabled="disable(key)"
              @attribute-selected="saveAttribute"
            ></form-item>
          </base-card>
        </ul>
      </div>
      <div class="item">
        <personas />
      </div>
    </inner-wrapper>

    <form-result-bar
      :result="integrationChancePercentage.toFixed(2)"
    ></form-result-bar>
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
      isRefreshed: false,
    };
  },
  created() {
    this.initializeSelection();
  },
  computed: {
    integrationChance() {
      let chance = 0.1;
      Object.keys(this.selections).forEach((criterium) => {
        chance += this.selections[criterium].value;
      });
      return chance;
    },
    integrationChancePercentage() {
      const chancePercentage =
        (Math.exp(this.integrationChance) /
          (1 + Math.exp(this.integrationChance))) *
        100;

      return chancePercentage;
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
    disable(key) {
      if (key === "betreuung" && this.selections.geschlecht.value === 0) {
        return true;
      }
      let gfKeys = ["gfDauer", "massnahmen"];

      if (gfKeys.includes(key) && this.selections.gfAnzahl.value === 0) {
        return true;
      }

      return false;
    },
    saveAttribute(option, criteriumKey) {
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