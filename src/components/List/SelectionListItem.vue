<template>
  <li class="list-item" @click="onClick($event)">
    <slot />
  </li>
</template>

<script>
  export default {
    props: {
      clickDisabled: Boolean,
    },
    methods: {
      onClick($event) {
        if (this.clickDisabled) return;
        this.$emit("click", $event);
      },
    },
  };
</script>

<style lang="scss">
  .list-item {
    background-color: rgb(113, 156, 236);
    padding: 1rem;
    cursor: pointer;
    &:hover {
      background-color: rgb(68, 127, 236);
    }
  }
</style>
