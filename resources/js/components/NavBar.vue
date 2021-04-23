<template>
    <div class="shadow-md bg-white ">
        <div class="max-w-screen-lg mx-auto flex justify-between">
            <div class=" font-semibold tracking-wider	text-lg  p-4 ">
                Laravel Vue
            </div>

            <div class="relative">
                <div @click="drop=!drop" class=" cursor-pointer p-4  font-semibold tracking-wider text-lg"> Foulen </div>

                <div v-if="drop" class="absolute bg-white border z-10 shadow-md flex w-auto flex-col ">
                    <router-link class="p-4 " :to="{ name: 'login' }">
                        Settings
                    </router-link>
                    <div class="p-4 ">
                        Logout
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drop : false
        }
    }
}
</script>