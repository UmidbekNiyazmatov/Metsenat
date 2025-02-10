<script setup>
import studentItem from "./Student-item.vue";
import CButton from "../Form/Button.vue"
import { onMounted, ref } from "vue";
import client from "../../api/api";

let studentResult = ref({});
let page = ref(1);
let totalPages = ref(0);
let page_size = ref(10);
let search = ref("");

const GetPay = async () => {
    try {
        const { data } = await client.get("/student-list/", {
            params: {
                page: page.value,
                page_size: page_size.value,
                search: search.value,
            },
        });
        studentResult.value = data;
        totalPages.value = Math.ceil(data.count / page_size.value);
    } catch (error) {
        console.log(error);
    }
};

onMounted(() => {
    GetPay();
});


const changePage = (newPage) => {

    if (newPage > 0 && newPage <= totalPages.value) {
        page.value = newPage;
        GetPay();
    }
};


const changePageSize = (newSize) => {
    page_size.value = newSize;
    page.value = 1;
    GetPay();
};


const toggleRotate = () => {

    isDropdownOpen.value = !isDropdownOpen.value;
};




const isDropdownOpen = ref(false);




</script>

<template>
    <div class="containerMain mt-5">
        <div class="flex justify-end  py-5 w-full">
            <RouterLink to="/StudentsAdd/">
       
                <CButton @click="dd" variant="filter" title="Talaba qo'shish">
                    <template #prefix>
                        <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                            class="icon-plus   text-[20px] transition-transform duration-300 ease-in-out  "></i>
                    </template>
                </CButton>
            </RouterLink>
        </div>
        <table class="w-full">
            <thead>

                <div class="flex justify-between px-[15px]">
                    <div>
                        <ul class="text-[12px] text-[#B1B1B8] flex gap-10">
                            <li>#</li>
                            <li>F.I.SH.</li>
                        </ul>
                    </div>

                    <div>
                        <ul class="text-[12px] text-[#B1B1B8] flex">
                            <li class="w-[160px] text-center">TALABALIK TURI</li>
                            <li class="w-[200px] text-center">OTM</li>
                            <li class="w-[160px] text-center">AJRATILINGAN SUMMA</li>
                            <li class="w-[150px] text-center">KONTRAKT MIQDORI</li>
                            <li class="w-[70px] text-center"> AMALLAR</li>
                        </ul>
                    </div>
                </div>
            </thead>

            <tbody class="flex flex-col gap-1">

                <studentItem v-for="(homiy, index) in studentResult.results" :key="homiy.id" :data="homiy"
                    :index="(page - 1) * page_size + index * 1" />
            </tbody>
        </table>

        <div class="container">
            <div class="flex items-center justify-between py-5">
                <div>
                    <p>{{ studentResult.count }} tadan {{ (page - 1) * page_size + 1 }}-{{ Math.min(page * page_size,
                        studentResult.count) }} ko‘rsatilmoqda</p>
                </div>
                <div class="flex items-center gap-2">
                    <p>Ko‘rsatish</p>
                    <div>

                        <CButton @click="toggleRotate" variant="pageSize" title="10">
                            <template #suffix>
                                <i :class="{ 'rotate-180': isDropdownOpen, '-rotate-0': !isDropdownOpen }"
                                    class="icon-angle-down  text-[12px] transition-transform duration-300 ease-in-out  "></i>
                            </template>
                        </CButton>
                        <div v-if="isDropdownOpen" class="   bg-white border rounded-lg shadow-lg z-10 ">

                            <div class="absolute ">
                                <button class="flex items-center  gap-2 px-[13px] bg-white rounded-md shadow"
                                    @click="changePageSize(10)">
                                    <span class="text-lg">10</span>
                                </button>
                                <button class="flex items-center gap-2 px-[13px] bg-white rounded-md shadow"
                                    @click="changePageSize(20)">
                                    <span class="text-lg">20</span>
                                </button>
                                <button class="flex items-center gap-2 px-[13px] bg-white rounded-md shadow"
                                    @click="changePageSize(50)">
                                    <span class="text-lg">50</span>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div class="flex  ">
                        <button @click="changePage(page - 1)" :disabled="page === 1"
                            class="rotate-90 bg-white px-2 disabled:bg-[#DFE3E8] rounded-md shadow  ">
                            <span class="icon-angle-down text-[#979797]  "></span>
                        </button>

                        <div v-for="p in totalPages" :key="p">
                            <button v-if="p >= page - 2 && p <= page + 2" @click="changePage(p)"
                                class="px-2 ml-2 bg-white border rounded-md shadow text-lg"
                                :class="{ 'text-blue-500 border-blue-500': p === page }">
                                {{ p }}
                            </button>
                        </div>


                        <button @click="changePage(page + 1)" :disabled="page === totalPages"
                            class="-rotate-90 bg-white disabled:bg-[#DFE3E8] px-2 rounded-md shadow  ">
                            <span class="icon-angle-down text-[#979797]"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
