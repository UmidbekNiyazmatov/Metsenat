<script setup >
import CButton from "../Form/Button.vue"
</script>
<template>
   <header class="bg-white py-3 shadow">
     <div class="container mx-auto px-4 py-4 flex justify-between items-center">
       <div class="flex items-center space-x-4">
         <img src="/public/Logo.svg" alt="Metsenat Pro" class="h-8" />
     
       </div>
       <div class="flex items-center gap-16">
         
      
         <CButton  variant="user" title="Shoxrux">
              <template #suffix>
                  <span class="icon-user text-3xl text-white bg-[#00AE69] px-1 pt-2 rounded"></span>
              </template>
         </CButton>

         <CButton  variant="" title="">
              <template #suffix>
                  <span class="icon-log-out text-4xl text-[#B1B1B8] "></span>
              </template>
         </CButton>
         
       </div>
     </div>
   </header>
 </template>
 
