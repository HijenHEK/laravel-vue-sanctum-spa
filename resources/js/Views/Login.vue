<template>

<div class="max-w-screen-md mx-auto text-gray-900">
    <div class="flex justify-center">
        <div class="flex-1">
            <div class="border w-auto">
                <div  class="border p-4  font-semibold">Log In</div>

                <div class="p-4 bg-white">
                    

                    <alert type="danger" v-if="errors" :content="errors" @close="errors=null" />

                    <form class="md:w-10/12 md:p-4 w-full mx-auto" @submit.prevent="login">
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center sm:justify-between">
                            <label for="Email" class="w-4/12 "> Email </label>
                            <input type="email" v-model="email" name="email" class="border border-gray-300 bg-white sm:w-8/12 w-full p-2 mt-3 sm:mt-0 focus:outline-none rounded-sm">
                        </div>
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center sm:justify-between">
                            <label for="Password" class="w-4/12 "> Password </label>
                            <input type="password" v-model="password" name="password" class="border border-gray-300 bg-white sm:w-8/12 w-full p-2 mt-3 sm:mt-0 focus:outline-none rounded-sm ">
                        </div>
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center  sm:justify-end">
                            
                            <div class="sm:w-8/12 w-full mt-3 sm:mt-0">
                                <input type="checkbox" name="Remeber Me" class="mr-2" id="">
                                <label for="Remember me" >Remeber Me ?</label>

                            </div>
                        </div>
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center  sm:justify-end">
                            <div class="sm:w-8/12 w-full  flex justify-between items-center mt-3 sm:mt-0">
                                <button type="submit" class="p-3 rounded-sm text-white bg-blue-500 hover:bg-blue-600">Log In</button>
                                <router-link :to="{name : 'register'}" class="text-sm text-blue-500 hover:underline"> New member ? Sing Up ! </router-link>
                            </div>
                        </div>
                        <div class="w-full my-1 sm:flex sm:justify-end">
                        <router-link :to="{name : 'forgot-password'}" class="text-sm text-gray-500 hover:text-gray-800 hover:underline "> Fogot your password ? </router-link>
                        </div>
                    </form>

                    
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<script>
import { XIcon } from '@heroicons/vue/solid';
import Alert from '../components/Alert.vue';
export default {
    components : {
        XIcon,
        Alert
    },
    data() {
        return {
            email : '' , 
            password : '' , 
            errors : ''
        }
    },
    
    methods : {
        async login(){
            try {
                await this.$store.dispatch('login' , {'email' : this.email , 'password' : this.password})
                this.$router.push({name: 'home'})
            }
            catch (e){
                this.errors = e.data
            };
            
        }
    },
    
}
</script>
