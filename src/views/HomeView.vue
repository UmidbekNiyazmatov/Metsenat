<script>

import Header from "../components/Header/Header.vue";


import StatisticCard from "../components/Dashboard/CPayList.vue";

export default {
  name: "Dashboard",
  components: {
    Header,

    StatisticCard,
  },
};
</script>
<template>
  <div class="min-h-screen bg-gray-100">

    <Header />



   
    <main class="container mx-auto px-4 py-6">

 


      <div class="grid grid-cols-1 sm:grid-cols-3 my-20 gap-6">
        <StatisticCard
          title="Jami to'langan summa"
          amount="1 684 325 000 "
          colorClass="text-blue-600 bg-blue-100"
        />
        <StatisticCard
          title="Jami so'ralgan summa"
          amount="14 098 530 000 "
          colorClass="text-yellow-600 bg-yellow-100"
        />
        <StatisticCard
          title="To'lanishi kerak summa"
          amount="12 414 205 000 "
          colorClass="text-orange-600 bg-orange-100 "
        />
      </div>
    </main>
  </div>
</template>
