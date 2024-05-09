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
                                <h6 class="title">- {{ feature.title }}</h6>
                                <h6 class="title">- {{ feature.desc }}</h6>
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
                        title: 'Add custom thumbnails to the videos', 
                        desc: 'Add multiple videos to the product gallery.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-branding-box-image-02-1.png'), 
                        title: 'Add videos to the description area.', 
                        desc: 'Theme responsive video size.'
                    },
                    {
                        icon: require('../assets/img/icons/aeroland-branding-box-image-03-1.png'), 
                        title: 'Choose aspect ratio manually.',
                        desc: 'Responsive to all device sizes.'
                    }
                ]
            }
        }
    }
</script>
