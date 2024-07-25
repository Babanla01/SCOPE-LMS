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
        <div class="nav__menu">
          <router-link to="/"><li class="nav__item">Home</li></router-link>
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
          >
        </div>
      </div>
      <div class="nav__btns">
        <router-link to="/SignUp"
          ><button class="button">Sign Up</button></router-link
        >
        <router-link to="/LogIn"
          ><button class="button btn__primary">Login</button></router-link
        >
      </div>
    </nav>
  </header>
</template>


<script>
export default {};
</script>

<style>
</style>