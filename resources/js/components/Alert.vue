<template >
  <div :class="classes" role="alert">
                            <!-- <strong class="font-bold">Holy smokes!</strong> -->
                            <span class="block sm:inline w-full text-center">{{content}}</span>
                            <span @click="$emit('close')" class="">
                                    <XIcon class="h-4 w-4 font-bold"></XIcon>
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
            type : String,
            default : 'hello !'
        }
    } , 
    data() {
        return {
            class : 'flex items-center border px-4 py-3 rounded relative md:w-10/12 md:p-2 w-full mx-auto'
        }
    } ,
    computed : {
        classes () {
            switch (this.type) {
                case "success":
                    return  this.class + " bg-red-100 border border-red-400 text-red-600 "
                    break;
                case "danger":
                    return this.class + " bg-red-100 border border-red-400 text-red-600 "
                    break;
            
                default:
                    break;
            }
        }
    }
}
</script>