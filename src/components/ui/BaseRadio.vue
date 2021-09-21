<template>
  <div>
    <input
      type="radio"
      :name="name"
      :id="id"
      :disabled="disabled"
      :value="value"
      v-model="selectedValue"
    />
    <label :id="labelId" :for="id"> {{ labelText }}</label>
  </div>
</template>

<script>
export default {
  emits: ["selected-value"],
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {},
    modelValue: {
      default: "",
    },
    labelId: {
      type: String,
    },
    labelText: {
      type: String,
      default: "",
      required: true,
    },
    disabled: {
      type: Boolean,
    },
  },
  computed: {
    selectedValue: {
      get() {
        console.log("BASE RADIO: get selected option");
        return this.modelValue;
      },
      set() {
        console.log("BASE RADIO: emitting save");
        this.$emit("selected-option");
      },
    },
  },
  watch: {
    selectedValue: function (newValue) {
      console.log("BASE RADIO: selected prop was changed");
      console.log(this.name + " " + this.selectedValue);
    },
  }

};
</script>

<style scoped>
label {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  height: 100%;
  text-decoration: none;
  font: inherit;
  background-color: #f1f1f1;
  color: #131313;
  border: 2px solid #ccc;
  border-left-style: none;
  cursor: pointer;
  transition: all 0.4s;
}
label:first-of-type{
  border-left-style: solid;
}
input {
  display: none;
}
input:enabled:not(:checked) + label:hover {
  background-color: var(--primaryOpaque);
}
input:checked + label {
  /* border: 2px solid #4c59a8; */
  background: var(--primaryColor);
  border: 2px solid var(--primaryColor);
  color: #fff;
}
input:disabled + label {
  opacity: 0.4;
  cursor: default;
}
</style>