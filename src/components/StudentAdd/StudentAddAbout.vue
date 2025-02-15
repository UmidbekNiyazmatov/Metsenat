<template>
    <div class="bg-white p-8 shadow w-[800px] rounded-xl mt-16 space-y-6">
        <div class="flex justify-between gap-8">
            <div class="w-full space-y-2">
                <span>F.I.Sh. (Familiya Ism Sharifingiz)</span>
                <input v-model="newStudent.full_name" type="text" placeholder="Ism Familiya"
                    class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
            </div>
            <div class="w-full space-y-2">
                <span>Telefon raqam</span>
                <input v-model="newStudent.phone" type="text" placeholder="+998 XX XXX XX XX"
                    class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
            </div>
        </div>

        <div class="space-y-2">
            <span>OTM</span>
            <div class="flex items-center relative">
                <input @click="toggleDropdown" v-model="selectedUniversityName" readonly placeholder="OTM ni tanlang"
                    class=" flex w-full bg-[#E0E7FF] p-3 rounded-xl border-2" />
                <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                    class="absolute right-[15px] icon-angle-down text-[12px] transition-transform duration-300 ease-in-out"></i>


                <ul v-if="isDropdownOpen"
                    class="absolute bg-white shadow-lg rounded-lg w-full top-14 max-h-40 overflow-auto z-10">
                    <li v-for="uni in universities" :key="uni.id" @click="selectUniversity(uni)"
                        class="p-2 hover:bg-gray-200 cursor-pointer">
                        {{ uni.name }}
                    </li>
                </ul>
            </div>

        </div>

        <div class="flex justify-between gap-8">
            <div class="w-full space-y-2">
                <span>Talabalik turi</span>
                <input v-model="newStudent.studentType" placeholder="Barchasi"
                    class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
            </div>
            <div class="w-full space-y-2">
                <span>Kontrakt summa</span>
                <input v-model="newStudent.contractAmount" type="number" placeholder="Summa (UZS)"
                    class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
            </div>
        </div>

        <div class="flex justify-end">
            <CButton @click="addStudent" variant="plus" title="Qo‘shish">
                <template #prefix>
                    <span class="icon-plus text-[20px]"></span>
                </template>
            </CButton>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import client from "../../api/api";
import CButton from "../Form/Button.vue";


const newStudent = ref({
    full_name: "",
    phone: "",
    university: null, 
    contractAmount: null
});


const universities = ref([]);
const isDropdownOpen = ref(false);
const selectedUniversityName = ref("");


const getUniversities = async () => {
    try {
        const response = await client.get("institute-list");
        universities.value = response.data;
    } catch (error) {
        console.error(" Universitetlarni olishda xatolik:", error);
    }
};


const selectUniversity = (uni) => {
    newStudent.value.university = uni.id; 
    selectedUniversityName.value = uni.name; 
    isDropdownOpen.value = false;
};


const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

// Talabani qo'shish
const addStudent = async () => {
    if (!newStudent.value.full_name || !newStudent.value.phone || !newStudent.value.university || !newStudent.value.contractAmount) {
        alert(" Barcha maydonlarni to‘ldiring!");
        return;
    }

    try {
        const response = await client.post("/student-create/", {
            full_name: newStudent.value.full_name,
            phone: newStudent.value.phone,
            institute: newStudent.value.university,
            contract: newStudent.value.contractAmount
        });

        console.log(" Yangi talaba qo‘shildi:", response.data);
        alert(" Talaba muvaffaqiyatli qo‘shildi!");


        newStudent.value = { full_name: "", phone: "", university: null, contractAmount: null };
        selectedUniversityName.value = "";

    } catch (error) {
        console.error(" Xatolik:", error.response?.data || error.message);
        alert(" Talaba qo‘shishda xatolik yuz berdi!\n" + JSON.stringify(error.response?.data, null, 2));
    }
};


onMounted(() => {
    getUniversities();
});
</script>

<style scoped></style>
