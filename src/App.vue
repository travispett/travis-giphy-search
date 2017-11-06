<template>
  <div id="app" class="container">
    <toolbar></toolbar>
    <search-container></search-container>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import SearchContainer from './components/SearchContainer.vue';

export default {
  name: 'app',
  components: { Toolbar, SearchContainer }
};
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>
