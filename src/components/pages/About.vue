<template>
    <!--================ Start About Us Area =================-->
    <section class="about_area section_gap">
        <div class="container">
            <div class="row justify-content-start align-items-center">
                <div class="col-lg-5">
                    <div class="about_img">
                        <img class="" src="/frontend/cv/mypic.jpg" alt="">
                    </div>
                </div>

                <div class="offset-lg-1 col-lg-5">
                    <div class="main_title text-left">
                        <h2>let’s <br>
                            Introduce about <br>
                            myself</h2>
                        <p>
                            Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven
                            midst their. Beast creepeth. Fish days.
                        </p>
                        <p>
                            Is give may shall likeness made yielding spirit a itself together created after sea
                            is in beast beginning signs open god you're gathering whose gathered cattle let.
                            Creature whales fruit unto meat the life beginning all in under give two.
                        </p>
                        <a class="primary_btn tr-bg" :href="cvText" target="_blank"><span>Get CV</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================ End About Us Area =================-->
</template>
<script setup>
import {ref} from 'vue';
const cvText = ref('/frontend/cv/CV_Mehedi.pdf');
</script>
