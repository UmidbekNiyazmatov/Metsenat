<script>
import Seorch from "../Form/Sorch.vue"

  export default {
    name: "Navigation",
    components: {
    Seorch,

  },
  };

</script>
<template>
    <nav class=" bg-gray-50   ">
      <div class="container    ">
        <div class="flex justify-between py-5 ">
        <ul class="flex space-x-6">
          <li>
            <button
              class="py-2 px-4 text-blue-600 border-b-4 border-blue-600 font-medium"
            >
              DASHBOARD
            </button>
          </li>
          <li>
            <button class="py-2 px-4 text-gray-600 hover:text-blue-600">
              HOMIYLAR
            </button>
          </li>
          <li>
            <button class="py-2 px-4 text-gray-600 hover:text-blue-600">
              TALABALAR
            </button>
          </li>
        </ul>
        <Seorch />
    </div>
      </div>
      
    </nav>
</template>
  
