<script setup>
import CButton from "../Form/Button.vue"
defineProps({
    singleStudent: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="bg-gray-50">
        <div class="container">
            <div class="flex items-center gap-6 py-">
                <span @click="$router.go(-1)" class="icon-arrow-left text-3xl"></span>
                <h1 class="text-3xl  w-full">{{ singleStudent.full_name }}</h1>
                <div class="flex justify-end w-3/12  py-5">
                    <CButton @click="dd" variant="filter" title="Homiy qo‘shish">
                        <template #prefix>
                            <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                                class="icon-plus   text-[20px] transition-transform duration-300 ease-in-out  "></i>
                        </template>
                    </CButton>
                </div>
            </div>
        </div>
    </div>
</template>