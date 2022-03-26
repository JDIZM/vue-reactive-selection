<template>
  <div id="app">
    <div class="container">
      <h1>VUE REACTIVE DATA</h1>
      <div v-if="loading" class="loading">Loading data...</div>
      <div v-if="errorMsg" class="error">Error {{ errorMsg }}</div>
      <div></div>
    </div>
  </div>
</template>
|
<script>
  export default {
    name: "App",
    data() {
      return {
        loading: true,
        errorMsg: "this is an error",
      };
    },
  };
</script>

<style lang="css" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .container {
    padding: 0.5rem;
    max-width: 770px;
    margin: auto;
  }

  #option-select {
    padding: 0.5rem;
  }
</style>
