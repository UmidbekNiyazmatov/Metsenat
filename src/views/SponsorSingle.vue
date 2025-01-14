<template>
    <div>
        <SingleHeader :singleSponsor="singleSponsor" />
        <SingleSponsorAbout v-if="singleSponsor.name" :singleSponsor="singleSponsor" />
        <div v-else-if="loading">Ma'lumot yuklanmoqda...</div>
        <div v-else>Xatolik yuz berdi!</div>
        <img class="m-auto mt-[174px]" src="/photo-footer.png" alt="Footer Image" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SingleHeader from '../components/Header/Header-single.vue'
import client from '../api/api'
import SingleSponsorAbout from '../components/SponsorSingle/SingleSponsorAbout.vue'

const route = useRoute()
const singleSponsor = ref({})
const loading = ref(true)
const error = ref(false)

const fetchSingleSponsor = async () => {
    try {
        const { data } = await client.get(`sponsor-detail/${route.params.id}`)
        singleSponsor.value = data
    } catch (err) {
        error.value = true
        // console.error("Xatolik yuz berdi:", error)
    } finally {
        loading.value = false
    }
}

onMounted(fetchSingleSponsor)
</script>

<style scoped></style>