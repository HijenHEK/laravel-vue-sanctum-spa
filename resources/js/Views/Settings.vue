<template>
  <div class="max-w-screen-lg mx-auto text-gray-900 md:flex md:flex-row md:justify-between md:items-start">
  
            <div class="border w-full md:w-4/12 mr-0 mb-6 md:mb-0 md:mr-6 ">
                <div  class="border p-4 font-semibold ">Settings</div>

                <div class="flex flex-col  bg-white">
                    

                    <router-link :to="{name : 'profile'}" class="p-4 flex items-center" active-class="text-white bg-blue-500"> 
                        <UserIcon class="h-5 w-5 mr-3"  />
                        Profile 
                    </router-link>

                    <router-link :to="{name : 'password'}" class="p-4 flex items-center" active-class="text-white bg-blue-500"> 
                        <KeyIcon class="h-5 w-5 mr-3"  />
                        Password 
                    </router-link>


                </div>
            </div>
       
            
            <div class="border w-full none ">
                
                        
                <router-view />
                        
            </div>
        
  </div>
</template>


<script>
import {UserIcon , KeyIcon} from '@heroicons/vue/outline'
export default {
    components : {
        UserIcon , KeyIcon
    }
}
</script>





