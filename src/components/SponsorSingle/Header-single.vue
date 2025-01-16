<script setup>
defineProps({
    singleSponsor: {
        type: Object,
        required: true 
    }


})

</script>
<template>
    <div class=" bg-gray-50  ">
        <div class="container  ">
            <div class=" flex  items-center gap-6 py-5" >
                <span class="icon-arrow-left  text-3xl "> </span>
                <h1 class="text-3xl" >{{ singleSponsor.full_name }}</h1>
                <div> <span class=" p-2 shadow-sm px-3 rounded-lg    " > {{ singleSponsor.get_status_display }} </span> </div>
            </div>
        </div>
    </div>
</template>
