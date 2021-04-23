<template>
  <div>
        <div>
            <nav-bar v-if="this.$route.name !== 'welcome'"></nav-bar>
        </div>
        <div>
            <router-view class="p-6 "></router-view>
        </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components : {
    NavBar
  },
  
}
</script>
