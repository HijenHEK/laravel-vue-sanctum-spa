<template>

<div class="max-w-screen-md mx-auto text-gray-900">
    <div class="flex justify-center">
        <div class="flex-1">
            <div class="border w-auto">
                <div  class="border p-4  font-semibold">Verify your email !</div>

                <div class="p-4 bg-white">

                    <success  v-if="success" :content="success" @close="success=null" />
                    <errors v-if="errors" :content="errors" @close="errors=null" />
                    
                    <!-- <div v-if="error" class="md:w-10/12 md:p-2 w-full mx-auto text-sm text-red-500 text-white text-center">
                        {{error}}
                    </div> -->

                        <div class=" my-1 py-2 sm:w-8/12 md:w-10/12 md:p-4 w-full mx-auto flex justify-center items-center mt-3 sm:mt-0">
                            <div v-if="busy"  class="flex justify-center items-center p-2 px-6 rounded-sm text-white bg-blue-500 hover:bg-blue-600"> 
                                   <circle-svg class="w-6 h-6" />
                                </div>
                            <button v-else @click="error ? resend() : verify()" :class="'p-3 rounded-sm text-white' + (!error ? ' bg-blue-500 hover:bg-blue-600' : ' bg-red-400 text-white hover:bg-red-600')  " >
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
import Errors from '../components/Errors.vue';
import Success from '../components/Success.vue';
import CircleSvg from '../components/CircleSvg.vue';
export default {
    components : {
        XIcon,
        Errors,
        Success,
        CircleSvg
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
            errors : null, 
            success : '',
            busy : false ,

        }
    },
    
    methods : {
        async verify(){
            this.busy = true ;
            this.errors = null 
            this.success = ''
            await this.$store.dispatch('verifyEmail' , {'id' : this.id , 'hash' : this.hash})
                .then((res) =>{
                    this.success = res.data.message ?  res.data.message  +  ' Redirecting ...' : ' Redirecting ...'
                    setTimeout(()=>{
                        this.$router.push({name:'home'})
                    },1000)
                })
                .catch((err) =>{
                    this.errors = 'internal error ! plzase try again later .';
                })
                this.busy = false ;
            
        },

        resend(){
            this.errors = null 
            this.success = ''
            this.$store.dispatch('verifyResend' , {'id' : this.id}).then((res)=> {
                
                this.success = res.data.message + ' Redirecting ...'
                setTimeout(()=>{
                        this.$router.push({name:'home'})
                    },1000)
            }).catch((err) => {
                this.errors = 'internal error ! plzase try again later .';
                setTimeout(()=>{
                        this.$router.push({name:'home'})
                    },1000)
            })
        }

    },
    
}
</script>
