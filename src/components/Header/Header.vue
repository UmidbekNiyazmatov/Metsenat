<script setup >
import Search from "../Form/Search.vue"




</script>
<template>
    <nav class=" bg-gray-50   ">
      <div class="container    ">
        <div class="flex justify-between py-5 ">
       
          <div>
            <router-link to="/">
            <button
              class="py-2 px-10 border-2 rounded-l-lg  text-blue-600  active:  active:text-white  active:bg-blue-600 active:border-blue-600 font-medium"
            >
              DASHBOARD
            </button>
          </router-link>
            <router-link to="/homiylar">
            <button class="py-2 px-10 border-2 text-blue-600   active:text-white  active:bg-blue-600 active:border-blue-600 font-medium">
              HOMIYLAR
            </button>
          </router-link>
            <button class="py-2 px-10 border-2 text-blue-600   active:text-white  active:bg-blue-600 active:border-blue-600 font-medium">
              TALABALAR
            </button>
          </div>
        <Search />
    </div>
      </div>
      
    </nav>
</template>
  
