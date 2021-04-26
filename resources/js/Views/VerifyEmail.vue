<template>

<div class="max-w-screen-md mx-auto text-gray-900">
    <div class="flex justify-center">
        <div class="flex-1">
            <div class="border w-auto">
                <div  class="border p-4  font-semibold">Verify your email !</div>

                <div class="p-4 bg-white">

                    <alert type="success" v-if="success" :content="success" @close="success=null" />
                    <alert type="danger" v-if="error" :content="error" @close="error=null" />
                    
                    <!-- <div v-if="error" class="md:w-10/12 md:p-2 w-full mx-auto text-sm text-red-500 text-white text-center">
                        {{error}}
                    </div> -->

                        <div class=" my-1 py-2 sm:w-8/12 md:w-10/12 md:p-4 w-full mx-auto flex justify-center items-center mt-3 sm:mt-0">
                            <button @click="error ? resend() : verify()" :class="'p-3 rounded-sm text-white' + (!error ? ' bg-blue-500 hover:bg-blue-600' : ' bg-red-400 text-white hover:bg-red-600')  " >
                                {{ error ? 'Oops ! Resend ?' :'Click to Verify'}}
                            </button>
                        </div>

                    

                    
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<script>
import { XIcon } from '@heroicons/vue/solid';
import axios from 'axios';
import Alert from '../components/Alert.vue';
export default {
    components : {
        XIcon,
        Alert
    },
    props  : {
        id : {
            required : true           
        },
        hash : {
            required : true 
        }
    },
    data() {
        return {
            error : '' , 
            success : '',
        }
    },
    
    methods : {
        verify(){
            this.$store.dispatch('verifyEmail' , {'id' : this.id , 'hash' : this.hash})
                .then((res) =>{
                    this.success = res.data.message ?  res.data.message  +  ' Redirecting ...' : ' Redirecting ...'
                    setTimeout(()=>{
                        this.$router.push({name:'home'})
                    },1000)
                })
                .catch((err) =>{
                    this.error = err.response.data.message ;
                })
            
        },

        resend(){
            this.$store.dispatch('verifyResend' , {'id' : this.id}).then((res)=> {
                
                this.success = res.data.message + ' Redirecting ...'
                setTimeout(()=>{
                        this.$router.push({name:'home'})
                    },1000)
            }).catch((err) => {
                this.error = 'internal error ! plzase try again later .';
                setTimeout(()=>{
                        this.$router.push({name:'home'})
                    },1000)
            })
        }

    },
    
}
</script>
