import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC8UVqd4v1oZqa6OXfCZTarikGC7tzsN6U",
  authDomain: "mangasam-f4730.firebaseapp.com",
  projectId: "mangasam-f4730",
  storageBucket: "mangasam-f4730.appspot.com",
  messagingSenderId: "322829924571",
  appId: "1:322829924571:web:2276dfb1feb8cf5254b4fe",
  measurementId: "G-GVPF6TCS0E"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

loadFonts()
const pinia = createPinia()
createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount('#app')
