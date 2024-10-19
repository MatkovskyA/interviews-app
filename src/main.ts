import './assets/main.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { initializeApp } from "firebase/app";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import App from './App.vue'
import router from './router'

//данные нашего проекта firebase
const firebaseConfig = {
  apiKey: "AIzaSyAirRE0o_-2E3bxQwJT3Lt3m0UNCU2caa4",
  authDomain: "interiews.firebaseapp.com",
  projectId: "interiews",
  storageBucket: "interiews.appspot.com",
  messagingSenderId: "230275058529",
  appId: "1:230275058529:web:4d60276a52980623ec5320"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false
    }
  }
});
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.mount('#app')
