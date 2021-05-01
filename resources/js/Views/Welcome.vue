<template>
<div class="min-h-screen flex flex-col ">
    <div class="p-4 absolute flex  top-1 right-1 text-gray-500 text-sm font-semibold uppercase tracking-widest">
      <div v-if="user">
        <router-link class="px-6 " :to="{ name: 'home' }">
          Home
        </router-link>
      </div>
      <div v-else>
        <router-link class="px-6 " :to="{ name: 'login' }">
          Login
        </router-link>
        <router-link class="p-2 mr-4" :to="{ name: 'register' }">
          Register
        </router-link>
      </div>
    </div>

    <div class="flex-1 flex flex-col items-center justify-center text-gray-600 ">
            <div class="mb-6  text-center  tracking-wider text-8xl sm:mb-8 sm:text-8xl">
                Laravel Vue
            </div>

            <div class="no-underline hover:underline text-sm font-normal text-teal-800 uppercase">
                <a href="https://github.com/hijenhek">github.com/HijenHek</a>
            </div>
        </div>
  </div>

</template>


<script>
export default {
    data() {
        return {
            auth : true 
        }
    },
    computed : {
      user() {
        return this.$store.getters.user ;
      }
    }
}
</script>
