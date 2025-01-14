<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        defolt: 'primary'
    },
    title: {
        type: String,
        required: true
    }
})
const buttonColor = computed(() => {
    switch (props.variant) {
        case 'user':
                return 'text-[13px] py-1 px-1 pl-5 bg-[#F1F1F3] rounded-md  font-bold flex items-center gap-6'
        case 'filter':
            return 'py-3 px-8 bg-[#EDF1FD] rounded-[5px] text-[14px] font-medium text-[#3365FC] w-fit flex items-center gap-[10px]'
        case 'number':
        return 'text-[15px] font-normal text-[#1D1D1F] bg-[#FFFFFF] px-1 py-[5] w-fit border border-[#DFE3E8] rounded-[4px]'
        case 'edit':
        return 'py-3 px-8 bg-[#EDF1FD] rounded-[5px] text-[14px] font-medium text-[#3365FC] w-fit flex items-center gap-[10px]' 
    }
})
</script>

<template>
 <div>
  <div :class="buttonColor">
    <slot name="prefix"></slot>
    <button >
        {{ title }}
    </button>
    <slot name="suffix"></slot>
  </div>
 </div>
</template>

<style scoped>

</style>