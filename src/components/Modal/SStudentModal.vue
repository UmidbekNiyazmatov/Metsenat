<template>
    <div class="modal-overlay fixed bg-[#00000080] bottom-0 right-0 top-0 left-0 flex justify-center items-center z-1000"
        v-if="isOpen" @click.self="closeModal">

        <div class="modal-content bg-white p-[15px] rounded-[8px] max-w-[600px] w-full relative m-3">
            <div>
                <div class="flex items-center justify-between py-3">
                    <h1 class="text-2xl pb-3"><b> Tahrirlash </b></h1>
                    <span @click="closeModal" class="icon-cansol text-3xl cursor-pointer"></span>
                </div>

                <div class="space-y-5 py-8">
   
                    <div class="space-y-2">
                        <span>F.I.Sh. (Familiya Ism Sharifingiz)</span>
                        <input type="text" v-model="editedStudent.full_name"
                            class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
                    </div>


                    <div class="space-y-2">
                        <span>Telefon raqam</span>
                        <input type="text" v-model="editedStudent.phone" placeholder="+998 XX XXX XX XX"
                            class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl " />

                    </div>


                    <div class="space-y-2">
                        <span>OTM</span>
                        <div class="relative">
                            <input @click="toggleDropdown" v-model="selectedUniversityName" readonly
                                placeholder="OTM ni tanlang"
                                class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl cursor-pointer" />
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

     
                    <div class="space-y-2">
                        <span>Kontrakt miqdori</span>
                        <input v-model="editedStudent.contract" type="number"
                            class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
                    </div>

                    <hr />


                    <div class="flex justify-end gap-3 pt-5">
                        <CButton @click="saveData"
                            class="py-3 px-8 bg-[#3366FF] rounded-[5px] text-[14px] font-medium text-white w-fit"
                            title="Saqlash">
                            <template #prefix>
                                <span class="icon-save pr-2"></span>
                            </template>
                        </CButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, watch, onMounted, computed } from "vue";
import CButton from "../Form/Button.vue";
import client from "../../api/api";

const props = defineProps({
    singleStudent: {
        type: Object,
        required: true,
    },
    isOpen: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["close"]);
const closeModal = () => emit("close");


const universities = ref([]);
const isDropdownOpen = ref(false);
const selectedUniversityName = ref("");
const editedStudent = ref({ ...props.singleStudent });


const getUniversities = async () => {
    try {
        const response = await client.get("institute-list");
        universities.value = response.data;

        const selectedUni = universities.value.find(uni => uni.id === editedStudent.value.institute);
        if (selectedUni) {
            selectedUniversityName.value = selectedUni.name;
        }
    } catch (error) {
        console.error("Universitetlarni olishda xatolik:", error);
    }
};


const selectUniversity = (uni) => {
    editedStudent.value.institute = uni.id; 
    selectedUniversityName.value = uni.name; 
    isDropdownOpen.value = false;
};


const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};




const saveData = async () => {


    try {
        const response = await client.put(`/student-update/${editedStudent.value.id}/`, {
            full_name: editedStudent.value.full_name,
            phone: editedStudent.value.phone,
            institute: editedStudent.value.institute, 
            contract: editedStudent.value.contract
        });

        console.log(" Muvaffaqiyatli saqlandi:", response.data);
        alert(" Ma’lumotlar muvaffaqiyatli yangilandi!");
        closeModal();
    } catch (error) {
        console.error(" Xatolik:", error.response?.data || error.message);
        alert(" Yangilashda xatolik yuz berdi!\n" + JSON.stringify(error.response?.data, null, 2));
    }
};


onMounted(() => {
    getUniversities();
});
</script>

<style scoped></style>
