<template >
  <div class="flex items-start border px-4 py-3 rounded relative md:w-10/12 md:p-2 w-full mx-auto bg-red-100 border border-red-100 text-red-500 " role="alert shadow">
                            <!-- <strong class="font-bold">Holy smokes!</strong> -->
                            <span v-if="!content.errors" class="block sm:inline w-full text-center">{{content.message}}</span>
                            <div v-else class="block sm:inline w-full text-center">
                            
                            <!-- <div>{{content.message}}</div> -->
                             <ul class="text-sm ">
                                    <li v-for="e in content.errors" :key="e.index">
                                        {{e[0]}}
                                    </li>
                                </ul>
                            </div>
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
        type : {
            type : String,
            default : 'success'
        },
        content : {
            type : Object,
            default : 'hello !'
        }
    } 
    
}
</script>