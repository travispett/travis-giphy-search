<template>
  <md-layout md-align="center" md-row>
    <div v-for="gif in gifData" :key="gif.id">
      <md-layout md-column md-flex-small="50">
        <md-card class="gif-card" md-with-hover>
          <md-card-media>
            <img :src="gif.images.downsized.url">
          </md-card-media>
        </md-card>
      </md-layout>
    </div>
  </md-layout>
</template>

<script>

  export default {
    name: 'gif-container',
    props: ['gifData']
  };
</script>

<style>
  .gif-card {
    margin: 16px;
  }
</style>
