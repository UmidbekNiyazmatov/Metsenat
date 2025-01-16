<script setup>
  import {RouterLink} from 'vue-router'
  import { defineProps, } from 'vue';

  const props = defineProps({
    data: Object,
    index: Number
  })
</script>

<template>
  <div>
    <RouterLink :to="`/homiylar/${data.id}`">
      <div class="flex justify-between bg-white h-[68px] items-center px-[15px] rounded-lg mt-3">
        <div>
          <ul class="text-[15px] text-[#1D1D1F] flex gap-10">
            <li class="font-normal">{{ index + 1 }}</li>
            <li class="font-medium">{{ data.full_name }}</li>
          </ul>
        </div>

        <div>
          <ul class="text-[15px]  text-[#1D1D1F] flex">
            <li class="font-normal text-[14px] w-[160px] text-center">{{ data.phone }}</li>
            <li class="font-medium text-[14px] w-[160px] text-center ">
              <vue3-autocounter :startAmount="0" :endAmount="data.sum" :duration="1" ref="counter" :decimals="0" separator=" "/>
              <span class="text-[14px] text-[#B1B1B8]">UZS</span>
            </li>
            <li class="w-[160px] text-center" >{{ data.spent }}</li>
            <li class="font-medium text-[14px] w-[150px] text-center">{{ data.created_at.split("T")[0] }}</li>
            <li class="font-normal text-[15px] w-[150px] text-center">{{ data.get_status_display }}</li>
            <li class="pr-5 w-[70px] flex justify-center" ><img src="/public/eye.png" class="pl-5" alt=""></li>
          </ul>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped></style>