<template>
  <md-layout md-column>
    <search-form @search-response="onSearch"></search-form>
    <gif-container :gifData="gifData"></gif-container>
  </md-layout>
</template>

<script>
  import GifContainer from './GifContainer.vue';
  import SearchForm from './SearchForm.vue';

  export default {
    name: 'search-container',
    components: { GifContainer, SearchForm },
    data() {
      return {
        gifData: {}
      };
    },
    methods: {
      onSearch(data) {
        // TODO: Handle error.
        this.gifData = data;
      }
    }
  };
</script>

<style>
</style>
