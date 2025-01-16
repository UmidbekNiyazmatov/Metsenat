<template>
    <div class="modal-overlay  fixed bg-[#00000080] bottom-0 right-0 top-0 left-0 flex justify-center items-center z-1000 "
        v-if="isOpen" @click.self="closeModal">
        <div class="modal-content bg-white p-[10px] rounded-[8px] max-w-[450px] w-full relative m-3">

            <div class="   ">
                <div class="flex items-center justify-between">
                    <h1 class="text-2xl pb-3 "><b> Фильтр </b></h1>


                    <span @click="closeModal" class="icon-cansol text-3xl "></span>

                </div>
                <div class="  bg-white rounded-xl  p-0    ">

                    <div class=" ">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, defineEmits, defineProps, watch } from 'vue';

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