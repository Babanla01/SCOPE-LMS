<template>
  <main class="main section">
    <div class="online__course grid">
      <h3>Online Courses on Design and Development</h3>
      <div>
        <p>
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </div>
    </div>
    <hr />
    <div class="course__grid grid">
      <router-link
        v-for="course in courses"
        :key="course.id"
        class="jogo"
        :to="{
          name: '/courses.show',
          params: { id: course.id, slug: course.slug },
        }"
      >
        <h3>{{ course.name }}</h3>
        <div class="cours__details">
          <p>{{ course.details }}</p>
          <button class="button btn__secondary cours__btn">View Course</button>
        </div>
        <div class="cours__images">
          <img :src="`/images/${course.img1}`" alt="" class="cours__img" />
          <img :src="`/images/${course.img2}`" alt="" class="cours__img" />
          <img :src="`/images/${course.img3}`" alt="" class="cours__img" />
        </div>
        <div class="course__descriptions">
          <div class="course__levels">
            <span class="course__duration">{{ course.duration }}</span>
            <span class="course__level">{{ course.level }}</span>
          </div>
          <p class="course__tutor">{{ course.tutor }}</p>
        </div>
        <div class="curriculum">
          <p class="curic">Curriculum</p>
          <div class="curriculum__grids">
            <div class="curriculum__grid grid">
              <div
                class="curriculums"
                v-for="tag in course.tags"
                :key="tag.val"
              >
                <h2>{{ tag.val }}</h2>
                <p>
                  {{ tag.cur }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </main>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      courses: sourceData.courses,
    };
  },
};
</script>

<style>
</style>