<template>
  <ul class="list-group" :class="classes">
    <slot />
  </ul>
</template>

<script>
  export default {
    props: {
      disabled: Boolean,
    },
    computed: {
      classes() {
        return {
          "--disabled": this.disabled,
        };
      },
    },
  };
</script>

<style lang="scss">
  .list-group {
    list-style: none;
    background-color: rgb(240, 223, 202);
    padding: 1rem;
    &.--disabled {
      background-color: orangered;
    }
  }
</style>
