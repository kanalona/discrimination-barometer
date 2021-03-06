import { createApp } from 'vue';
import router from './router.js';

import VueTippy from 'vue-tippy'

import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseRadio from './components/ui/BaseRadio.vue';
import SimpleRadio from './components/ui/SimpleRadio.vue';
import Banner from './components/ui/Banner.vue'
import InnerWrapper from './components/ui/InnerWrapper.vue'
import Steps from './components/ui/Steps.vue'
import NextPrev from './components/ui/NextPrev.vue'
import Tabs from './components/ui/Tabs.vue'


import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(
    VueTippy,
    {
        directive: 'tippy', // => v-tippy
        component: 'tippy', // => <tippy/>
        componentSingleton: 'tippy-singleton', // => <tippy-singleton/>
    }
);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-radio', BaseRadio);
app.component('simple-radio', SimpleRadio);
app.component('banner', Banner);
app.component('inner-wrapper', InnerWrapper);
app.component('steps', Steps);
app.component('next-prev', NextPrev);
app.component('tabs', Tabs);


app.mount('#app');