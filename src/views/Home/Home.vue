<template>
  <div>
    <TypeNav></TypeNav>
    <List />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor />
    <Brand />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import List from './LIstContainer/ListContainer.vue'
import TodayRecommend from './TodayRecommend/TodayRecommend.vue'
import Rank from './Rank/Rank.vue'
import Like from './Like/Like.vue'
import Floor from './Floor/Floor.vue'
import Brand from './Brand/Brand.vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'Home',
  components: { List, TodayRecommend, Rank, Like, Floor, Brand },
})
</script>
<style lang="scss"></style>
