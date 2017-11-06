<template>
  <md-layout md-row md-flex="33">
    <md-layout md-column md-flex="33" md-flex-medium="10" class="col-offset"></md-layout>
    <md-layout md-column md-flex="33" md-flex-medium="80" class="col-offset">
      <md-whiteframe md-elevation="2" class="search">
        <form novalidate @submit.stop.prevent="onSubmit">
          <md-input-container>
            <label>Search</label>
            <md-input required v-model="searchParams"></md-input>
          </md-input-container>

          <md-layout md-row>
            <md-layout md-flex></md-layout>
            <md-button type="submit" class="md-primary">Search</md-button>
          </md-layout>
        </form>
      </md-whiteframe>
    </md-layout>
    <md-layout md-column md-flex="33" md-flex-medium="10" class="col-offset"></md-layout>
  </md-layout>
</template>

<script>
  import GifService from './../services/GifService';

  export default {
    name: 'search-form',
    data() {
      return {
        searchParams: ''
      };
    },

    methods: {
      onSubmit() {
        // This event emitting isn't very pretty. In a more complex app Vuex is the way to go for this.
        GifService.get(this.searchParams)
          .then((data) => this.$emit('search-response', data))
          .catch((err) => this.$emit('search-response', err));
      }
    }
  };
</script>

<style>
  .search {
    margin: 32px;
    padding: 16px 24px 16px 24px;
  }
  .col-offset {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
  }
</style>
