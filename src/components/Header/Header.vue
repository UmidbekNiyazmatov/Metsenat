<script setup>
import { ref } from "vue"
import Search from "../Form/Search.vue"
import ModalFilter from "../Modal/SponsorFilter.vue"
import CButton from "../Form/Button.vue"
      
const isOpenModal = ref(false)

const openModal = () => {
    isOpenModal.value = true;
};

const closeModal = () => {
    isOpenModal.value = false
}

</script>
<template>
  <nav class=" bg-gray-50   ">
    <div class="container    ">
      <div class="flex justify-between py-5 ">

        <div>
          <router-link to="/">
            <button :class="{ 'bg-[#3366FF] border-[#3366FF]  text-white': $route.path === '/' }"
              class="py-2 px-10 border-2 rounded-l-lg  text-blue-600  font-medium">
              DASHBOARD
            </button>
          </router-link>
          <router-link to="/Sponsor">
            <button :class="{ 'bg-[#3366FF] border-[#3366FF]  text-white': $route.path === '/Sponsor' }"
              class="py-2 px-10 border-2 text-blue-600   font-medium">
              HOMIYLAR
            </button>
          </router-link>
          <router-link to="/#">
            <button :class="{ 'bg-[#3366FF] border-[#3366FF]  text-white': $route.path === '/#' }"
              class="py-2 px-10 border-2 rounded-r-lg text-blue-600   font-medium">
              TALABALAR
            </button>
          </router-link>
        </div>
        <div class="flex items-center gap-5">
          <Search  type="text" placeholder="Izlash" class="">
          <template #left>
              <span class="icon-search text-2xl text-gray-300 pl-3 pt-3 absolute  z-10" ></span>
          </template>
          </Search>
          <CButton @click="openModal" variant="filter" title="Filter">
            <template #prefix>
              <span class="icon-filtr text-xl"></span>
            </template>
          </CButton>
          <ModalFilter :isOpen="isOpenModal" @close="closeModal" class=" z-10 "  />
        </div>
      
      </div>
    </div>

  </nav>
</template>
