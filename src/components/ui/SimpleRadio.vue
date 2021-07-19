<template>
  <div class="container">
    <label>
      <input
        type="radio"
        :name="name"
        :id="id"
        :disabled="disabled"
        :value="value"
        v-model="selectedValue"
      />
      <span>
        {{ labelText }}
      </span>
    </label>
    <!-- <label :id="labelId" :for="id"> {{ labelText }}</label> -->
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
  padding: 0.5rem;
  margin-right: 1rem;
  height: 100%;
  text-decoration: none;
  font: inherit;
  color: #131313;
  cursor: pointer;
  transition: all 0.4s;
}

label:hover {
  background-color: #f1f1f1;
  border-radius: 99em;
}

input {
  cursor: pointer;
}

input:disabled + label {
  opacity: 0.4;
  cursor: default;
}
</style>