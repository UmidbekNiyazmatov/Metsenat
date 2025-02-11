<script setup>
import { ref } from "vue";
import SSingleModal from "../Modal/SStudentModal.vue";

import CButton from "../Form/Button.vue";

defineProps({
    singleStudent: {
        type: Object,
        required: true,
    },
});
const formarPrice = (value) => {
    let val = (value / 1).toFixed("UZS").replace(" ", " ");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const isOpenModal = ref(false)

const openModal = () => {
    isOpenModal.value = true;
};

const closeModal = () => {
    isOpenModal.value = false
}




</script>
<template>
    <div class="">
        <div class="bg-white p-8 shadow w-[800px] rounded-xl mt-16 space-y-6">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl">Talaba haqida</h2>
                <CButton @click="openModal" variant="filter" title="Tahrirlash">
                    <template #prefix>
                        <span class="icon-edit"></span>
                    </template>
                </CButton>

                <SSingleModal :isOpen="isOpenModal" @close="closeModal" :singleStudent="singleStudent" class="z-10" />
            </div>
            <div class="flex items-center">
                <div class=" flex justify-center w-[200px]     text-[#3366FF] bg-[#E5EBFF]">Asosiy ma’lumotlar </div>
                <hr class="w-full">
            </div>
            <div class="flex items-center gap-5">
                <div class="p-5 bg-[#EAECF0] rounded-lg">
                    <img src="/public/Frame.png" alt="" />
                </div>
                <span class="w-36"> {{ singleStudent.full_name }}</span>
            </div>
            <div class="  ">
                <div class="w-full">
                    <div>telefon raqam</div>
                    <span>{{ singleStudent.phone }}</span>
                </div>
                <div class="flex items-center py-5 ">
                    <div class=" flex justify-center w-[200px]     text-[#3366FF] bg-[#E5EBFF]">Asosiy ma’lumotlar
                    </div>
                    <hr class="w-full">
                </div>
                <div class="grid grid-cols-2 gap-5 ">
                    <div class="w-full">
                        <div>OTM</div>
                        <span>
                            {{ singleStudent.institute }}
                        </span>
                    </div>
                    <div class="w-full">
                        <div>Talabalik turi</div>
                        <span>
                            {{ singleStudent.type }}
                        </span>
                    </div>
                    <div class="w-full">
                        <div>Ajratilingan summa</div>
                        <span>
                            {{ formarPrice(singleStudent.given) }}
                            <span class="text-[14px] text-[#B1B1B8]">UZS</span></span>
                    </div>
                    <div class="w-full">
                        <div>Kontrakt miqdori</div>
                        <span>
                            {{ formarPrice(singleStudent.contract) }}
                            <span class="text-[14px] text-[#B1B1B8]">UZS</span></span>
                    </div>
                </div>
                <!-- <div v-if="singleStudent.firm == ''" class="w-full ">
      
      </div>
      <div v-else class="w-full ">
        <div>Tashkilot nomi</div>

{{ singleStudent.firm }}
      </div> -->
            </div>
        </div>
        <div class="bg-white p-8 shadow w-[800px] rounded-xl mt-16 space-y-6">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl">Talabaga homiylar</h2>
                <CButton @click="dd" variant="filter" title="Homiy qo‘shish">
                    <template #prefix>
                        <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                            class="icon-plus   text-[20px] transition-transform duration-300 ease-in-out  "></i>
                    </template>
                </CButton>

                <SSingleModal :isOpen="isOpenModal" @close="closeModal" :singleStudent="singleStudent" class="z-10" />
            </div>



        </div>
    </div>

</template>

<style scoped></style>
