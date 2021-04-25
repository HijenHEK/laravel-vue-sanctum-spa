<template>

<div class="max-w-screen-md mx-auto text-gray-900">
    <div class="flex justify-center">
        <div class="flex-1">
            <div class="border w-auto">
                <div  class="border p-4  font-semibold">Forgot your Password ?</div>

                <div class="p-4 bg-white">
                    <div v-if="success" class="flex items-center bg-green-100 border border-green-400 text-green-600 px-4 py-3 rounded relative md:w-10/12 md:p-2 w-full mx-auto" role="alert">
                            <!-- <strong class="font-bold">Holy smokes!</strong> -->
                            <span class="block sm:inline w-full text-center">{{success}}</span>
                            <span @click="success=null" class="">
                                    <XIcon class="h-4 w-4 font-bold"></XIcon>
                            </span>
                    </div> 
                    <div v-if="error" class="flex items-center bg-red-100 border border-red-400 text-red-600 px-4 py-3 rounded relative md:w-10/12 md:p-2 w-full mx-auto" role="alert">
                            <!-- <strong class="font-bold">Holy smokes!</strong> -->
                            <span class="block sm:inline w-full text-center">{{error}}</span>
                            <span @click="error=null" class="">
                                    <XIcon class="h-4 w-4 font-bold"></XIcon>
                            </span>
                    </div>
                    <!-- <div v-if="error" class="md:w-10/12 md:p-2 w-full mx-auto text-sm text-red-500 text-white text-center">
                        {{error}}
                    </div> -->

                    <form class="md:w-10/12 md:p-4 w-full mx-auto" @submit.prevent="send">
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center sm:justify-between">
                            <label for="Email" class="w-4/12 "> Email </label>
                            <input type="email" v-model="email" name="email" class="border border-gray-300 bg-white sm:w-8/12 w-full p-2 mt-3 sm:mt-0 focus:outline-none rounded-sm">
                        </div>
                        
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center  sm:justify-end">
                            <div class="sm:w-8/12 w-full  flex justify-between items-center mt-3 sm:mt-0">
                                <button type="submit" class="p-3 rounded-sm text-white bg-blue-500 hover:bg-blue-600">Send an Email</button>
                                <router-link :to="{name : 'login'}" class="text-sm text-blue-500 hover:underline"> go back ? </router-link>
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
import { XIcon } from '@heroicons/vue/solid';
import axios from 'axios';
export default {
    components : {
        XIcon
    },
    data() {
        return {
            email : '' , 
            error : '' , 
            success : '',
        }
    },
    
    methods : {
        send(){
            axios.post('/api/forgot-password' , {'email': this.email}) 
                .then((res) =>{
                    console.log(res)
                })
                .catch((err) =>{
                    this.error = err.message
                })
            
        }
    },
    
}
</script>
