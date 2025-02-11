<script setup>
import { ref, defineEmits, defineProps, watch } from "vue";
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

const preventScroll = () => {
    document.body.style.overflow = "hidden";
};

const allowScroll = () => {
    document.body.style.overflow = "";
};

watch(
    () => props.isOpen,
    (newValue) => {
        if (newValue) preventScroll();
        else allowScroll();
    }
);

const isOrganization = ref(false)
const JButton = () => {
    isOrganization.value = false
}
const YButton = () => {
    isOrganization.value = true

}
const saveData = async () => {
    try {
    const response = await client.put(`/student-update/${props.singleStudent.id}/`, singleStudent.value);
    console.log("Muvaffaqiyatli saqlandi:", response.data);
    closeModal();
  } catch (error) {
    console.error("Saqlashda xatolik:", error);
    alert("Saqlashda xatolik yuz berdi!");
  }
};

// const toggleRotate = () => {

//     isDropdownOpen.value = !isDropdownOpen.value;
// };
// const isDropdownOpen = ref(false);
</script>

<template>
    <div class="modal-overlay fixed bg-[#00000080] bottom-0 right-0 top-0 left-0 flex justify-center items-center z-1000"
        v-if="isOpen" @click.self="closeModal">

        <div class="modal-content bg-white p-[15px] rounded-[8px] max-w-[600px] w-full relative m-3">
            <div class="   ">
                <div class="flex items-center justify-between py-3">
                    <h1 class="text-2xl pb-3"><b> Tahrirlash </b></h1>
                    <span @click="closeModal" class="icon-cansol text-3xl"></span>
                </div>
                <div class="bg-white rounded-xl p-0">
                    <hr />
                    <div class="space-y-5 py-8 ">


                        <div class="space-y-2">
                            <span>F.I.Sh. (Familiya Ism Sharifingiz)</span>
                            <div>
                                <input type="text" v-model="singleStudent.full_name"
                                    class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <span>Telefon raqam</span>
                            <div>
                                <input type="text" v-model="singleStudent.phone"  pattern="^\+998\d{9}$" placeholder="+998 XX XXX XX XX" 
                                    class="p-3 border-2 bg-[#E0E7FF] w-full rounded-xl" />
                            </div>
                        </div>
                        <div class="space-y-2 pb-3 ">
                            <span> OTM </span>
                            <div class="flex items-center">
                                <input @click="toggleRotate" v-model="singleStudent.institute.name"
                                    class=" relative flex w-full bg-[#E0E7FF] p-3 rounded-xl border-2" />
                                <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                                    class=" absolute right-[30px]  icon-angle-down text-[12px] transition-transform duration-300 ease-in-out"></i>
                            </div>

                            <div class="space-y-2">
                                <span>  Kontrakt miqdori </span>  
                                <div class="flex items-center">
                                    <input @click="toggleRotate" v-model="singleStudent.contract"
                                        class="flex w-full bg-[#E0E7FF] p-3 rounded-xl border-2" />

                                </div>

                            </div>

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
    </div>
</template>

<style scoped></style>
