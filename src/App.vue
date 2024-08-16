<template>
  <navBar />
  <div class="container__">
    <router-view />
  </div>
  <Footer />
</template>
<script>
import navBar from "@/components/navBar.vue";
import Footer from "@/components/fooTer.vue";
export default {
  name: "App",
  components: { navBar, Footer },
};
</script>

<style>
</style>
