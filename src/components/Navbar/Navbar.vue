<template>
   <header class="bg-white shadow">
     <div class="container mx-auto px-4 py-4 flex justify-between items-center">
       <div class="flex items-center space-x-4">
         <img src="/public/Logo.png" alt="Metsenat Pro" class="h-8" />
         <!-- <h1 class="text-xl font-bold text-gray-800">
           METSENAT <span class="text-green-600">PRO</span>
         </h1> -->
       </div>
       <div class="flex items-center gap-16">
         
         <div class="flex items-center bg-gray-200 rounded-lg p-1  ">
           <span class="px-5" >Shohruh</span>
           <span  class=" icon-user text-white  text-2xl bg-green-600  p-2 rounded-lg "></span>
           <!-- <img src="avatar-placeholder.png" alt="User avatar" class="w-8 h-8 rounded-full" /> -->
         </div>
         <button class=" rounded- text-gray-400 hover:text-gray-800">
           <span class="icon-log-out text-4xl " ></span>
         </button>
       </div>
     </div>
   </header>
 </template>
 
 <script>
 export default {
   name: "Header",
 };
 </script>