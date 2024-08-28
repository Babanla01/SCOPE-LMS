<template>
  <main class="main section">
    <div class="faqs grid">
      <div class="faq">
        <h1>Frequently Asked Questions</h1>
        <p>
          Still you have any questions? Contact our Team via
          <a href="mailto:support@skillbridge.com">support@skillbridge.com</a>
        </p>
        <button class="button faq__btn">See All FAQ’s</button>
      </div>
      <div class="accordion">
        <div class="accordion__containers grid">
          <div
            class="accordion__container"
            v-for="(accordion, index) in accordions"
            :key="index"
          >
            <div class="accordion__header" @click="open(index)">
              <p>{{ accordion.header }}</p>
              <i
                class="bi accordion__icon"
                :class="{ 'bi-plus': !isOpen(index), 'bi-dash': isOpen(index) }"
              ></i>
            </div>
            <div v-if="isOpen(index)">
              <div class="accordion__content">
                <p>{{ accordion.content }}</p>
                <a href="" class="accordion__link"
                  >{{ accordion.link }}
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      accordions: sourceData.Accordion,
      openIndex: null,
      accord: false,
    };
  },
  methods: {
    open(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
    isOpen(index) {
      return this.openIndex === index;
    },
  },
};
</script>

<style>
</style>