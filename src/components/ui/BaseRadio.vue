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
    <label :id="labelId" :for="id"
      ><span></span>
      <div class="ps-2">{{ labelText }}</div></label
    >
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
  },
};
</script>

<style scoped>
input {
  display: none;
}
input:checked ~ label {
  background-color: var(--primaryColor);
  color: #fff;
}
input:enabled:not(:checked) ~ label:hover {
  border-color: var(--primaryColor);
  background-color: rgba(var(--primaryColor-rgb), 0.1);
}
input:checked ~ label > span {
  /* border: 1px solid #e6e3e3; */
  border: 1px solid #fff;
  background: var(--primaryColor);
  animation: radio 400ms cubic-bezier(0.17, 0.89, 0.32, 1.49);
}
input:checked ~ label > span:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  /* background-color: #e6e3e3; */
}
input:disabled + label {
  opacity: 0.4;
  cursor: default;
}

label {
  display: flex;
  flex-direction: row;
  padding: 0.375rem 0.75rem;
  height: 100%;
  cursor: pointer;
  position: relative;
  align-items: center;
  border-radius: 30px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: all 300ms ease-in;
  border-color: var(--primaryColor);
  color: var(--primaryColor);
}
label:before,
label:after {
  position: absolute;
  left: 29px;
  border-radius: 50%;
  content: "";
}
label > span {
  position: relative;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--primaryColor);
  background: #fff;
}

.option:not(:last-child) {
  margin-bottom: 4px;
}

@keyframes radio {
  0%,
  17.5% {
    transform: scale(0);
  }
}
</style>