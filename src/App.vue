<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer v-show="$route.meta && $route.meta.showFooter" />
  </div>
</template>
<script lang="ts">
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/index.vue";
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("categoryList");
  },
});
</script>
<style lang="scss"></style>
