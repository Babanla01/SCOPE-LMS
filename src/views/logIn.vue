<template>
  <main class="main section heros">
    <section class="sign__up">
      <div class="signup grid">
        <div class="signup__testimonial">
          <h2 class="signup__testimonial-title">Students Testimonials</h2>
          <p class="signup__testimonial-detail">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <div class="sigup__testimonials">
            <Testimony />
            <!-- <img src="/images/ContainerheroImg.png" alt="" /> -->
          </div>
        </div>
        <div class="signup__container">
          <div class="sign__ups grid">
            <h1 class="sign__ups-header">Login</h1>
            <p class="sign__ups-details">
              Welcome back! Please log in to access your account.
            </p>
            <form
              action=""
              class="login__form grid"
              @submit.prevent="handleLogin"
            >
              <div class="input__container">
                <label for="" class="labels">Email:</label>
                <input
                  type="email"
                  class="inputs"
                  placeholder="Enter your Email"
                  v-model="email"
                />
              </div>
              <div class="input__container password__container">
                <label for="" class="labels">Password:</label>
                <input
                  type="password"
                  class="inputs"
                  placeholder="Enter your Password"
                  v-model="password"
                />
                <i class="bi bi-eye-fill input__icons"></i>
                <small class="forget__pass">Forgot Password?</small>
              </div>
              <div class="input__container checkbox__container">
                <input type="checkbox" />
                <label for="" class="labels">Remember Me</label>
              </div>
              <button class="button btn__primary btn__block">Login</button>
            </form>
            <div class="hrs">
              <div style="width: 100%">
                <hr />
              </div>
              <p class="or">OR</p>
              <div style="width: 100%">
                <hr />
              </div>
            </div>
            <button class="button btn__block">
              <i class="bi bi-google"></i> Login with Google
            </button>
            <p class="alt">
              Dont have an account? <a href="" class="alt__link">Sign Up</a>
              <i class="bi bi-arrow-up-right"></i>
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
import Testimony from "@/components/Testimony.vue";
import axios, { Axios } from "axios";
import swal from "sweetalert2";
import router from "@/router";
export default {
  name: "login",
  components: { Testimony },
  data() {
    return {
      email: "",
      password: "",
      isValid: true,
      User: [],
      emails: [],
      passwords: [],
    };
  },
  methods: {
    async fetchUser() {
      try {
        const response = await axios.get(`http://localhost:3000/user`);
        this.User = response.data;
        // swal
        //   .fire({
        //     icon: "success",
        //     title: "success",
        //     text: "done",
        //   })
        //   .then(() => {
        //     location.reload();
        //   });
      } catch (error) {
        console.log("erroe= " + error);
      }
    },
    handleLogin() {
      if (this.checkEmail(this.email) && this.checkPass(this.password)) {
        swal
          .fire({
            icon: "success",
            title: "LOGIN SUCCESSFUL",
            text: "DONE",
          })
          .then(() => {
            router.push("/");
          });
      } else if (this.checkEmail(this.email) || this.checkPass(this.password)) {
        swal
          .fire({
            icon: "error",
            title: "Invalid Email / Password ",
            text: "Check Your Details",
          })
          .then(() => {
            location.reload();
          });
      } else if (!this.checkEmail(this.email) && !this.checkPass(this.pass)) {
        swal
          .fire({
            icon: "error",
            title: "Invalid Email & Password ",
            text: "Sign Up",
          })
          .then(() => {
            router.push("/SignUp");
          });
      }
    },

    checkEmail(email) {
      this.User.forEach((user) => {
        this.emails.push(user.email);
      });

      return this.emails.includes(email);
    },
    checkPass(pass) {
      this.User.forEach((user) => {
        this.passwords.push(user.password);
      });

      return this.passwords.includes(pass);
    },
  },
  mounted() {
    this.fetchUser();
    // this.checkEmail;
    // this.checkPass;
  },
};
</script>
<style>
</style>