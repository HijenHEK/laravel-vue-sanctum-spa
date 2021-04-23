<template>
  <div class="max-w-screen-lg mx-auto text-gray-900 md:flex md:flex-row md:justify-between md:items-start">
  
            <div class="border w-full md:w-4/12 mr-0 mb-6 md:mb-0 md:mr-6">
                <div  class="shadow-sm p-4 ">Settings</div>

                <div class="flex flex-col ">
                    

                    <router-link :to="{name : 'profile'}" class="p-4" active-class="text-white bg-blue-500"> Profile </router-link>

                    <router-link :to="{name : 'password'}" class="p-4" active-class="text-white bg-blue-500"> Password </router-link>


                </div>
            </div>
       
            
            <div class="border w-full ">
                <router-view></router-view>
            </div>
        
  </div>
</template>



