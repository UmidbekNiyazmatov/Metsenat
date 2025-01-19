<template>
  <div class="flex items-center  ">

    <!-- <span class="icon-search text-2xl text-gray-300 right-[600px] absolute z-10 "></span>
    <input type="search" placeholder="Izlash"
      class="p-3 pl-10 relative w-[300px] bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /> -->
    <div>
      

      <slot name="left" />
      <input :type="type" :disabled="disabled" :placeholder="placeholder"
        class="p-3 pl-10 relative w-[300px] bg-gray-100 border border-gray-300 rounded-lg outline-none "  />
      <slot name="right" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  lable: String,
  placeholder: String,
  type: String,
  disabled: Boolean
})

</script>