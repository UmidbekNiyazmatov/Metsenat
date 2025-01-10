<script setup>


import Navbar from "../components/Navbar/Navbar.vue"



</script>

<template>
  <div>
    <Navbar/>
    <slot/>
    
  </div>
<!--  
<div class="bg-slate-100"  >
    
    <Navbar/>
  
    
    <main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </main>

    <Footer />
   
  </div> -->


</template>

<style scoped>

</style>