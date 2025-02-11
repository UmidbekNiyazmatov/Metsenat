<script setup>
import { ref } from "vue";
import client from "../../api/api";

import CButton from "../Form/Button.vue";

defineProps({
    singleStudent: {
        type: Object,
        required: true,
    },
});
const formarPrice = (value) => {
    let val = (value / 1).toFixed("UZS").replace(" ", " ");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

// const toggleRotate = () => {

//     isDropdownOpen.value = !isDropdownOpen.value;
// };
// const isDropdownOpen = ref(false);

const saveData = async () => {
  try {
    const response = await client.put(`/student-update/${singleStudent.id}/`, singleStudent);
    console.log("Muvaffaqiyatli saqlandi:", response.data);


  } catch (error) {
    console.error("Saqlashda xatolik:", error);
    alert("Saqlashda xatolik yuz berdi!"); 
  }
};



</script>
<template>

    <div class="bg-white p-8 shadow w-[800px] rounded-xl mt-16 space-y-6">
       
        <div class="flex justify-between gap-8 ">
            <div class="w-full space-y-2">
                <span>F.I.Sh. (Familiya Ism Sharifingiz)</span>
                <div>
                    <input type="text" placeholder="Abdullayev Abdulla Abdulla o’g’li" class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
                </div>
            </div>
            <div class=" w-full space-y-2">
                <span>Telefon raqam</span>
                <div>
                    <input type="text" value="+998" placeholder="00 000-00-00" class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
                </div>
            </div>

        </div>
        <div>
            <div class="space-y-2   ">
                <span> OTM</span>
                <div class="flex items-center relative">
                    <input @click="toggleRotate" placeholder="OTM ni tanlang" class="  flex w-full bg-[#E0E7FF] p-3 rounded-xl border-2" />
                    <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                        class=" absolute right-[15px]  icon-angle-down text-[12px] transition-transform duration-300 ease-in-out"></i>
                </div>

            </div>
        </div>
        <div class="flex justify-between gap-8 ">
            <div class="w-full space-y-2">
                <span> Talabalik turi </span>
                <div class="flex items-center relative">
                    <input @click="toggleRotate" placeholder="Barchasi" class="  flex w-full bg-[#E0E7FF] p-3 rounded-xl border-2" />
                    <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                        class=" absolute right-[15px]  icon-angle-down text-[12px] transition-transform duration-300 ease-in-out"></i>
                </div>

            </div>
            <div class=" w-full space-y-2">
                <span>Kontrakt summa</span>
                <div>
                    <input type="text" placeholder="Summani kiriting" class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
                </div>
            </div>
        </div>
        <div class="flex justify-end" >
            <CButton @click="saveData " variant="plus" title="Qo‘shish">
                <template #prefix>
                    <span class="icon-plus text-[20px]"></span>
                </template>
            </CButton>
        </div>
    </div>

</template>

<style scoped></style>