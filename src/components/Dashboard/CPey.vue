<template>

    <section class="mt-12 pay">
      <div class="container pay__container">
        <div
          class="grid grid-cols-1 gap-4 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3"
        >
          <CPaylList
            class="mt-5 2xl:mt-0 xl:mt-0 lg:mt-0"
            colorClass="bg-blue-200 text-blue-500 "
            :totalNumber="`${dashboardResult.total_paid }`"
            title="Jami to‘langan summa"
            
          />
          <CPaylList
            class="mt-5 2xl:mt-0 xl:mt-0 lg:mt-0"
            :totalNumber="`${dashboardResult.total_need}`"
            colorClass="bg-yellow-200 text-yellow-500 "
            title="Jami so‘ralgan summa"
          />
          <CPaylList
            class="mt-5 2xl:mt-0 xl:mt-0 lg:mt-0"
            :totalNumber="`${dashboardResult.total_must_pay}`"
            colorClass="bg-orange-200 text-orange-500 "
            title="To‘lanishi kerak summa"
          />
        </div>
      </div>
    </section>
  </template>
  <script setup>
  import CPaylList from './CPayList.vue'
  import client from '../../api/api'
  import { onMounted, ref } from 'vue'
  
  let dashboardResult = ref({})
  
  const GetPay = async () => {
    try {
      const data = await client.get('dashboard/')
      dashboardResult.value = data.data
    } catch (error) {
      console.log(error)
    }
  }
  
  onMounted(() => {
    GetPay()
  })
  </script>
  