<template>
  <div>
    <main class="main section">
      <div class="grid course__open">
        <h2>{{ courses.courseOpen }}</h2>
        <p>{{ courses.detail }}</p>
      </div>
      <hr />
      <div class="course__opens">
        <div class="">
          <img :src="`/images/${courses.img1}`" alt="" class="open__img" />
        </div>
        <div class="lessons__container grid">
          <div
            v-for="dtails in courses.coursesDetails"
            :key="dtails.number"
            class="lessons"
          >
            <h1 class="lessson__tag">{{ dtails.number }}</h1>
            <p class="lesson__topic">{{ dtails.topic }}</p>
            <div class="grid lesson__grid">
              <div
                v-for="lesson in dtails.descriptions"
                :key="lesson.time"
                class="lesson__details"
              >
                <div>
                  <p>{{ lesson.desc }}</p>
                  <small>{{ lesson.lesson }}</small>
                </div>
                <div>
                  <small>{{ lesson.time }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  // data() {
  //   return {
  //     course: sourceData.courses,
  //   };
  // },
  computed: {
    courseId() {
      return parseInt(this.$route.params.id);
    },
    courses() {
      return sourceData.courses.find((course) => course.id === this.courseId);
    },
  },
};
</script>

<style>
</style>