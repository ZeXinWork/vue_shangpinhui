<template>
  <div>
    <h1>params:{{ $route.params.keyword }}</h1>
    <h1>query:{{ $route.query.a }}</h1>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Search",
});
</script>
<style lang="scss"></style>
