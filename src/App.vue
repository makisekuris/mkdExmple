<!--
 * @Descripttion: 
 * @version: 
 * @Author: liujy
 * @Date: 2020-10-14 11:12:39
 * @LastEditors: liujy
 * @LastEditTime: 2020-10-16 13:20:02
-->
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- <input type="text" v-model="value" /> -->
      <div id="test-markdown-view">123123</div>

      <markdown :onchange="contentOnChange" :initData="data" v-model="data" />
      <div>{{ data }}</div>
    </v-main>
  </v-app>
</template>

<script>
  // import HelloWorld from "./components/HelloWorld";
  // import mavonEditor from "mavon-editor";
  // import "mavon-editor/dist/css/index.css";
  import markdown from "./components/MarkdownEditor";
  // use
  export default {
    name: "App",
    components: {
      // "mavon-editor": mavonEditor.mavonEditor,
      markdown,
    },

    data: () => ({
      value: "123",
      data: "123123213",
    }),
    watch: {
      data: function (newval) {
        console.log(newval);
      },
    },
    methods: {
      contentOnChange: function (e) {
        console.log(e);
      },
    },
  };
</script>
<style scoped>
  #editor {
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>

