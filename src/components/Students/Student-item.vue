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
    <RouterLink :to="`/Students/${data.id}`">
      <div class="flex  justify-between bg-white h-[68px] items-center px-[15px] rounded-lg mt-3">
        <div>
          <ul class="text-[15px] text-[#1D1D1F] flex gap-10">
            <li class="font-normal">{{ index + 1 }}</li>
            <li class="font-medium">{{ data.full_name }}</li>
          </ul>
        </div>

        <div>
          <ul class="text-[15px] items-center  text-[#1D1D1F] flex">
            <li class="font-normal text-[14px] w-[160px] text-center">{{ data.type }}</li>
            <li class="w-[200px] text-center" >{{ data.institute.name }}</li>
            <li class="font-medium text-[14px] w-[160px] text-center ">
              <vue3-autocounter :startAmount="0" :endAmount="data.given" :duration="1" ref="counter" :decimals="0" separator=" "/>
              <span class="text-[14px] text-[#B1B1B8]">UZS</span>
            </li>
            <li class="font-medium text-[14px] w-[160px] text-center ">
              <vue3-autocounter :startAmount="0" :endAmount="data.contract" :duration="1" ref="counter" :decimals="0" separator=" "/>
              <span class="text-[14px] text-[#B1B1B8]">UZS</span>
            </li>
            <li class="pr-5 w-[70px] flex justify-center" ><img src="/public/eye.png" class="pl-5" alt=""></li>
          </ul>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped></style>