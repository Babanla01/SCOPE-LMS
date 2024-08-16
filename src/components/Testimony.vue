<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div
        class="testimony__item carousel-item"
        v-for="testimonys in testimonies"
        :key="testimonys.id"
        :class="testimonys.id == 1 ? 'active' : ''"
      >
        <p class="testimony__details">{{ testimonys.testimony }}</p>
        <div class="testimony__data">
          <div class="testimonial__data">
            <img
              :src="`/images/${testimonys.image}`"
              alt=""
              class="testimony__img"
            />
            <p class="testimony__name">{{ testimonys.name }}</p>
          </div>
          <button class="button btn__secondary">Read Full Story</button>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-target="#carouselExampleControls"
      data-slide="prev"
    >
      <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
      <i class="bi bi-arrow-left"></i>
      <span class="sr-only">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-target="#carouselExampleControls"
      data-slide="next"
    >
      <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
      <i class="bi bi-arrow-right"></i>
      <span class="sr-only">Next</span>
    </button>
  </div>
</template>


<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      testimonies: sourceData.testimonials,
    };
  },
};
</script>

<style>
.carousel {
  position: relative;
}
.carousel-control-next,
.carousel-control-prev {
  background-color: grey;
  width: 2.5rem;
  color: black;
  /* opacity: 1; */
  height: 2.25rem;
  border-radius: 0.35rem;
  text-align: center;
  line-height: 4rem;
  margin-top: 16rem;
  font-size: 1.5rem;
  font-weight: bolder;
  position: absolute !important;
  bottom: -10rem !important;
}
.carousel-control-prev {
  left: 86%;
}
/* .carousel-control-next:hover {
  color: black;
}
.carousel-control-prev:hover {
  color: black;
} */
</style>