<template>
  <ul class="list-group">
    <slot />
  </ul>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .list-group {
    list-style: none;
    background-color: rgb(240, 223, 202);
    padding: 1rem;
  }
</style>
