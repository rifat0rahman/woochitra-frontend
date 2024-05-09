<template>
    <div class="accordion-faq wow move-up">
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-1 class="faq-title">
                    What are the plugin requirements?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        WooChitra requires at least WordPress 4 and a modern web browser. Please also make sure that your server respects 
                        these <a style="color:#9c7af2" href="https://wordpress.org/about/requirements/">WordPress recommendations</a>.

                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-2 class="faq-title">What types of payment do you accept?</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
We use Stripe as a payment processor so we accept all major credit/debit cards.
 </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-3 class="faq-title">Can I upgrade after my initial purchase?</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
Yes, after your initial purchase, if you wish to purchase a higher tiered plan then contact us and we’ll help you with a coupon so that you only pay the difference in the pricing.                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-4 class="faq-title">How is priority support provided?</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        We offer email support and you can write us at help(@)woochitra.com                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-5 class="faq-title">How do plugin licenses work?</b-button>
            </b-card-header>
            <b-collapse id="accordion-5" accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        
Once you complete the purchase you’ll be taken to your account where you’ll be able to create tokens. Once you install the plugin to your website you can activate it by one of the unused tokens.                   </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-6 class="faq-title">Can I remove and add a new token?</b-button>
            </b-card-header>
            <b-collapse id="accordion-6" accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        Yes, you can remove a token when you no longer need videos on a website and generate a new one to install on another website.
                         </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Accordion',
    };
</script>