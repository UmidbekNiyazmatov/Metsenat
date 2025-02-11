<script setup>
import { ref, defineEmits, defineProps, watch } from "vue";
import CButton from "../Form/Button.vue";
import client from "../../api/api";

const props = defineProps({
  singleSponsor: {
    type: Object,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false, 
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => emit("close");

const preventScroll = () => {
  document.body.style.overflow = "hidden";
};

const allowScroll = () => {
  document.body.style.overflow = "";
};

watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) preventScroll();
    else allowScroll();
  }
);

const isOrganization = ref(false)
const JButton = () => {
  isOrganization.value = false
}
const YButton = () => {
  isOrganization.value = true

}
const saveData = async () => {
  try {
    const response = await client.put(`/sponsor-update/${props.singleSponsor.id}/`, props.singleSponsor);
    console.log("Muvaffaqiyatli saqlandi:", response.data);

    closeModal();
  } catch (error) {
    console.error("Saqlashda xatolik:", error);
    alert("Saqlashda xatolik yuz berdi!"); 
  }
};

// const toggleRotate = () => {

//     isDropdownOpen.value = !isDropdownOpen.value;
// };
// const isDropdownOpen = ref(false);
</script>

<template>
  <div class="modal-overlay fixed bg-[#00000080] bottom-0 right-0 top-0 left-0 flex justify-center items-center z-1000"
    v-if="isOpen" @click.self="closeModal">

    <div class="modal-content bg-white p-[15px] rounded-[8px] max-w-[600px] w-full relative m-3">
      <div class="   ">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl pb-3"><b> Tahrirlash </b></h1>
          <span @click="closeModal" class="icon-cansol text-3xl"></span>
        </div>
        <div class="bg-white rounded-xl p-0">
          <hr />
          <div class="space-y-5 pb-5">
            <div class="flex w-full pt-5">
              <div @click="JButton" :class="{ 'bg-[#3366FF] border-[#3366FF]  text-white': !isOrganization }"
                class="border-2 border-r-[1px] w-full text-center rounded-l-lg p-3 ">
                Jismoniy shaxs
              </div>
              <div @click="YButton" :class="{ 'bg-[#3366FF] border-[#3366FF]  text-white': isOrganization }"
                class="border-2 border-l-[1px] w-full text-center rounded-r-lg p-3">
                Yuridik shaxs
              </div>
            </div>

            <div class="space-y-2">
              <span>F.I.Sh. (Familiya Ism Sharifingiz)</span>
              <div>
                <input type="text" v-model="singleSponsor.full_name"
                  class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
              </div>
            </div>
            <div class="space-y-2">
              <span>Telefon raqam</span>
              <div>
                <input type="text" v-model="singleSponsor.phone" class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
              </div>
            </div>
            <div class="space-y-2  ">
              <span> Holati </span>
              <div class="flex items-center">
                <input @click="toggleRotate" v-model="singleSponsor.get_status_display"
                  class=" relative flex w-full bg-[#E0E7FF] p-3 rounded-xl border-2" />
                <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                  class=" absolute right-[30px]  icon-angle-down text-[12px] transition-transform duration-300 ease-in-out"></i>
              </div>

              <div class="space-y-2">
                <span> Homiylik summasi </span>
                <div class="flex items-center">
                  <input @click="toggleRotate" v-model="singleSponsor.sum"
                    class=" relative flex w-full bg-[#E0E7FF] p-3 rounded-xl border-2" /> 
                  <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                    class=" absolute right-[30px]  icon-angle-down text-[12px] transition-transform duration-300 ease-in-out"></i>
                </div>

              </div>
              <div class="space-y-2">
                <span> To‘lov turi </span>
                <div class="flex items-center">
                  <input @click="toggleRotate" value="Pul o‘tkazmalari"
                    class=" relative flex w-full bg-[#E0E7FF] p-3 rounded-xl border-2" />
                  <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                    class=" absolute right-[30px]  icon-angle-down text-[12px] transition-transform duration-300 ease-in-out"></i>
                </div>

              </div>

              <div v-if="isOrganization" class="space-y-2">
                <span>Tashkilot nomi</span>
                <div>
                  <input type="text" v-model="singleSponsor.firm" class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
                </div>
              </div>
            </div>
            <hr />
            <div class="flex justify-end gap-3 pt-5">
              <CButton  @click="saveData " class="py-3 px-8 bg-[#3366FF] rounded-[5px] text-[14px] font-medium text-white w-fit"
                title="Saqlash">
                <template #prefix>
                  <span class="icon-save pr-2"></span>
                </template>
              </CButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
