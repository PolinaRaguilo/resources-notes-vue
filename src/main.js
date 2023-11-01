import { createApp } from 'vue';
import App from './App.vue';
import Card from './components/UI/Card.vue';
import Button from './components/UI/Button.vue';
import Modal from './components/UI/Modal.vue';

createApp(App)
  .component('Card', Card)
  .component('Button', Button)
  .component('Modal', Modal)
  .mount('#app');
