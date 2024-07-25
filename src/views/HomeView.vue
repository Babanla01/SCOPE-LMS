<template>
  <main class="main section">
    <section class="hero">
      <h1 class="hero__heading">
        <span class="hero__bg">
          <img src="/images/Icon Containerflash.png" class="hero__flash" />
          <span class="unlock"> Unlock</span>Your Creative Potential
        </span>
      </h1>
      <h3 class="hero__subheading">
        with Online Design and Development Courses.
      </h3>
      <p class="hero__details">
        Learn from Industry Experts and Enhance Your Skills.
      </p>
      <div class="hero__btns">
        <button class="button btn__primary">Explore Courses</button>
        <button class="button btn__white">View Pricing</button>
      </div>
      <marquee behavior="scroll"> </marquee>
      <div class="sponsors">
        <div v-for="sponsor in sponsors" :key="sponsor.id" class="sponsor">
          <img
            :src="`/images/${sponsor.image}`"
            :alt="sponsor.name"
            class="sponsor__img"
          />
        </div>
      </div>
      <div class="hero__video-box">
        <img src="/images/ContainerheroImg.png" alt="" class="hero__video" />
      </div>
      <div class="benefits">
        <h1 class="benefit__title">Benefits</h1>
        <div class="benefit__details">
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <button class="button btn__white">View All</button>
        </div>
        <div class="benefit__container grid">
          <div
            v-for="benefit in benefits"
            :key="benefit.id"
            class="benefit__item"
          >
            <span class="benefit__tag">{{ benefit.tag }}</span>
            <h3 class="benefit__name">{{ benefit.name }}</h3>
            <p class="benefit__detail">{{ benefit.details }}</p>
            <div class="icon__box">
              <i class="bi bi-arrow-up-right benefit__icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="courses">
        <h1 class="benefit__title">Our Courses</h1>
        <div class="benefit__details">
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <button class="button btn__white">View All</button>
        </div>
        <div class="course__container grid">
          <div v-for="course in courses" :key="course.id" class="course__item">
            <img :src="`/images/${course.image}`" alt="" />
            <div class="course__descriptions">
              <div class="course__levels">
                <span class="course__duration">{{ course.duration }}</span>
                <span class="course__level">{{ course.level }}</span>
              </div>
              <p class="course__tutor">{{ course.tutor }}</p>
            </div>
            <h3 class="course__name">{{ course.name }}</h3>
            <p class="course__detail">{{ course.details }}</p>
            <button class="btn__block">Get it Now</button>
          </div>
        </div>
      </div>
      <div class="testimonial">
        <h1 class="benefit__title">Our Testimonials</h1>
        <div class="benefit__details">
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <button class="button btn__white">View All</button>
        </div>
        <div class="testimony__container grid">
          <div
            class="testimony__item"
            v-for="testimonys in testimonies"
            :key="testimonys.id"
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
      </div>
    </section>
  </main>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      sponsors: sourceData.sponsors,
      benefits: sourceData.benefits,
      courses: sourceData.courses,
      testimonies: sourceData.testimonials,
    };
  },
};
</script>

<style>
</style>