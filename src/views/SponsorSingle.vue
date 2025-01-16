<template>
    <div>
        <SingleHeader :singleSponsor="singleSponsor" />

        <div class="flex justify-center items-center">
        
              <SingleSponsorAbout :singleSponsor="singleSponsor" />
           
        </div>

        <div class="flex h-[450px] justify-center items-end">
            <img class="" src="/photo-footer.png" alt="Footer Image" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SingleHeader from '../components/SponsorSingle/Header-single.vue';
import SingleSponsorAbout from '../components/SponsorSingle/SingleSponsorAbout.vue';
import client from '../api/api';

const route = useRoute();

const singleSponsor = ref({});

const fetchSingleSponsor = async () => {
    const { data } = await client.get(`sponsor-detail/${route.params.id}`);

    console.log( data );

    singleSponsor.value= data 
}

onMounted(() => {
    fetchSingleSponsor();
});
</script>

<style scoped></style>