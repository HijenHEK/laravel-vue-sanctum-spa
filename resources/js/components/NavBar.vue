<template>
    <div class="shadow-md bg-white ">
        <div class="max-w-screen-lg mx-auto flex justify-between">
            <div class=" font-semibold tracking-wider	text-lg  p-4 ">
                Laravel Vue
            </div>

            <div class="relative "  ref="dropMenu">
                <div @click="drop=!drop"  class=" flex items-center cursor-pointer p-4  font-semibold tracking-wider text-lg"> 
                Foulen 
                <ChevronDownIcon class="h-5 w-5 text-gray-700 ml-2 mt-1"></ChevronDownIcon>

                </div>

                <div v-if="drop" class="absolute bg-white border z-10 shadow-md flex w-auto flex-col ">
                    <router-link class="p-4 flex items-center" :to="{ name: 'login' }">
                        <CogIcon class="h-6 w-6 text-gray-700 mr-2"></CogIcon>
                        Settings
                    </router-link>
                    <div class="p-4 flex  items-center cursor-pointer">
                        <LogoutIcon class="h-6 w-6 text-gray-700 mr-2"></LogoutIcon>

                        Logout
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { CogIcon , LogoutIcon , ChevronDownIcon } from '@heroicons/vue/outline'


export default {
    created: function() {
        let self = this ;   
        window.addEventListener('click', function(e){
            if (! self.$refs.dropMenu.contains(e.target) ){
                self.drop = false
            } 
        })
    },

    components: { CogIcon , LogoutIcon , ChevronDownIcon } ,
    data() {
        return {
            drop : false
        }
    }
}
</script>