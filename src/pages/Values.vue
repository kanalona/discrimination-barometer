<template>
  <div class="values">
    <banner>
      <template #heading>
        <h1 class="nomargin">Daten und Berechnung</h1>
      </template>
      <template #content>
        <p class="nomargin font-big">
          In den Pluspunkten und Abzügen, die eine Person für bestimmte Merkmale
          bekommt, wird die mehrfache Diskriminierung sichtbar. Die
          untenstehenden Grafiken zeigen für welche Merkmale es Plus- und
          Minus-Prozente gibt.
        </p>
      </template>
      <template #button>
        <base-button
          link
          mode="flat"
          primaryColor="white"
          secondaryColor="royalblue"
          to="#barcharts"
          >Zu den Grafiken &rarr;</base-button
        >
      </template>
      <template #more-content>
        <p>
          Für die Berechnung der Chancen auf dem Arbeitsmarkt werden zwei
          verschiedene Arten von Daten benutzt: Persönliche Merkmale und
          Merkmale zur Vorkarriere, diese enthalten den Erwerbsverlauf und
          vergangene AMS-Betreuungen. Außerdem gibt es für die Berechnung noch
          eine sogenannte Basisgruppe. Diese ist unteranderem männlich, unter 30
          Jahre, Österreicher, hat höchstens einen Pflichtschulabschluss, keine
          Betreuungspflichten und keine Beeinträchtigung(en). Die Basisgruppe
          bekommt eine Chance von ca. 52% berechnet. Für jede Abweichung von
          dieser Basisgruppe werden entweder Prozente abgezogen oder
          dazugerechnet.
        </p>
        <p>
          Beispiel: Eine Person entspricht der Basisgruppe, bis auf den
          Unterschied, dass diese Person das Geschlecht 'weiblich' hat: Von 52%
          werden 3.48% abgezogen. Ist diese Person auch noch über 50, bekommt
          sie weitere 17.06% abgezogen.
        </p>
      </template>
    </banner>

    <!-- <bar-chart-d3 :data="[10, 30, 15, 40, 5]" />
        <bar-chart-d3 :data="[5, 8, 10, 20, 40]" /> -->

    <div class="outer-padding">
      <inner-wrapper id="barcharts">
        <bar-chart
          :title="'Persönliche Merkmale'"
          :keySelection="personalKeys"
          :showViewToggle="true"
        />
        <bar-chart
          :title="'Merkmale zur Vorkarriere'"
          :keySelection="careerKeys"
          :showViewToggle="true"
        />
      </inner-wrapper>
    </div>
  </div>
</template>

<script>
import BarChart from "../components/chart/BarChart.vue";
// import BarChartD3 from "../components/chart/BarChartD3.vue";

export default {
  components: {
    BarChart,
    // BarChartD3,
  },
  data() {
    return {
      personalKeys: [
        "geschlecht",
        "betreuung",
        "alter",
        "staat",
        "gesundheit",
        "ausbildung",
      ],
      careerKeys: [
        "wohnort",
        "beruf",
        "beschaeftigung",
        "gfAnzahl",
        "gfDauer",
        "massnahmen",
      ],
    };
  },
};
</script>

<style scoped>
.outer-padding {
  padding: 3rem;
}
</style>