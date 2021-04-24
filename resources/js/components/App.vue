<template>
  <div>
        <div>
            <nav-bar v-if="this.$route.name !== 'welcome'"></nav-bar>
        </div>
        <div>
          
          <router-view class="p-6 " v-slot="{ Component }">
            <transition name="fade" mode="out-in" >
              <component :is="Component" />
            </transition>
          </router-view>
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


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
