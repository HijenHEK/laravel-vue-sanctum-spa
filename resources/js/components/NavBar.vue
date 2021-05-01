<template>
    <div class="shadow-md bg-white ">
        <div class="max-w-screen-lg mx-auto flex justify-between">
            <div class=" p-4 ">
                <router-link class="font-semibold tracking-wider	text-lg " :to="{name : 'welcome'}">
                        Laravel Vue
                </router-link> 
                <router-link active-class="font-semibold text-gray-900" v-if="user" class="px-6 text-gray-500 hover:text-gray-900 " :to="{ name: 'home' }">
                    Home
                </router-link>
            </div>

            <div v-if="user" class="relative "  ref="dropMenu">
                <div @click="drop=!drop"  class=" flex items-center cursor-pointer p-4  font-semibold tracking-wider text-lg"> 
                    {{user.name}} 
                <ChevronDownIcon class="h-5 w-5 text-gray-700 ml-2 mt-1"></ChevronDownIcon>

                </div>

                <div v-if="drop" @click="drop=!drop" class="absolute bg-white border z-10 shadow-md flex w-auto flex-col ">
                    <router-link class="p-4 flex items-center" :to="{ name: 'settings' }">
                        <CogIcon class="h-6 w-6 text-gray-700 mr-2"></CogIcon>
                        Settings
                    </router-link>
                    
                    <div @click="logout" class="p-4 flex  items-center cursor-pointer">
                        <LogoutIcon class="h-6 w-6 text-gray-700 mr-2"></LogoutIcon>

                        Logout
                    </div>
                </div>
            </div>

            <div v-else class="flex">
                <router-link class="p-4 tracking-widest flex items-center  text-gray-600" 
                    active-class="font-semibold text-gray-800" 
                    :to="{ name: 'login' }">
                        Login
                </router-link>
                <router-link class="p-4 tracking-widest flex items-center  text-gray-600" 
                    active-class="font-semibold text-gray-800" 
                    :to="{ name: 'register' }">
                        Register
                </router-link>

                    
            </div>
        </div>
    </div>
</template>
<script>
import { CogIcon , LogoutIcon , ChevronDownIcon } from '@heroicons/vue/outline';

export default {
    created: function() {
        if(this.$store.getters.user) {
            let self = this ;   
            window.addEventListener('click', function(e){
                if (! self.$refs.dropMenu.contains(e.target) ){
                    self.drop = false
                } 
            })
        }
    },

    components: { CogIcon , LogoutIcon , ChevronDownIcon } ,
    data() {
        return {
            drop : false ,
        }
    },
    computed : {
        user() {
            return this.$store.getters.user ;
        }
    },
    methods : {
        async logout() {
            await this.$store.dispatch('logout');
            this.$router.push({name : 'login'});
        }
    }
}
</script>