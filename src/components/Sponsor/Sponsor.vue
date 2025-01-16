<script setup>
import sponsorItem from "./Sponsor-item.vue";
import { onMounted, ref } from "vue";
import client from "../../api/api";

let sponsorResult = ref({});
let page = ref(1);
let totalPages = ref(0);
let page_size = ref(10);
let search = ref("");

const GetPay = async () => {
  try {
    const { data } = await client.get("sponsor-list/", {
      params: {
        page: page.value,
        page_size: page_size.value,
        search: search.value,
      },
    });
    sponsorResult.value = data;
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
              <li class="w-[160px] text-center">TEL.RAQAMI</li>
              <li class="w-[160px] text-center">HOMIYLIK SUMMASI</li>
              <li class="w-[160px] text-center">SARFLANGAN SUMMA</li>
              <li class="w-[150px] text-center">SANA</li>
              <li class="w-[150px] text-center">HOLATI</li>
              <li class="w-[70px] text-center"> AMALLAR</li>
            </ul>
          </div>
        </div>
      </thead>

      <tbody class="flex flex-col gap-1">

        <sponsorItem v-for="(homiy, index) in sponsorResult.results" :key="homiy.id" :data="homiy"
          :index="(page - 1) * page_size + index * 1" />
      </tbody>
    </table>

    <div class="container">
      <div class="flex items-center justify-between py-5">
        <div>
          <p>{{ sponsorResult.count }} tadan {{ (page - 1) * page_size + 1 }}-{{ Math.min(page * page_size,
            sponsorResult.count) }} ko‘rsatilmoqda</p>
        </div>
        <div class="flex items-center gap-2">
          <p>Ko‘rsatish</p>
          <div>
            <button @click="toggleRotate" class="p-1">regre</button>
            <div v-if="isDropdownOpen" class="   mt-2 bg-white border rounded-lg shadow-lg z-10 w-auto">

              <div class="absolute">
                <button class="flex items-center gap-2 px-2 bg-white rounded-md shadow" @click="changePageSize(10)">
                  <span class="text-lg">10</span>
                </button>
                <button class="flex items-center gap-2 px-2 bg-white rounded-md shadow" @click="changePageSize(20)">
                  <span class="text-lg">20</span>
                </button>
                <button class="flex items-center gap-2 px-2 bg-white rounded-md shadow" @click="changePageSize(50)">
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
