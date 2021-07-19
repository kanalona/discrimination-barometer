<template>
  <div>
    <banner>
      <template #heading>
        <h1 class="nomargin">Gesellschaftliche Bedeutung</h1>
      </template>
      <template #content>
        <p class="nomargin font-big">
          Durch das Diskriminierungs-Barometer wird sichtbar, wie der
          österreichische Arbeitsmarkt aufgrund von persönlichen Merkmalen in
          der Vergangenheit diskriminiert hat. Hier findest du zwei Beispiele zu
          geschlechtsspezifischer Diskriminierung am Arbeitsmarkt.
        </p>
      </template>
      <template #button>
        <base-button
          link
          mode="flat"
          primaryColor="#ffffff"
          secondaryColor="#ff7b00"
          to="#context"
          >&rarr; Zu den Beispielen</base-button
        >
      </template>
    </banner>
    <div id="context">
      <tabs :tabs="subRoutes"></tabs>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
//intersektionalität
import UnpaidWork from "./subpages/UnpaidWork.vue";
import Binary from "./subpages/Binary.vue";
import Tabs from "../components/ui/Tabs.vue";

export default {
  components: {
    UnpaidWork,
    Binary,
    Tabs,
  },
  data() {
    return {
      subRoutes: [
        {
          name: "Zwei Geschlechter?",
          link: "/kontext/zwei-geschlechter",
        },
        {
          name: "Betreuungspflichten",
          link: "/kontext/betreuungspflichten",
        }
      ],
    };
  },
};
</script>
<style scoped>
</style>