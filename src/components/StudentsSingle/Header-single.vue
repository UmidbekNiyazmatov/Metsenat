<script setup>
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
            <div class="flex items-center gap-6 py-5">
                <span @click="$router.go(-1)" class="icon-arrow-left text-3xl"></span>
                <h1 class="text-3xl">{{ singleStudent.full_name }}</h1>
                <div>
                 
                </div>
            </div>
        </div>
    </div>
</template>