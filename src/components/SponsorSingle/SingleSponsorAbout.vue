<template>
    <div>
        <h2>{{ data.full_name }}</h2>
        <p>{{ data.phone }}</p>
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
</script>

<style scoped></style>