<template>
  <div class="main heros">
    <Pricing />
    <FAQS />
  </div>
</template>
<script>
import sourceData from "@/data.json";
import Pricing from "@/components/Pricing.vue";
import FAQS from "@/components/FQuestions.vue";
export default {
  components: { Pricing, FAQS },
  data() {
    return {
      pricing: sourceData.pricing,
      proPrice: 19,
      freePrice: 0,
      monthly: true,
      yearlly: false,
    };
  },
  methods: {
    yearly() {
      this.monthly = false;
      this.yearlly = true;
    },
    montly() {
      this.yearlly = false;
      this.monthly = true;
    },
  },
};
</script>

<style>
</style>