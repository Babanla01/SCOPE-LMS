<template>
  <main class="main section">
    <div class="skillbridge grid">
      <h1>About Skillbridge</h1>
      <div class="skill__details">
        <p>
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>
    </div>
    <hr />
    <div class="achievementss">
      <h2>Achievements</h2>
      <p>
        Our commitment to excellence has led us to achieve significant
        milestones along our journey. Here are some of our notable achievements
      </p>
      <div class="achievements grid">
        <div
          class="achievement"
          v-for="achievement in achievement"
          :key="achievement.id"
        >
          <img
            :src="`/images/${achievement.image}`"
            alt=""
            class="achievement__img"
          />
          <h5>{{ achievement.achievementheader }}</h5>
          <p>{{ achievement.achievementdetail }}</p>
        </div>
      </div>
    </div>
    <div class="achievementss">
      <h2>Our Goals</h2>
      <p>
        At SkillBridge, our goal is to empower individuals from all backgrounds
        to thrive in the world of design and development. We believe that
        education should be accessible and transformative, enabling learners to
        pursue their passions and make a meaningful impact. Through our
        carefully crafted courses, we aim to
      </p>
      <div class="achievements grid">
        <div class="achievement" v-for="goal in goals" :key="goal.id">
          <img :src="`/images/${goal.image}`" alt="" class="achievement__img" />
          <h5>{{ goal.goalsheader }}</h5>
          <p>{{ goal.goalsdetail }}</p>
        </div>
      </div>
    </div>
    <div class="skill__inovation grid">
      <img src="/images/shape-17.png" alt="" class="skill__img" />
      <div class="relat">
        <h3>
          <span class="orange">Together</span>, let's shape the future of
          digital innovation
        </h3>
        <p>
          Join us on this exciting learning journey and unlock your potential in
          design and development.
        </p>
      </div>
      <div class="relat">
        <button class="button btn__primary">Join Now</button>
      </div>
    </div>
  </main>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      achievement: sourceData.Achievements,
      goals: sourceData.Goals,
    };
  },
};
</script>

<style>
</style>