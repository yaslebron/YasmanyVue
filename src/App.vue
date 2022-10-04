<script setup>
//import './views/scss/App.scss'
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>      
   <div id="app">
      <AppHeader/>      
      <RouterView class="container"></RouterView>
      <AppFooter/>
   </div>
</template>

<style scoped>
#app{
  box-sizing: border-box;
  color:blue;
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  --webkit-font-smoothing:antialiased;
  --moz-osz-font-smoothing:grayscale;
  text-align: center;
  margin: 0 auto;
  padding: 0;
}
.container{
  padding-bottom: 4rem;
}
</style>
