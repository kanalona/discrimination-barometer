<template>
  <div class="background-wrapper">
    <div class="background-child">
      <inner-wrapper>
        <h1 class="left">{{ "Betreuungspflichten".toUpperCase() }}</h1>
        <div class="unequal-work left">
          <div class="summary1">
            <p class="font-big nomargin">
              Das Diskriminierungs-Barometer zeigt was am Arbeitsmarkt Realität
              ist: Frauen mit Kindern haben schlechtere Chancen - Männer mit
              Kindern nicht.
            </p>
          </div>
          <div class="text1">
            <p class="nomargin">
              Frauen wird nicht nur eine schlechtere Chance aufgrund ihres
              Geschlechts berechnet, darüber hinaus bekommen sie auch Abzüge,
              falls sie Betreuungspflichten haben. Hier wird sichtbar, was auf
              dem Arbeitsmarkt Realität ist: Wenn Frauen Kinder bekommen, hat
              das einen negativen Einfluss auf ihre Chancen auf dem
              Arbeitsmarkt, wenn Männer Kinder bekommen nicht.
            </p>
          </div>
          <div class="summary2">
            <p class="font-big nomargin">
              Wenn Menschen Kinder bekommen fallen sie oft in alte Muster
              zurück: Frauen übernehmen mehr Sorge - Männer sind mehr
              erwerbstätig.
            </p>
          </div>
          <div class="text2">
            <p class="nomargin">
              Unter Alleinlebenden und Paaren ohne Kinder sind Erwerbsarbeit und
              unbezahlte Arbeit zwischen Männern und Frauen mehr oder weniger
              ausgeglichen. Wenn Menschen Kinder bekommen, muss Zeit her um die
              Sorge zu übernehmen. Hier fallen Menschen oft in alte Zeitmuster
              zurück, da es einfacher ist ein gesellschaftliches Modell zu
              übernehmen. Viel schwieriger ist es ein eigenes Modell zu
              entwickeln, da die Gesellschaft auf das alte Modell abgestimmt ist
              und dieses bereits funktioniert.
            </p>
          </div>
          <div class="figure">
            <base-card>
              <stacked-bar-chart></stacked-bar-chart>
            </base-card>
          </div>
          <div class="summary3">
            <div class="highlighted-container">
              <p class="highlighted-text">
                Man kann hier also nicht nur von einem Gender Gap sprechen,
                sondern auch vor allem von einem Mother Gap. Dass Frauen die
                meiste unbezahlte Arbeit übernehmen hat zur Folge, dass Frauen
                weniger erwerbstätig sind, beziehungsweise in Teilzeit oder
                flexibel arbeiten und weniger verdienen.<sup class="font-small"
                  >1</sup
                >
                Diese Faktoren tragen dazu bei, dass Frauen schlechtere Chancen
                auf dem Arbeitsmarkt haben.
              </p>
              <div class="footnote">
                <p>
                  <sup>1</sup> Kleven, H.; Landais, C.; Søgaard, J. (2019):
                  Children and Gender Inequality: Evidence from Denmark,
                  American Economic Jourcal: Applied Economics, 11(4): 181-209
                </p>
              </div>
            </div>
          </div>
        </div>
      </inner-wrapper>
    </div>
    <div class="background-child">
      <inner-wrapper>
        <div class="matrix-of-domination left">
          <div class="summary1">
            <p class="font-big nomargin">
              Unterschiedliche Ebenen tragen dazu bei das gesellschaftlich
              <em>dominante Modell</em>
              "Frauen leisten mehr unbezahlte Arbeit und Männer mehr bezahlte
              Arbeit" zu erhalten.
            </p>
          </div>
          <div class="text1">
            <p class="nomargin">
              Zum Beispiel können gesetzliche Regelungen zur Elternzeit
              beeinflussen, wer sich wie lange Zeit für Kinderbetreuung nimmt
              <em><strong>(strukturelle Ebene)</strong></em
              >. Eine weitere Rolle spielt zum Beispiel auch das Arbeitsmarkt
              Service (AMS), welches mit Hilfe des AMS-Algortihmus reguliert,
              dass Frauen mit Betreuungspflichten weiterhin diskriminiert werden
              <em><strong>(disziplinäre Ebene)</strong></em
              >. Aber auch kulturelle Vorstellungen darüber wer für die
              Kinderbetreuung zuständig sein sollte haben Einfluss auf die
              Erhaltung dieses dominanten Modells - z.B. „Ich möchte gerne mehr
              Zeit mit meinen Kindern verbringen.“
              <em><strong>(hegemoniale Ebene)</strong></em
              >. Ebenso spielen individuelle Erfahrungen mit beispielweise
              Vorwürfen eine Rolle - z.B. „Wie kannst du deine Interessen deinen
              Kindern vorziehen?“
              <em><strong>(zwischenmenschliche Ebene)</strong></em
              >.
            </p>
            <p>
              Diese verschiedenen Ebenen sind entscheidend für die Frage wie
              Kinderbetreuung in der Gesellschaft organisiert wird. Diese
              unterschiedlichen Ebenen von Unterdrückung werden auch MATRIX OF
              DOMINATION genannt.
            </p>
          </div>
          <div class="figure">
            <matrix-of-domination></matrix-of-domination>
          </div>
        </div>
      </inner-wrapper>
    </div>
    <div class="background-child">
      <inner-wrapper> <donut-chart></donut-chart> </inner-wrapper>
    </div>
    <div class="background-child">
      <next-prev
        :previous="true"
        text="(Beispiel Zweigeschlechtlichkeit)"
        :link="'/kontext/zwei-geschlechter#context'"
      ></next-prev>
    </div>
  </div>
</template>

<script>
import StackedBarChart from "../../components/gender/StackedBarChart.vue";
import MatrixOfDomination from "../../components/gender/MatrixOfDomination.vue";
import DonutChart from "../../components/gender/DonutChart.vue";
export default {
  components: {
    StackedBarChart,
    MatrixOfDomination,
    DonutChart,
  },
};
</script>


<style scoped>
.unequal-work {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "summary1 text1"
    "summary2 text2"
    "figure figure"
    "summary3 summary3";
}
.matrix-of-domination {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "summary1 ."
    "text1 figure ";
}
.summary1 {
  grid-area: summary1;
}
.summary2 {
  grid-area: summary2;
}
.summary3 {
  grid-area: summary3;
}
.text1 {
  grid-area: text1;
}
.text2 {
  grid-area: text2;
}
.figure {
  grid-area: figure;
}
.centered {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (max-width: 800px) {
  .unequal-work {
    grid-template-areas:
      "summary1 summary1"
      "text1 text1"
      "summary2 summary2"
      "text2 text2"
      "figure figure"
      "summary3 summary3";
  }
  .matrix-of-domination {
    grid-template-areas:
      "summary1 summary1"
      "text1 text1"
      "figure figure";
  }
  .highlighted-container {
    margin: 0 !important;
  }
}
.highlighted-text {
  font-size: 1.7rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.8;
}
.highlighted-container {
  margin: 2rem 5rem;
  text-align: center;
}
strong {
  font-weight: 400;
}
</style>