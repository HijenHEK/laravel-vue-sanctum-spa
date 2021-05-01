<template>
    <div class="border font-semibold  p-4  flex items-center justify-between">
        Profile
        <div class="text-gray-600 text-sm font-medium">
            {{verified ? `Verified at : ${ moment(verified).format('MMMM Do YYYY, h:mm a')} ` : 'Not verified !'}}
        </div>

    </div>

    <div class="p-4 bg-white">

                    <Success  v-if="success" :content="success" @close="success=null" />

                    <Errors  v-if="errors" :content="errors" @close="errors=null" />
                    <!-- <div v-if="error" class="md:w-10/12 md:p-2 w-full mx-auto text-sm text-red-500 text-white text-center">
                        {{error}}
                    </div> -->

                    <form class="md:w-10/12 md:p-4 w-full mx-auto" @submit.prevent="update">
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center sm:justify-between">
                            <label for="name" class="w-4/12 "> Name </label>
                            <input type="text" v-model="name"  name="name" class="border border-gray-300 bg-white sm:w-8/12 w-full p-2 mt-3 sm:mt-0 focus:outline-none rounded-sm ">
                        </div>
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center sm:justify-between">
                            <label for="Email" class="w-4/12 "> Email </label>
                            <input type="email" v-model="email" name="email" class="border border-gray-300 bg-white sm:w-8/12 w-full p-2 mt-3 sm:mt-0 focus:outline-none rounded-sm">
                        </div>
                       
                        <div class=" w-full my-1 py-2 sm:flex  sm:items-center  sm:justify-end">
                            <div class="sm:w-8/12 w-full  flex justify-between items-center mt-3 sm:mt-0">
                                 <div v-if="busy"  class="flex justify-center items-center p-2 px-6 rounded-sm text-white bg-blue-500 hover:bg-blue-600"> 
                                   <circle-svg class="w-6 h-6" />
                                </div>
                                <button v-else type="submit" class="p-3 rounded-sm text-white bg-blue-500 hover:bg-blue-600">Update</button>
                            </div>
                        </div>
                    </form>


    </div>
</template>


<script>
import { XIcon } from '@heroicons/vue/solid';
import Errors from '../components/Errors.vue';
import Success from '../components/Success.vue';
import moment from 'moment'
import CircleSvg from '../components/CircleSvg.vue';
export default {
    components : {
        XIcon,
       Errors,
       Success,
        CircleSvg
    },
    data() {
        return {
            email :  '' , 
            name :  '', 
            errors : null,
            success : '' ,
            busy : false ,

        }
    },
    computed : {
        user() {
            return this.$store.getters.user
        },
        verified() {
            return this.$store.getters.verified
        }
    },
    
    methods : {
        async update(){
            this.busy = true ;
            this.errors = null 
            this.success = ''
            try {
                await this.$store.dispatch('profile' , {'email' : this.email , 'name' : this.name})
                this.success = 'profile updated successfully !'
            }
            catch (e){
                this.errors = e.data
            };
            this.busy = false ;
            
        },
        moment: function () {
            return moment();
        }
    },
    

    mounted() {
        this.name = this.user.name
        this.email = this.user.email
    },
 
    
}
</script>