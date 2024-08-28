<template>
  <main class="main section">
    <div class="pricing__container grid">
      <h1>Our Pricings</h1>
      <p>
        Welcome to SkillBridge's Pricing Plan page, where we offer two
        comprehensive options to cater to your needs: Free and Pro. We believe
        in providing flexible and affordable pricing options for our services.
        Whether you're an individual looking to enhance your skills or a
        business seeking professional development solutions, we have a plan that
        suits you. Explore our pricing options below and choose the one that
        best fits your requirements.
      </p>
    </div>
    <div class="pricing__btn">
      <div class="pricing__btns">
        <button class="button btn__primary" @click="montly">Montly</button>
        <button class="button btn__white" @click="yearly">Yearly</button>
      </div>
    </div>
    <div class="pricing__grid grid">
      <div class="pricing__item" v-for="(price, i) in pricing" :key="i">
        <p class="price__plan">{{ price.plan }}</p>
        <div v-if="monthly">
          <h2 class="plan__price">${{ price.price1 }}</h2>
        </div>
        <div v-if="yearlly">
          <h2 class="plan__price">${{ price.price2 }}</h2>
        </div>
        <div class="available__features">
          <p>Available Features</p>
          <div class="pricing__feature grid">
            <div v-for="(feature, i) in price.features" :key="i" class="">
              <li class="price__list">
                <i
                  class="price__icon"
                  :class="feature.access === true ? 'bi bi-check2' : 'bi bi-x'"
                ></i
                >{{ feature.feature }}
              </li>
            </div>
          </div>
        </div>
        <button class="button btn__block btn__primary price__btn">
          Get Started
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import sourceData from "@/data.json";

export default {
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