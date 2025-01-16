<template>
    <div>
        <SingleHeader :singleSponsor="singleSponsor" />

        <div class="flex justify-center items-center">
            <template v-if="loading">
                <div>Ma'lumot yuklanmoqda...</div>
            </template>
            <template v-else-if="error">
                <div>Xatolik yuz berdi!</div>
            </template>
            <template v-else>
              <SingleSponsorAbout :data="sponsorResult[1]" />
            </template>
        </div>

        <div class="flex h-[450px] justify-center items-end">
            <img class="" src="/photo-footer.png" alt="Footer Image" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SingleHeader from '../components/Header/Header-single.vue';
import SingleSponsorAbout from '../components/SponsorSingle/SingleSponsorAbout.vue';
import client from '../api/api';

const route = useRoute();

const loading = ref(true);
const error = ref(false);
const sponsorResult = ref([]);



const GetPay = async () => {
    loading.value = true;
    error.value = false;
    try {
        const { data } = await client.get('sponsor-list/');
        sponsorResult.value = data.results || []; // Adjust based on API structure
    } catch (err) {
        console.error(err);
        error.value = true;
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    GetPay();
});
</script>

<style scoped></style>