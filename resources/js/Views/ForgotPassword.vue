<template>

<div class="max-w-screen-md mx-auto text-gray-900">
    <div class="flex justify-center">
        <div class="flex-1">
            <div class="border w-auto">
                <div  class="border p-4  font-semibold">Forgot your Password ?</div>

                <div class="p-4 bg-white">

                    <Success  v-if="success" :content="success" @close="success=null" />
                    <Errors  v-if="errors" :content="errors" @close="errors=null" />
                    
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
                                <div v-if="busy"  class="flex justify-center items-center p-2 px-6 rounded-sm text-white bg-blue-500 hover:bg-blue-600"> 
                                   <circle-svg class="w-6 h-6" />
                                </div>
                                <button v-else type="submit" class="p-3 rounded-sm text-white bg-blue-500 hover:bg-blue-600">Send an Email</button>
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
import Success from '../components/Success.vue'
import Errors from '../components/Errors.vue';
import CircleSvg from '../components/CircleSvg.vue';

export default {
    components : {
        Success,
        XIcon,
        Errors,
        CircleSvg,
        Success
    },
    data() {
        return {
            email : '' , 
            errors : null , 
            success : '',
            busy : false,

        }
    },
    
    methods : {
        async send(){
            this.busy = true ;
            this.errors = null 
            this.success = ''
            await axios.post('/api/forgot-password' , {'email': this.email}) 
                .then((res) =>{
                    this.success = res.data.msg
                })
                .catch((err) =>{
                    this.errors = err.response.data
                })
            this.busy = false ;
            
        }
    },
    
}
</script>
