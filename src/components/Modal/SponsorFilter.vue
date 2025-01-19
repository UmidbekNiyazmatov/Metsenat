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
                        <div class="space-y-2 pt-5 " >
                            <span> Ariza holati </span>
                            <div class="flex items-center justify-between bg-[#E0E7FF] p-3 rounded-xl border-2 ">
                                Barchasi
                                <span class="icon-angle-down  "> </span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <span>Homiylik summasi</span>
                            <div class=" grid grid-cols-4 gap-y-3 gap-x-3 ">
                                <div class="p-4 border-2 text-center rounded-md bg-[#E0E7FF] border-[#2E5BFF] ">Barchasi
                                </div>
                                <div class="p-4 border-2 text-center rounded-md ">Barchasi </div>
                                <div class="p-4 border-2 text-center rounded-md ">Barchasi </div>
                                <div class="p-4 border-2 text-center rounded-md ">Barchasi </div>
                                <div class="p-4 border-2 text-center rounded-md ">Barchasi </div>
                                <div class="p-4 border-2 text-center rounded-md ">Barchasi </div>
                            </div>
                        </div>
                        <div class="space-y-2 pb-5 ">
                            <span>Sana</span>
                            <div>
                                <input type="date" name="" id="" class="p-3 border-2 w-3/6 rounded-xl ">

                            </div>
                        </div>
                    </div>
                    <hr  >
                    <div class="flex justify-end gap-3 pt-5 " >
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
const isRotated = ref(false);

const toggleRotate = () => {
    isRotated.value = !isRotated.value;
};
const Rotated = ref(false)
const Rotate = () => {
    Rotated.value = !Rotated.value;
};

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


</script>

<style scoped></style>