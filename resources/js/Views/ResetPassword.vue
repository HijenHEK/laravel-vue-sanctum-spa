<template>

<div class="max-w-screen-md mx-auto text-gray-900">
    <div class="flex justify-center">
        <div class="flex-1">
            <div class="border w-auto">
                <div  class="border  p-4 font-semibold ">Reset your password</div>

                <div class="p-4 bg-white">
                    
                    <div v-if="error" class="flex items-center bg-red-100 border border-red-400 text-red-600 px-4 py-3 rounded relative md:w-10/12 md:p-2 w-full mx-auto" role="alert">
                            <!-- <strong class="font-bold">Holy smokes!</strong> -->
                            <span class="block sm:inline w-full text-center">{{error}}</span>
                            <span @click="error=null" class="">
                                    <XIcon class="h-4 w-4 font-bold"></XIcon>
                            </span>
                    </div>

                    <form @submit.prevent="reset" class="md:w-10/12 md:p-4 w-full mx-auto">

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
                                <button type="submit" class="p-3 rounded-sm text-white bg-blue-500 hover:bg-blue-600"> Reset </button>
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
import axios from 'axios'
export default {
    components :{
        XIcon
    },
    props  : {
        token : {
            required : true           
        },
        email : {
            required : true 
        }
    },
        
    data() {

        return {

            password : '' ,
            password_confirmation : '',
            error : ''
        }
    },

    methods : {
        reset(){
            axios.post('/api/reset-password' , {
                    'email': this.email, 
                    'token': this.token, 
                    'password': this.password, 
                    'password_confirmation': this.password_confirmation 
                }) 
                .then((res) =>{
                    console.log(res.data.msg)
                })
                .catch((err) =>{
                    this.error = err.response.data.message
                })
            
        }
    },
    created () {

    }
    
}


</script>
