<template>
	<div class="main-container">
		<router-view></router-view>
		<!-- Navbar section -->
		<!-- <HeaderSoftware /> -->

		<!-- hero section -->
		<HeroSoftware />

		<!-- brand logo carousel -->
		<!-- <BrandLogoCarousel /> -->

		<!-- Gradation section start -->
		<div class="icon-process-area section-space--pb_120" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <Gradation />
                    </div>
                </div>
            </div>
        </div>

        <div class="feature-icon-list-area section-space--pb_120 section-space--mt_40" id="about">
            <!-- <div class="container">
                <div class="section-title-wrapper text-center section-space--mb_100">
                    <h2 class="section-title font-weight--light mb-30 wow move-up">Embed your videos directly into the product gallery and watch as they get more clicks and conversions</h2>
                    <div class="video-button-container video-popup">
                        <silentbox-single src="https://www.youtube.com/watch?v=9No-FiEInLA">
                            <div class="video-play">
                                <i class="fa fa-play-circle"></i>
                                <span class="video-text">INTRO & DEMO VIDEO</span>
                            </div>
                        </silentbox-single>
                    </div>
                </div>
            </div> -->
            <!-- feature list component -->
            <FeatureList />
        </div>

        <!-- tab two components -->
        <TabTwo BgGradient="bg-gradient" id="service" />

        <!-- fun facts section -->
		<!-- <div class="fun-fact-wrapper section-space--pt_60 section-space--pb_60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title text-center section-space--mb_60">
                            <h2 class="font-weight--light mb-15 wow move-up">No stories, facts only</h2>
                            <span class="section-text wow move-up">Better software promotes overall sales & net profits</span>
                        </div>
                    </div>
                </div>
				<FunFactOne />
            </div>
		</div> -->

        <!-- pricing section -->
        <CurveShape>
            <template v-slot:bgcolor>
                <path style="fill: #f6f5f9;
                    stroke-miterlimit:10;" 
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>
        <div class="pricing-table-area bg-gray-2 section-space--pb_90" id="pricing">
            <!-- <div class="pricing-table-title-area position-relative ">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12  wow move-up">
                            <div class="section-title-wrapper text-center section-space--mb_60">
                                <h2 class="section-title font-weight--light mb-15 wow move-up">Affordable for everyone!</h2>
                                <span class="section-text wow move-up">If you are planning on developing a product landing app or website, take a look at this beautiful-crafted and error-free HTML template.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="pricing-table-content-area">
                <div class="container">
                    <!-- pricing component -->
                    <!-- <PricingOne /> -->
                </div>
            </div>
        </div>

		<!-- call to action component -->
        <!-- <CtaThree /> -->

        <!-- accordion section -->
        <div class="software-accordion-wrapper section-space--pt_120 section-space--pb_60 gray-gradient" id="faq">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-wrapper text-center section-space--mb_60">
                            <h2 class="section-title font-weight--light mb-10 wow move-up">Frequently Asked Questions</h2>
                            <span class="section-text wow move-up">It’s our pleasure to answer any questions you have</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="faq-wrapper">
                            <!-- accordion component -->
                            <Accordion />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CurveShape class="curve-bottom">
            <template v-slot:bgcolor>
                <path style="fill: #f6f5f9;
                    stroke-miterlimit:10;" 
                    d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"/>
            </template>
        </CurveShape>
        <div style="margin-bottom:200px"></div>

        <!-- bannar area -->
        

        <!-- newsletter section -->
        <!-- <Newsletter />  -->

		<!-- footer section -->
        <!-- <FooterMain /> -->

        <!-- offcanvas search component -->
        <!-- <OffcanvasSearchBox /> -->

	</div>
</template>

<script>
	// import HeaderSoftware from "../components/HeaderSoftware";
	import HeroSoftware from "../components/HeroSoftware";
	// import BrandLogoCarousel from "../components/BrandLogoCarousel";
	import FeatureList from "../components/FeatureList";
	// import TabTwo from "../components/TabTwo";
	// import ProgressBar from "../components/ProgressBar";
	// import PricingOne from "../components/PricingOne";
	import CurveShape from "../components/CurveShape";
	// import CtaThree from "../components/CtaThree";
	// import FunFactOne from "../components/FunFactOne";
	import Accordion from "../components/Accordion";
	// import Newsletter from "../components/Newsletter";
	// import FooterMain from "../components/FooterMain";
	// import OffcanvasSearchBox from "../components/OffcanvasSearchBox";
    import Gradation from "../components/Gradation";

	export default {
		name: "app",
		components: {
            Gradation,
			// HeaderSoftware,
			HeroSoftware,
            // BrandLogoCarousel,
            FeatureList,
            // TabTwo,
            // ProgressBar,
            // PricingOne,
			CurveShape,
			// CtaThree,
            // FunFactOne,
            Accordion,
            // Newsletter,
            // FooterMain,
            // OffcanvasSearchBox	
		},

        metaInfo: {
            title: 'WooChitra - Add videos for WooCommerce and start selling more!',
            htmlAttrs: {
                lang: 'en',
                amp: true
            },
            meta:[
                {
                    'name':'description',
                    'content':'Woochitra is the easiest way to add videos to your woocommerce gallery without wasting time or money!'
                }
            ]
        }
	};
</script>

