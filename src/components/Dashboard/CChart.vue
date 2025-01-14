<template>
    <section class="chart">
        <div class="container chart__container">
            <div class="bg-white rounded-xl mt-10">
                <div class="p-6">
                    <h3 class="text-2xl font-pro-bold text-gray-light">
                        Homiylar va talabalar soni
                    </h3>
                    <div class="flex gap-5">
                        <div class="flex items-center" >
                            <span> <img src="/public/blue.png" width="10px" alt="ellipse-blue"> </span>
                            <p class="font-rubik text-gray-light-600 ms-2 ">Homiylar</p>
                        </div>
                        <div  class="flex items-center  " >
                            <span> <img src="/public/pink.png" width="10px" alt="ellipse-blue"> </span>
                            <p class="font-rubik text-gray-light-600 ms-2 ">Talabalar</p>
                        </div>  
                    </div>
                </div>
                <CApexChart></CApexChart>
            </div>
        </div>
    </section>
</template>
<script setup>
import CApexChart from './CApexChart.vue';

</script>