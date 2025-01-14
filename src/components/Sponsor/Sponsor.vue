<script setup>
import CButton from "../Form/Button.vue"
import sponsorItem from './Sponsor-item.vue';
import client from '../../api/api'
import { onMounted, ref } from 'vue'

let sponsorResult = ref({})

const GetPay = async () => {
  try {
    const data = await client.get('sponsor-list/')
    sponsorResult.value = data.data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  GetPay()
})
</script>

<template>
  <div class="containerMain mt-5">

    <table class="w-full">
      <thead>
        <div class="flex justify-between px-[15px]">
          <div>
            <ul class="text-[12px] text-[#B1B1B8] flex gap-[33px]">
              <li>#</li>
              <li>F.I.SH.</li>
            </ul>
          </div>

          <div>
            <ul class="text-[12px]  text-[#B1B1B8] flex  ">
              <li class="w-[160px] text-center">TEL.RAQAMI</li>
              <li class="w-[160px]  text-center ">HOMIYLIK SUMMASI</li>
              <li class="w-[160px]  text-center">SARFLANGAN SUMMA</li>
              <li class="w-[150px]  text-center">SANA</li>
              <li class="w-[150px]   text-center">HOLATI</li>
              <li class="w-[70px]  text-center">AMALLAR</li>
            </ul>
          </div>
        </div>
      </thead>

      <tbody class="flex flex-col gap-1">
        <sponsorItem v-for="(homiy, index) in sponsorResult.results" :key="homiy.id" :data="homiy" :index="index" />
      </tbody>
    </table>


    <div class="containerMain my-5">
      <div class="flex justify-between"> <!-- Corrected class name -->
        <div>
          <p>59 tadan 1-10 ko‘rsatilmoqda</p>
        </div>

        <div class="flex gap-2">
          <p>Ko‘rsatish</p>
          <CButton variant="number" title="10">
            <template #suffix>
              <span class="icon-angle-down text-[9px] text-[#1D1D1F] pl-2"></span>
            </template>
          </CButton>
          <div class="flex gap-2">
            <CButton v-for="number in 7" :key="number" :variant="'number'" :title="number.toString()">
            </CButton>
          </div>
        </div>
      </div>
    </div>





  </div>

</template>

<style scoped></style>