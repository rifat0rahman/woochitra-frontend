<template>
    <div class="feature-icon-list">
        <div class="row">
            <div class="col-lg-6">
                <div class="feature-icon-list__media wow move-up">
                    <img src="../assets/img/features/aeroland-feature-icon-image.png" class="img-fluid" alt="">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="feature-icon-list__content">
                    <div class="feature-icon-list-wrapper">
                        <div v-for="feature in features" :key="feature.id" class="single-feature-icon wow move-up">
                            <div class="single-feature-icon__media">
                                <img :src="feature.icon" class="img-fluid" alt="">
                            </div>
                            <div class="single-feature-icon__content">
                                <h6 class="title">{{ feature.title }}</h6>
                                <div class="text">{{ feature.desc }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'featureList',
        data (){
            return {
                features: [
                    {
                        icon: require('../assets/img/icons/aeroland-branding-box-image-01-1.png'), 
                        title: 'Product description is not always enough', 
                        desc: 'Embed video directly into the product gallery for maximum impact.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-branding-box-image-02-1.png'), 
                        title: 'Add videos wherever you like', 
                        desc: 'WooChitra will play YouTube, Vimeo, dailymotion, and even self-hosted MP4 videos.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-branding-box-image-03-1.png'), 
                        title: 'Responsive as per the layout', 
                        desc: 'No matter the theme or device, WooChitra will always serve the best aspect ratios.'
                    },
                ]
            }
        }
    }
</script>
