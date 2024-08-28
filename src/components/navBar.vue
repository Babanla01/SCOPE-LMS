  <template>
  <header class="header">
    <div class="hero__message">
      <div class="header__message">
        <span>Free Courses 🌟 Sale Ends Soon, Get It Now</span>
        <i class="bi bi-arrow-right"></i>
      </div>
    </div>
    <nav class="nav">
      <div class="navigations">
        <img src="/images/Logologo.png" alt="" class="logo__img" />
        <div class="nav__menu" ref="nav__menu">
          <!-- <router-link to="/"><li class="nav__item">Home</li></router-link>
          <router-link to="/Courses"
            ><li class="nav__item">Courses</li></router-link
          >
          <router-link to="/aboutUs"
            ><li class="nav__item">About Us</li></router-link
          >
          <router-link to="/Pricing"
            ><li class="nav__item">Pricing</li></router-link
          >
          <router-link to="/Contact"
            ><li class="nav__item">Contact</li></router-link
          > -->
          <li
            v-for="(routes, index) in routers"
            :key="index"
            class="nav__item"
            @click="closeNav"
          >
            <router-link :to="routes.path">{{ routes.name }}</router-link>
          </li>
          <i class="bi bi-x-lg close" @click="close"></i>
        </div>
      </div>
      <div class="nav__btns">
        <router-link to="/SignUp"
          ><button class="button">Sign Up</button></router-link
        >
        <router-link to="/LogIn"
          ><button class="button btn__primary">Login</button></router-link
        >
        <div class="nav__toggle">
          <i class="bi bi-menu-down" @click="openMenu"></i>
        </div>
      </div>
    </nav>
  </header>
</template>


<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      routers: sourceData.routes,
    };
  },

  methods: {
    openMenu() {
      this.$refs.nav__menu.classList.toggle("active");
    },
    close() {
      this.$refs.nav__menu.classList.toggle("active");
    },
    closeNav() {
      this.$refs.nav__menu.classList.remove("active");
    },
  },
};
</script>

<style>
</style>