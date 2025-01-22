<template>
    <div>
        <StudentHeader :singleStudent="singleStudent" />

        <div class="flex justify-center items-center">
        
              <SingleStudentAbout :singleStudent="singleStudent" />
           
        </div>

        <div class="flex h-[450px] justify-center items-end">
            <img class="" src="/photo-footer.png" alt="Footer Image" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import StudentHeader from '../components/StudentsSingle/Header-single.vue';
import SingleStudentAbout from '../components/StudentsSingle/SingleStudentAbout.vue';
import client from '../api/api';

const route = useRoute();

const singleStudent = ref({});

const fetchSingleStudent = async () => {
    const { data } = await client.get(`student-detail/${route.params.id}`);

    console.log( data );

    singleStudent.value= data 
}

onMounted(() => {
    fetchSingleStudent();
});
</script>

<style scoped></style>