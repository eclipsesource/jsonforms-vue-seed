<script setup lang="ts">
import { ref, provide } from "vue";
import { JsonForms, JsonFormsChangeEvent } from "@jsonforms/vue";
import { defaultStyles, vanillaRenderers } from "@jsonforms/vue-vanilla";

const renderers = Object.freeze([
  ...vanillaRenderers,
  // here you can add custom renderers
]);

const schema = {
  properties: {
    name: {
      type: "string",
      minLength: 1,
      description: "The task's name"
    },
    description: {
      title: "Long Description",
      type: "string",
    },
  },
};

const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/name",
    },
    {
      type: "Control",
      scope: "#/properties/description",
      options: {
        multi: true,
      }
    },
  ],
};

const data = ref({
  name: "Send email to Adrian",
  description: "Confirm if you have passed the subject\nHereby ...",
});

const onChange = (event: JsonFormsChangeEvent) => {
  data.value = event.data;
};

// Provide styles to child components
provide('styles', defaultStyles);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>JSON Forms Vue 3</h1>
  <div class="myform">
    <json-forms :data="data" :renderers="renderers" :schema="schema" :uischema="uischema" @change="onChange" />
  </div>
  <pre>{{ data }}</pre>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 120px;
  margin-right: 120px;
}

.mylabel {
  color: darkslategrey;
}

.vertical-layout {
  margin-left: 10px;
  margin-right: 10px;
}

.myform {
  width: 640px;
  margin: 0 auto;
}

.text-area {
  min-height: 80px;
}

pre {
  background: lightcyan;
  padding: 10px;
  text-align: left;
  width: 100%;
}
</style>