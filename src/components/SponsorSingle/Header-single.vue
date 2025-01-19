<script setup>
defineProps({
    singleSponsor: {
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
                <h1 class="text-3xl">{{ singleSponsor.full_name }}</h1>
                <div>
                    <span 
                        class="p-2 shadow-sm px-3 rounded-lg"
                        :class="{
                            'text-[#FFA445] bg-orange-100': singleSponsor.get_status_display === 'Moderatsiyada',
                            'text-[#00CF83] bg-[#DDFFF2]': singleSponsor.get_status_display === 'Tasdiqlangan',
                            'text-[#5BABF2] bg-blue-200': singleSponsor.get_status_display === 'Yangi'
                        }"
                    >
                        {{ singleSponsor.get_status_display }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>