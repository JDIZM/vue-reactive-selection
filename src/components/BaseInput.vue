<template>
  <div :class="classes" class="form__field">
    <label>
      <slot name="label" />
      <span class="icons">
        <slot name="icon" />
      </span>
      <textarea
        v-if="type === 'textarea'"
        v-model="model"
        v-bind="$attrs"
        :type="type"
        @focus.prevent="$emit('focus')"
      />
      <input
        v-else
        v-model="model"
        v-bind="$attrs"
        :type="type"
        @focus.prevent="$emit('focus')"
      />
    </label>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    model: {
      data: "value",
      event: "update",
    },
    props: {
      value: {
        type: String,
        required: false,
        default: "",
      },
      type: {
        type: String,
        required: true,
      },
      showError: Boolean,
      showSuccess: Boolean,
    },
    computed: {
      classes() {
        return {
          "--error": this.showError,
          "--success": this.showSuccess,
        };
      },
      model: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit("input", value);
        },
      },
    },
  };
</script>

<style lang="scss" scoped>
  .form__field {
    label {
      height: 100%;
    }
    .icons {
      top: 40px;
      left: 1rem;
    }
  }
</style>
