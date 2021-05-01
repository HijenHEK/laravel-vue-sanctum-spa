<template >
  <div class="flex items-start border px-4 py-3 rounded relative md:w-10/12 md:p-2 w-full mx-auto bg-green-100 border border-green-100 text-green-500" role="alert shadow">
                            <!-- <strong class="font-bold">Holy smokes!</strong> -->
                            <span  class="block sm:inline w-full text-center">{{content}}</span>
                            
                            <span @click="$emit('close')" class="">
                                    <XIcon class="h-5 w-5 font-bold cursor-pointer"></XIcon>
                            </span>
    </div>
</template>



<script>
import {XIcon} from '@heroicons/vue/outline'
export default {
    components : {
        XIcon
    },
    props : {
        content : {
            type : String,
            default : 'hello !'
        }
    } , 
    
    
}
</script>