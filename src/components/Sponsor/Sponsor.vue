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

// Function to change the current page
const changePage = (newPage) => {
  index * index
  if (newPage > 0 && newPage <= totalPages.value) {
    page.value = newPage;
    GetPay();
  }
};

// Function to change the page size
const changePageSize = (newSize) => {
  page_size.value = newSize;
  page.value = 1; // Reset to the first page when page size changes
  GetPay();
};
</script>

<template>
  <div class="containerMain mt-5">
    {{ sponsorResult }}
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
              <li class="w-[70px] text-center">AMALLAR</li>
            </ul>
          </div>
        </div>
      </thead>

      <tbody class="flex flex-col gap-1">
        {{ page == 1 ? 0 : page * 10}}
        <sponsorItem
          v-for="(homiy, index) in sponsorResult.results"
          :key="homiy.id"
          :data="homiy"
          :index="index "
        />
      </tbody>
    </table>

    <div class="container">
      <div class="flex justify-between py-5">
        <div>
          <p>{{ sponsorResult.count }} tadan {{ (page.value - 1) * page_size.value + 1 }}-{{ page.value * page_size.value }} ko‘rsatilmoqda</p>
        </div>
        <div class="flex items-center gap-2">
          <p>Ko‘rsatish</p>
          <div class="">
            <button 
            class="flex items-center gap-2 px-2 bg-white rounded-md shadow"
            @click="changePageSize(10)">
            <span class="text-lg">10</span>
          </button>
          <button 
            class="flex items-center gap-2 px-2 bg-white rounded-md shadow"
            @click="changePageSize(20)">
            <span class="text-lg">20</span>
          </button>
          <button 
            class="flex items-center gap-2 px-2 bg-white rounded-md shadow"
            @click="changePageSize(50)">
            <span class="text-lg">50</span>
          </button>
          </div>

          <div class="flex gap-2">
            <button @click="changePage(page.value - 1)" :disabled="page.value === 1">
              <span class="icon-angle-left"></span>
            </button>

            <div v-for="p in totalPages" :key="p">
              <button
                @click="changePage(p)"
                class="px-2 bg-white rounded-md shadow text-lg"
                :class="{ 'bg-blue-500 text-white': p === page.value }">
                {{ p }}
              </button>
            </div>

            <button @click="changePage(page.value + 1)" :disabled="page.value === totalPages.value">
              <span class="icon-angle-right"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
