<template>
    <div class=" bg-white p-10 shadow w-[800px] rounded-xl mt-16  space-y-6 ">
        <div class="flex items-center justify-between ">
            <h2 class="text-2xl">Homiy haqida </h2>
            <CButton variant="filter" title="Tahrirlash">
                <template #prefix>
                    <span class="icon-edit"></span>
                </template>
            </CButton>
        </div>
     
        <div class="flex items-center gap-5">
            <div class="p-5 bg-[#EAECF0] rounded-lg ">
                <img src="/public/Frame.png" alt="">
            </div>
            <span class="w-36"> {{ singleSponsor.full_name }}</span>
        </div>
        <div class="flex items-center">
            <div class="w-full">
                <div>telefon raqam</div>
                <span>{{ singleSponsor.phone }}</span>
            </div>
            <div class="w-full">
                <div>Homiylik summasi</div>
                <span>  {{formarPrice(singleSponsor.sum) }}
                    <span class="text-[14px] text-[#B1B1B8]">UZS</span></span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    singleSponsor: {
        type: Object,
        required: true 
    }
})
const formarPrice = (value) => {
      let val = (value / 1).toFixed('UZS').replace(' ', ' ')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }


import CButton from '../Form/Button.vue'

</script>

<style scoped></style>