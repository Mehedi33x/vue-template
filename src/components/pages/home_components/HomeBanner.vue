<template>
    <section class="home_banner_area">
        <div class="banner_inner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="banner_content">
                            <h3 class="text-uppercase">Hell0</h3>
                            <h1 class="text-uppercase">I am {{ name }}</h1>
                            <h5 class="text-uppercase">{{ profession }}</h5>
                            <div class="d-flex align-items-center">
                                <!-- <a class="primary_btn" href="#"><span>Hire Me</span></a> -->
                                <a class="primary_btn tr-bg" :href="cvText" target="_blank"><span>Get CV</span></a>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="home_right_img">
                            <img class="" src="/frontend/img/banner/home-right.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref } from 'vue';

const name = ref('Mehedi Hasan');
const profession = ref('Junior Web Developer');
const cvText = ref('/frontend/cv/CV_Mehedi.pdf');
const imageUrl = ref('/frontend/img/banner/home-right.png');
</script>
