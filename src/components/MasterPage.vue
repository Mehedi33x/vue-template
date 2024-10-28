<template>
    <Header />
    <router-view></router-view>
    <Newsletter v-if="isBaseRoute"/>
    <Footer />

</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from '../components/fixed/Header.vue'
import Newsletter from './fixed/Newsletter.vue';
import Footer from '../components/fixed/Footer.vue';

const route = useRoute();
const isBaseRoute = computed(() => route.path === '/');
</script>


