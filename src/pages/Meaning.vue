<template>
  <div>
    <banner>
      <template #heading>
        <h1 class="nomargin">Gesellschaftliche Bedeutung</h1>
      </template>
      <template #text>
        <p class="nomargin font-big">
          Durch das Diskriminierungs-Barometer wird sichtbar, wie der
          österreichische Arbeitsmarkt aufgrund von persönlichen Merkmalen in
          der Vergangenheit diskriminiert hat. Hier findest du zwei Beispiele zu
          geschlechtsspezifischer Diskriminierung am Arbeitsmarkt.
        </p>
      </template>
      <template #button>
        <base-button
          tab
          link
          mode="contained"
          to="/kontext/zwei-geschlechter#context"
          >Zweigeschlechtlichkeit &rarr;</base-button
        >
        <base-button
          tab
          link
          mode="contained"
          to="/kontext/betreuungspflichten#context"
          >Betreuungspflichten &rarr;</base-button
        >
      </template>
    </banner>
    <div id="context">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>

export default {
 
  data() {
    return {
      tabLinks: [
        {
          name: "Zwei Geschlechter?",
          link: "/kontext/zwei-geschlechter#context",
        },
        {
          name: "Betreuungspflichten",
          link: "/kontext/betreuungspflichten#context",
        }
      ],
    };
  },
};
</script>
<style scoped>
</style>