<template>
    <div class="border font-semibold  p-4 ">
        Profile

    </div>

    <div class="p-4 bg-white">
                    {{this.$store.getters.verified}}

                    <alert type="success" v-if="success" :content="success" @close="success=null" />

                    <alert type="danger" v-if="error" :content="error" @close="error=null" />
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
                                <button type="submit" class="p-3 rounded-sm text-white bg-blue-500 hover:bg-blue-600">Update</button>
                            </div>
                        </div>
                    </form>


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
            email :  '' , 
            name :  '', 
            error : '',
            success : ''
        }
    },
    computed : {
        user() {
            return this.$store.getters.user
        }
    },
    
    methods : {
        async update(){
            try {
                await this.$store.dispatch('profile' , {'email' : this.email , 'name' : this.name})
                this.success = 'profile updated successfully !'
            }
            catch (e){
                this.error = e.data.message
            };
            
        }
    },
    mounted() {
        this.name = this.user.name
        this.email = this.user.email
    }
    
}
</script>