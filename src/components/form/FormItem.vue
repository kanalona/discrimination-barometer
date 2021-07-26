<template>
  <li>
    <h4>{{ criterium.label }}</h4>
    <div class="description" v-if="hasDescription(criterium)">
      <img
        src="../../assets/icon-info-50.png"
        alt="icon for information"
        class="icon clickable"
        @click="toggleDescription"
      />
      <p v-show="showDescription">
        {{ criterium.description }}
      </p>
    </div>
    <div class="btn-container" v-tippy="toolTip">
      <div v-for="(option, key) in criterium.options" :key="key">
        <base-radio
          :class="criteriumKey + key + '__radio'"
          :name="criteriumKey"
          :id="criteriumKey + key"
          :value="option.value"
          :modelValue="selectedOption"
          @change="changeOption"
          @save="saveOption(option, criteriumKey)"
          :disabled="disable(option)"
          :labelText="option.text"
          v-tippy="toolTipDivers"
        >
        </base-radio>
      </div>
    </div>
    <img
      v-show="showDescription && criteriumKey === 'wohnort'"
      src="../../assets/RGS-Karte-transparent.png"
      alt="Karte von Österreich über das regionale Arbeitsmarktgeschehen im Jahr 2017."
      class="map"
    />
  </li>
</template>

<script>
import "tippy.js/animations/shift-away.css";
import { directive } from "vue-tippy";

export default {
  emits: ["attribute-selected", "refreshed"],
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
    disabled: {
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
    if (this.hasTooltip && this.disabled) {
      this.setUpTippy();
    } else if (this.criterium) { //this.criterium löschen?
      this.setUpTippyDivers();
    }
  },
  watch: {
    disabled: function (newValue) {
      if (newValue === true) {
        this.setUpTippy();
        // reset chosen option to default if input is disabled
        let option = this.criterium.options.find((opt) => opt.value === 0);
        this.selectedOption = option.value;
        this.$emit("attribute-selected", option, this.criteriumKey);
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
      if (this.criteriumKey === "gfDauer") {
        return "Deaktiviert: Sie haben ausgewählt, dass kein Geschäftsfall in den letzten vier Jahren vorlag";
      }
      if (this.criteriumKey === "massnahmen") {
        return "Deaktiviert: Sie haben ausgewählt, dass kein Geschäftsfall in den letzten vier Jahren vorlag";
      }
      return "";
    },
  },
  methods: {
    hasDescription(criterium) {
      //don't show description for betreuung because it is already shown in tooltip
      return (criterium.description != null) && (criterium.label != "Betreuungspflichten");
    },
    toggleDescription() {
      this.showDescription = !this.showDescription;
    },
    saveOption(option, criteriumKey) {
      this.$emit("attribute-selected", option, criteriumKey);
    },
    changeOption(selected) {
      this.selectedOption = selected;
    },
    disable(option) {
      if (option.text === "divers / inter / offen / kein Eintrag") {
        return true;
      } else {
        return this.disabled;
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
.btn-container {
  display: inline-flex;
  justify-content: flex-start;
  align-items: stretch;
  overflow: hidden;
  margin: 0 0 1.5rem 0;
}
.description {
  margin: 10px auto;
  padding: 5px;
}
.description p {
  font-size: 0.8rem;
  color: rgb(139, 139, 139);
}
.map {
  display: block;
  width: 100%;
  height:auto;
  /* max-width: 1000px; */
}
</style>