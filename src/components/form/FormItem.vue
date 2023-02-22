<template>
  <li class="py-3 py-md-4">
    <h5 class="primaryColor no-margin ps-1 pb-3">
      {{ criterium.label }}
    </h5>
    <div class="description" v-if="hasDescription(criterium)">
      <img
        src="../../assets/icon-info-50.png"
        alt="icon for information"
        class="icon clickable"
        @click="toggleDescription"
      />
      <p v-show="showDescription" class="font-small darkgrey">
        {{ criterium.description }}
      </p>
    </div>

    <radio-btn-wrapper v-tippy="toolTip">
      <div v-for="(option, key) in criterium.options" :key="key">
        <base-radio
          :class="criteriumKey + key + '__radio'"
          :name="criteriumKey"
          :id="criteriumKey + key"
          :value="option.value"
          :modelValue="selectedOption"
          @selected-option="saveOption(option, criteriumKey)"
          :disabled="disable(option)"
          :labelText="option.text"
          v-tippy="toolTipDivers"
        >
        </base-radio>
      </div>
    </radio-btn-wrapper>

    <div class="map" v-if="showDescription && criteriumKey === 'wohnort'">
      <img
        src="../../assets/RGS-Karte.png"
        alt="Karte von Österreich über das regionale Arbeitsmarktgeschehen im Jahr 2017."
      />
      <div class="footnote">
        <p>Regionale Arbeitsmarktbedingungen, Basisjahr 2017</p>
        <p>
          Quelle: Judit Marte-Huainigg (2020): Arbeitsmarktchancen
          Assistenz-System. Hintergründe, Strategie, Modell.
          <a
            href="https://slidetodoc.com/arbeitsmarktchancen-assistenzsystem-hintergrnde-strategie-modell-judit-martehuainigg-vor/"
            >online verfügbar</a
          >
        </p>
      </div>
    </div>
  </li>
</template>

<script>
import "tippy.js/animations/shift-away.css";
import { directive } from "vue-tippy";

export default {
  emits: ["save-option"],
  directives: {
    tippy: directive,
  },
  props: {
    criterium: {
      type: Object,
      default: () => {},
    },
    criteriumKey: {
      type: String,
      default: "",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    reset: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedOption: 0,
      toolTip: null,
      toolTipDivers: null,
      showDescription: false,
      selectedDescription: null,
    };
  },
  mounted() {
    if (this.hasTooltip && this.isDisabled) {
      this.setUpTippy();
    } else if (this.criterium) {
      //this.criterium löschen?
      this.setUpTippyDivers();
    }
  },
  watch: {
    isDisabled: function (newValue) {
      console.log("FORM ITEM: prop isDisabled changed");
      if (newValue === true) {
        this.setUpTippy();
        // reset chosen option to default if input is isDisabled
        let option = this.criterium.options.find((opt) => opt.value === 0);
        this.selectedOption = option.value;
        console.log("FORM ITEM: emits save from isDisabled-watcher");
        this.$emit("save-option", option, this.criteriumKey);
      } else {
        this.disableTippy();
      }
    },
  },
  computed: {
    hasTooltip() {
      return ["betreuung", "gfDauer", "massnahmen"].includes(this.criteriumKey);
    },
    tooltipContent() {
      if (this.criteriumKey === "betreuung") {
        return "Deaktiviert: Betreuungspflichten haben nur bei Frauen Auswirkungen auf ihre Chancen";
      }
      if (this.criteriumKey === "gfDauer" | this.criteriumKey === "massnahmen") {
        return "Deaktiviert: Sie haben ausgewählt, dass Sie in den letzten vier Jahren nicht vom AMS betreut wurden.";
      }
      return "";
    },
  },
  methods: {
    hasDescription(criterium) {
      //don't show description for betreuung because it is already shown in tooltip
      return (
        criterium.description != null &&
        criterium.label != "Betreuungspflichten"
      );
    },
    toggleDescription() {
      this.showDescription = !this.showDescription;
    },
    saveOption(option, criteriumKey) {
      console.log("FORM ITEM: calling saveOption");
      console.log("FORM ITEM: emitting save");
      console.log("wmitted option: ");
      console.log(option.value);
      this.setOption(option.value);
      this.$emit("save-option", option, criteriumKey);
    },
    setOption(option) {
      console.log("prop selectedOption" + option);
      this.selectedOption = option;
    },
    disable(option) {
      if (option.text === "divers / inter / offen / kein Eintrag") {
        return true;
      } else {
        return this.isDisabled;
      }
    },
    setUpTippy() {
      this.toolTip = {
        content: this.tooltipContent,
        placement: "top-start",
        animation: "shift-away",
        duration: 200,
        theme: "gray-white",
      };
    },
    setUpTippyDivers() {
      this.toolTipDivers = {
        content: (reference) => {
          if (reference.getAttribute("class") === "geschlecht2__radio") {
            return "Deaktiviert: Die Angabe eines dritten Geschlechts ist nicht möglich.";
          }
        },
        animation: "shift-away",
        duration: 200,
        theme: "gray-white",
      };
    },
    disableTippy() {
      this.toolTip = {
        content: "",
      };
    },
  },
};
</script>

<style scoped>
li {
  text-align: left;
}
li:not(:last-of-type) {
  border-bottom: 1px solid rgba(204, 204, 204, 0.555);
}
/* .btn-container {
  display: inline-flex;
  justify-content: flex-start;
  align-items: stretch;
  overflow: hidden;
  margin: 0 0 1.5rem 0;
} */
.description {
  margin: 10px auto;
  padding: 5px;
}
.map {
  margin: 20px 0;
}
.map > img {
  display: block;
  width: 100%;
  height: auto;
}
</style>