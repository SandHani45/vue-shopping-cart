<template>
  <div>
    <Header />
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

import Header from './components/Header.vue';
export default {
  components: {
    Header
  },
  created(){
    this.$store.dispatch('initStocks');
    console.log( this.$store.dispatch('initStocks'))
  }
}
</script>

<style>

</style>
