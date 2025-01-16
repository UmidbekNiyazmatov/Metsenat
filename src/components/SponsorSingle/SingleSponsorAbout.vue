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
        <!-- <p>{{ data.phone }}</p> -->
        <div class="flex items-center gap-5">
            <div class="p-5 bg-[#EAECF0] rounded-lg ">
                <img src="/public/Frame.png" alt="">
            </div>
            <span class="w-36"> {{ data.full_name }}</span>
        </div>
        <div class="flex items-center">
            <div class="w-full">
                <div>telefon raqam</div>
                <span>{{ data.phone }}</span>
            </div>
            <div class="w-full">
                <div>Homiylik summasi</div>
                <span>    <vue3-autocounter :startAmount="0" :endAmount="data.sum" :duration="1" ref="counter" :decimals="0" separator=" "/>
                    <span class="text-[14px] text-[#B1B1B8]">UZS</span></span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: {
        type: Object,
        required: true
    },
    index: {
        type: Number,
        required: false
    }
})

import CButton from '../Form/Button.vue'

</script>

<style scoped></style>