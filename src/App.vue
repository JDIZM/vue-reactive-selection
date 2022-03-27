<template>
  <div id="app">
    <div class="container">
      <nav>
        <h1>VUE REACTIVE FORM DATA</h1>
        <div v-if="loading" class="loading">Loading data...</div>
        <div v-if="errorMsg" class="error">Error {{ errorMsg }}</div>
      </nav>
      <div v-show="!loading" class="list">
        <p>select an item from the list, the form will display reactive data</p>
        <selection-list :disabled="isModified">
          <selection-list-item
            v-for="(item, i) in clonedDataArray"
            :key="i"
            :click-disabled="isModified"
            @click="selectListItem(item, i)"
          >
            <span class="icon">{{ item.cost }} ⭐️ </span> - {{ item.name }}
          </selection-list-item>
        </selection-list>
      </div>
      <div v-show="!loading" class="form">
        <p>
          watch for changes when the form data updates, disable selecting
          another item if the data has been modified
        </p>
        <editable-form
          v-if="showForm && formData && Object.entries(formData).length"
          :list-index="selectedIndex"
          :is-modified="isModified"
          :form-data="formData"
          @edited="isModified = true"
          @submit="saveChanges"
        />
      </div>
    </div>
  </div>
</template>
|
<script>
  import sampleData from "@/data/sample.json";
  import SelectionList from "@/components/List/SelectionList.vue";
  import SelectionListItem from "@/components/List/SelectionListItem.vue";
  import EditableForm from "@/components/Form/EditableForm.vue";
  import Vue from "vue";

  export default {
    name: "App",
    components: {
      SelectionList,
      SelectionListItem,
      EditableForm,
    },
    data() {
      return {
        loading: true,
        errorMsg: "",
        sampleData,
        isModified: false,
        showForm: false,
        selectedIndex: 0,
        formData: null,
      };
    },
    computed: {
      clonedDataArray() {
        const cloned = [...this.sampleData.items];
        return cloned;
      },
    },
    async mounted() {
      // example loading...
      console.log("loading..");
      await setTimeout(() => {
        console.log("loaded data");
        this.loading = false;
        this.showForm = true;
      }, 800);
    },
    methods: {
      selectListItem(item, index) {
        console.log(`selectListItem:`, index, item);
        this.selectedIndex = index;
        this.formData = item;
      },
      saveChanges(payload) {
        // on button click
        // versus auto timer
        this.isModified = false;
        console.log("saveChanges", payload);
        const { index, updatedData } = payload;
        // reactive
        Vue.set(this.clonedDataArray, index, updatedData);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .loading {
    background-color: var(--light);
    color: var(--text-color-ld);
  }
  .error {
    background-color: var(--error);
  }
  nav {
    padding-bottom: 1rem;
  }
  .container {
    justify-content: flex-start;
  }
  .list {
    width: 100%;
    padding-bottom: 1rem;
  }
  .form {
    padding-bottom: 1rem;
  }
</style>
