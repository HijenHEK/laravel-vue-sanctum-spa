<template>
  <div class="w-full p-2 bg-yellow-500 text-white opacity-80 hover:opacity-100 shadow-md">
        <div class="max-w-screen-lg mx-auto flex  items-center justify-between">
            <div>
                Your email address is not verified , please check your mail inbox !
            </div>


            <button v-if="!sent" @click="resend" class="py-2 px-3 bg-green-600 text-white rounded ">
                resend link ?
            </button>
            <div v-else  @click="resend" class="py-2 px-3 bg-blue-600 text-white rounded ">
                Email Sent !
            </div>
        </div>
  </div>
</template>



<script>
export default {

    props : ['id'],
    data(){
        return {
            sent : false 
        }
    },
    methods : {
        resend(){
            this.$store.dispatch('verifyResend' , {'id' : this.id}).then((res) => {
                this.sent = true
            }).catch((err) =>{
                this.error = "internal error please try again later" ;
            })
        }
    }
}
</script>