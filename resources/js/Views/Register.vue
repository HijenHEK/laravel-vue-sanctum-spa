<template>

<div class="max-w-screen-md mx-auto text-gray-900">
    <div class="flex justify-center">
        <div class="flex-1">
            <div class="border w-auto">
                <div  class="border  p-4 font-semibold ">Register</div>

                <div class="p-4 bg-white">
                    

                    <errors  v-if="errors" :content="errors"  @close="errors=null" />
                    
                    <form @submit.prevent="register" class="md:w-10/12 md:p-4 w-full mx-auto">

                        

                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center sm:justify-between">
                            <label for="Name" class="w-4/12 "> Name </label>
                            <input type="text" name="name" v-model="name" class="border border-gray-300 bg-white sm:w-8/12 w-full p-2 mt-3 sm:mt-0 focus:outline-none rounded-sm">
                        </div>
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center sm:justify-between">
                            <label for="Email" class="w-4/12 "> Email </label>
                            <input type="email" name="email" v-model="email" class="border border-gray-300 bg-white sm:w-8/12 w-full p-2 mt-3 sm:mt-0 focus:outline-none rounded-sm">
                        </div>
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center sm:justify-between">
                            <label for="Password" class="w-4/12 "> Password </label>
                            <input type="password" name="password" v-model="password" class="border border-gray-300 bg-white sm:w-8/12 w-full p-2 mt-3 sm:mt-0 focus:outline-none rounded-sm">
                        </div>
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center sm:justify-between">
                            <label for="Password confirm" class="w-4/12 "> Confirm Password </label>
                            <input type="password" name="password_confirmation" v-model="password_confirmation" class="border border-gray-300 bg-white sm:w-8/12 w-full p-2 mt-3 sm:mt-0 focus:outline-none rounded-sm">
                        </div>
                        
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center  sm:justify-end">
                            <div class="sm:w-8/12 w-full  flex justify-between items-center mt-3 sm:mt-0">
                                <div v-if="busy"  class="flex justify-center items-center p-2 px-6 rounded-sm text-white bg-blue-500 hover:bg-blue-600"> 
                                   <circle-svg class="w-6 h-6" />
                                </div>
                                <button v-else type="submit" class="p-3 rounded-sm text-white bg-blue-500 hover:bg-blue-600"> 
                                   Register
                                </button>
                                <router-link :to="{name : 'login'}" class="text-sm text-blue-500 hover:underline"> Already a member ? Sing In ! </router-link>
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    </div>
</div>

</template>



<script>
import {XIcon} from '@heroicons/vue/outline'
import CircleSvg from '../components/CircleSvg.vue';
import Errors from '../components/Errors.vue';
export default {
    components :{
        XIcon ,
        CircleSvg,
        Errors
    },
    data() {
        return {
            name : '',
            email : '' ,
            password : '' ,
            password_confirmation : '',
            errors : null,
            busy : false ,
                
        }
    },

    methods : {
        async register() {
            this.busy = true ;
            this.errors = null 
            this.success = ''
            try {
                await this.$store.dispatch('register' , {
                    'name' : this.name,
                    'email' : this.email ,
                    'password' : this.password ,
                    'password_confirmation' : this.password_confirmation
                });
                this.$router.push({name: 'home'})
            } catch (e) {
                // e.data.errors 
                this.errors = e.data
            }
                this.busy = false ;
        }
    }
}


</script>
