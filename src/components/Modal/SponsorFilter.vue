<template>
    <div class="modal-overlay  fixed bg-[#00000080] bottom-0 right-0 top-0 left-0 flex justify-center items-center z-1000 "
        v-if="isOpen" @click.self="closeModal">
        <div class="modal-content bg-white p-[15px] rounded-[8px] max-w-[600px] w-full relative m-3">

            <div class="   ">
                <div class="flex items-center justify-between">
                    <h1 class="text-2xl pb-3 "><b> Фильтр </b></h1>


                    <span @click="closeModal" class="icon-cansol text-3xl "></span>

                </div>
                <div class="  bg-white rounded-xl  p-0    ">
                    <hr>
                    <div class=" space-y-5 ">
                        <div class="space-y-2 pt-5 ">
                            <span> Ariza holati </span>
                            <div @click="toggleRotate"
                                class="flex items-center justify-between bg-[#E0E7FF] p-3 rounded-xl border-2 ">
                                Barchasi
                                <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                                    class="icon-angle-down  text-[12px] transition-transform duration-300 ease-in-out  "></i>
                            </div>
                            <div v-if="isDropdownOpen"
                                class=" absolute   bg-white border w-[570px]  rounded-xl shadow-lg z-10 ">

                                <div class=" border-b-[2px] p-3 w-full  ">
                                    Barchasi
                                </div>
                                <div class=" border-b-[2px] p-3 w-full  ">
                                    Yangi
                                </div>
                                <div class=" border-b-[2px] p-3 w-full  ">
                                    Moderatsiyada
                                </div>
                                <div class=" border-b-[2px] p-3 w-full  ">
                                    Tasdiqlangan
                                </div>
                                <div class=" border-b-[0px] p-3 w-full  ">
                                    Bekor qilingan
                                </div>
                            </div>


                        </div>
                        <div class="space-y-2">
                            <span>Homiylik summasi</span>
                            <div class=" grid grid-cols-4 gap-y-3 gap-x-3 ">
                                <div class="p-4 border-2 text-center rounded-md bg-[#E0E7FF] border-[#2E5BFF] ">Barchasi
                                </div>
                                <div class="p-4 border-2 text-center rounded-md ">1 000 000 </div>
                                <div class="p-4 border-2 text-center rounded-md ">5 000 000 </div>
                                <div class="p-4 border-2 text-center rounded-md "> 7 000 000</div>
                                <div class="p-4 border-2 text-center rounded-md ">10 000 000 </div>
                                <div class="p-4 border-2 text-center rounded-md ">30 000 000 </div>
                            </div>
                        </div>
                        <div class="space-y-2 pb-5 ">
                            <span>Sana</span>
                            <div>
                                <input type="date" name="" id="" class="p-3 border-2 w-3/6 rounded-xl ">

                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="flex justify-end gap-3 pt-5 ">
                        <CButton variant="filter" title="Tozalash">
                            <template #prefix>
                                <span class="icon-broom text-xl"></span>
                            </template>
                        </CButton>
                        <CButton variant="filter" title="Tozalash">
                            <template #prefix>
                                <span class="icon-broom text-xl"></span>
                            </template>
                        </CButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, defineEmits, defineProps, watch } from 'vue';
import CButton from "../Form/Button.vue"


const props = defineProps(["isOpen"]);
const emit = defineEmits(["close"]);

const closeModal = () => {
    emit("close")
};

const preventScroll = () => {
    document.body.style.overflow = "hidden"
};

const allowScroll = () => {
    document.body.style.overflow = ""
}

watch(
    () => props.isOpen,
    (newValue) => {
        if (newValue) preventScroll();
        else allowScroll()
    }
);

const toggleRotate = () => {

    isDropdownOpen.value = !isDropdownOpen.value;
};
const isDropdownOpen = ref(false);
</script>

<style scoped></style>