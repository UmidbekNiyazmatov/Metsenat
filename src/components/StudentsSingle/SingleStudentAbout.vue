<script setup>
import { ref } from "vue";
import SSingleModal from "../Modal/SSingleModal.vue";

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

// const isFirm = ref( !!singleSponsor.firm);



</script>
<template>
  <div class="bg-white p-10 shadow w-[800px] rounded-xl mt-16 space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl">Homiy haqida</h2>
      <CButton @click="openModal" variant="filter" title="Tahrirlash">
        <template #prefix>
          <span class="icon-edit"></span>
        </template>
      </CButton>

      <SSingleModal :isOpen="isOpenModal" @close="closeModal" :singleSponsor="singleSponsor" class="z-10" />
    </div>

    <div class="flex items-center gap-5">
      <div class="p-5 bg-[#EAECF0] rounded-lg">
        <img src="/public/Frame.png" alt="" />
      </div>
      <span class="w-36"> {{ singleStudent.full_name }}</span>
    </div>
    <div class=" items-center grid grid-cols-2 gap-y-5 ">
      <div class="w-full">
        <div>telefon raqam</div>
        <span>{{ singleStudent.phone }}</span>
      </div>
      <div class="w-full">
        <div>Homiylik summasi</div>
        <span>
          {{ formarPrice(singleStudent.sum) }}
          <span class="text-[14px] text-[#B1B1B8]">UZS</span></span>
      </div>
      <div v-if="singleStudent.firm == ''" class="w-full ">
      
      </div>
      <div v-else class="w-full ">
        <div>Tashkilot nomi</div>

{{ singleStudent.firm }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
