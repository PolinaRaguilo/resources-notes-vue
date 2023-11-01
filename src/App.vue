<template>
  <Header title="Remember Me" />
  <Resources />
</template>

<script>
import Resources from './components/learning-resources/Resources.vue';
import Header from './components/layouts/Header.vue';

export default {
  components: { Header, Resources },
  data() {
    return {};
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
