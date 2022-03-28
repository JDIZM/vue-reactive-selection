<template>
  <v-contact-form
    v-if="formData && Object.entries(formData).length"
    :class="classes"
    :hide-submit="!isModified"
    label="SAVE"
    @submit="onSubmit"
  >
    <base-input
      v-model="name"
      type="text"
      placeholder="empty"
      :show-error="!isNameValid"
      @input="onUpdate($event, 'name')"
      @focus="onFocus($event, 'name')"
    >
      <template #label> name </template>
      <template #icon> > </template>
    </base-input>
    <base-input
      v-model.number="cost"
      type="number"
      placeholder="empty"
      :show-error="!isCostValid"
      @input="onUpdate($event, 'cost')"
      @focus="onFocus($event, 'cost')"
    >
      <template #label> cost </template>
      <template #icon>⭐️</template>
    </base-input>
  </v-contact-form>
</template>

<script>
  import { VContactForm } from "@jdizm/vue-storybook";
  import BaseInput from "@/components/BaseInput.vue";
  // import Vue from "vue";

  export default {
    components: {
      BaseInput,
      VContactForm,
    },
    props: {
      isModified: Boolean,
      listIndex: {
        type: Number,
        required: true,
      },
      formData: {
        type: Object,
        required: false,
        default: null,
      },
    },
    data() {
      return {
        name: "",
        cost: 0,
        // will retain the last updated items state
        updatedData: {},
      };
    },
    computed: {
      classes() {
        return {
          "--modified": this.isModified,
        };
      },
      computedUpdatedData() {
        // reactive method 1: using computed properties to update state
        // this is an example, not being used
        // note: you need to open vue dev tools for the
        // computed property to log to the console
        const values = Object.values(this.updatedData);
        console.log("computedUpdatedData", values);
        return this.updatedData;
      },
      computedFormData() {
        // alternative to the formData watcher
        console.log("computedFormData", this.formData);
        return this.formData;
      },
      isNameValid() {
        return typeof this.name === "string" && this.name.length > 0;
      },
      isCostValid() {
        return typeof this.cost === "number" && this.cost > 0;
      },
    },
    watch: {
      // reactive method 2: using a deep/immediate watchers to watch changes
      formData: {
        // set data on first load with immediate
        immediate: true,
        handler(value) {
          // set data when props change
          const { name, cost } = value;
          console.log("watch formData", value);
          // v-model data without mutating props
          this.name = name;
          this.cost = cost;
        },
      },
      updatedData: {
        deep: true,
        handler(newVal, oldVal) {
          if (!Object.values(newVal).length) return;
          console.log("watch updatedData old: ", oldVal);
          console.log("watch updatedData new: ", newVal);
          this.$emit("edited", true);
        },
      },
    },
    mounted() {
      // mounted triggers after immediate watcher
      console.log("mounted", this.formData);
    },
    methods: {
      onSubmit() {
        if (!this.isNameValid) return;
        if (!this.isCostValid) return;
        if (!this.isModified) return;

        const payload = {
          // either partial or full data
          // updatedData: { ...this.formData, ...this.updatedData },
          updatedData: this.updatedData,
          index: this.listIndex,
        };
        console.log("submit", payload);
        this.$emit("submit", payload);
        this.updatedData = {};
      },
      onUpdate(data, key) {
        console.log("onUpdate", data, key);
        // number converts to string
        // Vue.set(this.updatedData, key, data); // we lose the type this way
        // Vue.set is too reactive and breaks watcher
        // we could send all the data
        // this.updatedData = { name: this.name, cost: this.cost };
        // only send partial / patch update
        const value = this[key];
        const kvp = { [key]: value };
        this.updatedData = { ...kvp };
        console.log("key", kvp);
      },
      // eslint-disable-next-line no-unused-vars
      onFocus($event, key) {
        // console.log("focus", key, $event);
      },
    },
  };
</script>

<style lang="scss">
  .form {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    &.--modified {
      border: 2px dashed orangered;
    }
  }
</style>
