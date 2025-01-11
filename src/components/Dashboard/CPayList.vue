<template>
    <div class="bg-white shadow flex items-center gap-5 rounded-lg p-6 ">
      <span :class="['icon-money text-3xl rounded-xl p-3 bg-blue-300  ', colorClass]" ></span>
      <div class="" >
      <h2 class="text-lg  text-gray-400">{{ title }}</h2>
      <vue3-autocounter
      class="text-2xl font-pro-bold"
      ref="counter"
      :startAmount="0"
      :endAmount="totalNumber"
      :duration="3"
      separator=" "
      :decimals="0"
    />
      
      <span class=" font-pro-bold text-2xl text-gray-300 " >UZS</span>
      
    </div>
    </div>
</template>
  
<script setup >

import {defineProps} from "vue" ;
import Vue3autocounter from 'vue3-autocounter';

defineProps({
 
    title: String,
    totalNumber: Number,
    colorClass:String,
    components: {
    'vue3-autocounter': Vue3autocounter
  }
})


</script>