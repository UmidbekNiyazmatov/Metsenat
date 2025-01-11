<template>
    <div class="bg-white shadow flex items-center gap-5 rounded-lg p-6 ">
      <span :class="['icon-money text-3xl rounded-xl p-3 bg-blue-300  ', colorClass]" ></span>
      <div class="" >
      <h2 class="text-lg font-medium">{{ title }}</h2>
      <span class="text-2xl font-bold">{{ amount }}</span> <span class=" font-bold text-2xl text-gray-300 " >UZS</span>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "StatisticCard",
    props: {
      title: {
        type: String,
        required: true,
      },
      amount: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        default: "icon-money",
      },
      colorClass: {
        type: String,
        default: "text-gray-800",
      },
    },
  };
  </script>