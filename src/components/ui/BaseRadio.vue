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
  emits: ["change", "save"],
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
        return this.modelValue;
      },
      set() {
        this.$emit("change", this.value);
        this.$emit("save");
      },
    },
  },
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
  background-color: rgb(255, 123, 0, 0.2);
  /* border: rgb(68, 176, 236); */
}
input:checked + label {
  /* border: 2px solid #4c59a8; */
  background: #ff7b00;
  border: 2px solid #ff7b00;
  color: #fff;
}
input:disabled + label {
  opacity: 0.4;
  cursor: default;
}
</style>