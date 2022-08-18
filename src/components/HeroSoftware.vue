<template>
    <div class="hero-software hero-swiper-btn" id="home">
        <div class="container_f1">
            <div class="swiper-wrapper">
                <swiper :options="swiperOption">
                    <div class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Turn products into stories.</h2>
                                <h6 class="hero-content-subtitle">Add videos to your WooCommerce product gallery and see your engagement skyrocket!</h6>
                                <router-link :to="{ path: 'dashboard' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"></span> Get WooChitra
                                </router-link>
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/img/hero/hero-software/software-thumb-1.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Easily add videos with WooChitra</h2>
                                <h6 class="hero-content-subtitle">
                                    You have a WooCommerce-powered store with no video on the product page. You're missing out on 60% of sales
                                </h6>
                                <router-link :to="{ path: 'dashboard' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"></span> Get WooChitra
                                </router-link>
                            </div>
                            <div class="hero-thumb pr-100">
                                <img src="../assets/img/hero/hero-software/software-thumb-3.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" :style="bgImg">
                        <div class="hero-item">
                            <div class="hero-content">
                                <h2 class="h1 hero-content-title">Boost Your Sales with Videos</h2>
                                <h6 class="hero-content-subtitle">According to 80% of video marketers, video directly increases sales.</h6>
                                <router-link :to="{ path: 'dashboard' }" class="btn btn--green">
                                    <span class="btn-icon  ml-0 mr-2"></span> Get WooChitra
                                </router-link>
                            </div>
                            <div class="hero-thumb">
                                <img src="../assets/img/hero/hero-software/software-thumb-2.png" class="img-fluid" alt="hero thumb">
                            </div>
                        </div>
                    </div>
                    <!-- Optional controls -->
                    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bgImg: {
                    backgroundImage: `url(${require("../assets/img/hero/hero-software/software-shape.png")})`
                },
                swiperOption: {
                    speed: 1500,
                    loop: true,
                    effect: 'fade',
                    autoplay: false,
                    spaceBetween : 30,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                }
            };
        }
    };
</script>

<style lang="scss" scoped> 
    @import '../assets/scss/variabls.scss';
    @import '../assets/scss/elements/hero-software.scss';
</style>
