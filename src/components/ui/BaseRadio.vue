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
  /* background-color: var(--bg); */
}

input:enabled:not(:checked) ~ label:hover {
  border-color: var(--primaryColor);
  background-color: rgba(var(--primaryColor-rgb), 0.25);
  /* background-color: var(--bg); */
}
input:checked ~ label > span {
  /* border: 0; */
  /* border: 2px solid var(--white); */
  border: 2px solid #e6e3e3;

  /* background-image: linear-gradient(
    to top right,
    rgba(var(--primaryColor-rgb), 0.08),
    var(--primaryColor)
  ); */
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
  /* background-color: #fff; */
  background-color: #e6e3e3;
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
  border: 2px solid transparent;
  background-color: transparent;
  transition: all 300ms ease-in;
  border-color: var(--primaryColor);
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
  /* display: inline-flex; */
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid var(--primaryColor);
  background: #fff;
  /* background: #e6e3e3; */
  /* background-image: linear-gradient(to bottom, #f1f1f1, #e2e2e2); */
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