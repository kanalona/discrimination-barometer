<template>
  <div class="parent-grid">
    <div class="unpaid-volume">
      <div class="heading1">
        <p class="left font-big nomargin">
          Unbezahlte Arbeit macht nicht nur einen großen Anteil der gesamten
          Arbeit aus (57%) sondern hat auch einen enormen Wert für die
          Gesellschaft.
        </p>
      </div>
      <div class="text1">
        <p class="justify nomargin">
          Kochen, Waschen, sich sorgen, betreuen, etc. sind überhaupt erst die
          Voraussetzung dafür, dass wir leben, funktionieren und auch arbeiten
          können. Eine Gesellschaft ohne diese sogenannte „Care-Arbeit“ würde
          gar nicht funktionieren und hat somit einen enormen Wert – auch
          wirtschaftlich. Unbezahlte Arbeit erfährt allerdings eine geringere
          Wertschätzung, weil diese nun mal unentgeltlich gemacht wird.
        </p>
      </div>
      <div class="figure1">
        <base-card>
          <div class="one-donut">
            <div class="heading1 centered border-right">
              <p class="font-big nomargin">
                Jahresvolumen von bezahlter und unbezahlter Arbeit
              </p>
            </div>
            <div class="figure1 centered">
              <donut-chart-canvas
                :svgHeight="400"
                :svgWidth="600"
                :data="unpaidvalueData.annualVolume.data"
                :staticLabel="unpaidvalueData.annualVolume.label"
                :colors="['#feaf0a', '#5F37D1']"
                :hasLegend="true"
              ></donut-chart-canvas>

              <div class="footnote-marker">
                <a href="#source-1">Quelle: 2</a>
              </div>
            </div>
          </div>
        </base-card>
      </div>
    </div>

    <base-card>
      <div class="unpaid-worth">
        <div class="heading1">
          <h1 class="nomargin">
            WENN UNBEZAHLTE ARBEIT BEZAHLT WÄRE ENTSPRÄCHE DAS ...
          </h1>
        </div>
        <div class="text1 centered">
          <div class="infobox-grid-container border">
            <img
              src="../../assets/icon-info-50.png"
              alt="icon for information"
              class="icon"
            />
            <p class="font-small italic justify">
              Um den wirtschaftlichen Wert unbezahlter Arbeit zu schätzen, wird
              ein fiktiver Nettostundenlohn von 9.25€ herangezogen. Dieser
              Nettolohn enthält keine Urlaubs-, Krankheits- oder Feiertage. Die
              hier berechnete Bruttowertschöpfung stellt also eine Untergrenze
              für den Wert unbezahlter Arbeit dar.
              <sup><a href="#source-1">2</a></sup>
            </p>
          </div>
        </div>
        <div class="figure1">
          <div class="three-donuts">
            <div class="heading1">
              <h4 class="nomargin">
                … einer Bruttowertschöpfung von 987 Mrd. €.
              </h4>
            </div>
            <div class="figure1">
              <donut-chart-canvas
                :svgHeight="520"
                :svgWidth="600"
                :data="unpaidvalueData.unpaid.data"
                :staticLabel="unpaidvalueData.unpaid.label"
                :colors="['#feaf0a']"
              ></donut-chart-canvas>
            </div>
            <div class="source1 footnote-marker">
              <a href="#source-1">Quelle: 2</a>
            </div>

            <div class="heading2">
              <h4 class="nomargin">… 40% der gesamten Bruttowertschöpfung.</h4>
            </div>
            <div class="figure2">
              <donut-chart-canvas
                :svgHeight="520"
                :svgWidth="600"
                :data="unpaidvalueData.percent.data"
                :staticLabel="unpaidvalueData.percent.label"
                :colors="['#feaf0a', 'rgba(200, 200, 200, 0.2)']"
              ></donut-chart-canvas>
            </div>
            <div class="source2 footnote-marker">
              <a href="#source-1">Quelle: 2</a> und <a href="#source-2">3</a>
            </div>

            <div class="heading3">
              <h4 class="nomargin">
                … der Bruttowertschöpfung der Bereiche Industrie, sowie Handel,
                Verkehr und Gastgewerbe.
              </h4>
            </div>
            <div class="figure3">
              <donut-chart-canvas
                :svgHeight="520"
                :svgWidth="600"
                :data="unpaidvalueData.sectors.data"
                :staticLabel="unpaidvalueData.sectors.label"
                :colors="['#43457f', '#685489']"
              ></donut-chart-canvas>
            </div>
            <div class="source3 footnote-marker">
              <a href="#source-2">Quelle: 3</a>
            </div>
            <div class="sources centered">
              <div class="footnote left">
                <p id="source-1">
                  <sup>2</sup> Schwarz, N. (2017): Der Wert der unbezahlten
                  Arbeit: Das Satelittensystem Haushaltsproduktion, in:
                  Statistisches Bundesamt (2017): Wie die Zeit vergeht
                </p>
                <p id="source-2">
                  <sup>3</sup> Statistische Bundesamt (2014):
                  Volkswirtschaftliche Gesamtrechnung.
                  Inlandsproduktsberechnung, Vierteljahresergebnisse, 4.
                  Vierteljahr 2013, Wiesbaden
                </p>
                <p>Erhebungsort und -zeitpunkt: Deutschland, 2013</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </base-card>
  </div>
</template>

<script>
import unpaidvalue from "@/assets/data/unpaidvalue.js";
import DonutChartCanvas from "./DonutChartCanvas.vue";
export default {
  components: {
    DonutChartCanvas,
  },
  data() {
    return {
      unpaidvalueData: unpaidvalue,
    };
  },
  computed: {
    keys() {
      return Object.keys(this.unpaidvalueData);
    },
  },
  mouted() {
    console.log(this.keys);
  },
};
</script>

<style scoped>
.parent-grid {
  display: grid;
  grid-gap: 30px;
}
.unpaid-volume {
  display: grid;
  grid-gap: 30px;
  grid-template-areas:
    "heading1 text1 "
    "figure1   figure1";
}
.unpaid-worth {
  display: grid;
  grid-gap: 30px;
  grid-template-areas:
    "heading1 text1"
    "figure1 figure1";
}
.three-donuts {
  display: grid;
  grid-auto-flow: column;
  grid-template-areas:
    "heading1 heading2 heading3"
    "figure1   figure2   figure3"
    "source1  source2  source3"
    "sources  sources  sources";
  padding: 20px;
}
.one-donut {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: " heading1 figure1";
  padding: 20px;
}

.heading1 {
  grid-area: heading1;
}
.heading2 {
  grid-area: heading2;
}
.heading3 {
  grid-area: heading3;
}
.figure1 {
  grid-area: figure1;
}
.figure2 {
  grid-area: figure2;
}
.figure3 {
  grid-area: figure3;
}
.source1 {
  grid-area: source1;
}
.source2 {
  grid-area: source2;
}
.source3 {
  grid-area: source3;
}
.sources {
  grid-area: sources;
  margin-top: 30px;
}
.text1 {
  grid-area: text1;
}
.info {
  grid-area: info;
}

@media (max-width: 800px) {
  .three-donuts {
    grid-template-areas:
      "heading1"
      "figure1"
      "source1"
      "heading2"
      "figure2"
      "source2"
      "heading3"
      "figure3"
      "source3"
      "sources";
  }
  .one-donut {
    grid-template-columns: 1fr 2fr;
  }
  .unpaid-volume,
  .unpaid-worth {
    grid-template-areas:
      "heading1"
      "text1"
      "figure1";
  }
}
.infobox-grid-container {
  display: grid;
  grid-template-columns: auto 1fr;
}
.border {
  border: 1px solid #ccc;
  padding: 0 20px;
}
.border-right {
  border-right: 1px solid #ccc;
  padding-right: 20px;
}
img {
  margin: 20px 10px 20px 0;
}
.footnote {
  margin-top: 10px;
  align-self: center;
}
</style>