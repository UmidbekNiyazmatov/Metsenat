<script setup>
import { RouterView } from "vue-router";
import Navbar from "../components/Navbar/Navbar.vue";

</script>
<template>
  <div>
    <!-- <Navbar />
    <main>
      <router-view />
    </main>
    <Footer /> -->

    <Navbar />
    <main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </main>
   
  </div>
</template>

<style scoped></style>
