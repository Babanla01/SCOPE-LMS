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
            <h1 class="sign__ups-header">Sign Up</h1>
            <p class="sign__ups-details">
              Create an account to unlock exclusive features.
            </p>
            <form
              action=""
              class="signup__form grid"
              @submit.prevent="handleLogin"
            >
              <div class="input__container">
                <label for="" class="labels">Full Name:</label>
                <input
                  type="text"
                  class="inputs"
                  placeholder="Enter your Name"
                  v-model="fullname"
                />
                <p ref="fullerrorr"></p>
              </div>
              <div class="input__container">
                <label for="" class="labels">Email:</label>
                <input
                  type="email"
                  class="inputs"
                  placeholder="Enter your Email"
                  v-model="email"
                />
                <p ref="emailerrror"></p>
              </div>
              <div class="input__container password__container">
                <label for="" class="labels">Password:</label>
                <input
                  type="password"
                  class="inputs"
                  placeholder="Enter your Password"
                  v-model="password"
                />
                <i class="bi bi-eye-slash input__icon"></i>
              </div>
              <div class="input__container checkbox__container">
                <input type="checkbox" v-model="terms" />
                <label for="" class="labels"
                  >I agree with Terms of Use and Privacy Policy</label
                >
                <p>{{ terms }}</p>
              </div>
              <button class="button btn__primary btn__block">Sign Up</button>
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
              <i class="bi bi-google"></i> Sign Up with Google
            </button>
            <p class="alt">
              Already have an account? <a href="" class="alt__link">Login</a>
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
import axios from "axios";
import swal from "sweetalert2";

export default {
  components: { Testimony },
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      terms: false,
      isValid: true,
      user: [],
      fullnames: [],
      emails: [],
    };
  },
  methods: {
    async getData() {
      try {
        const res = await axios.get(`http://localhost:3000/user`);
        this.user = res.data;
        // this.checkFullname();
        // console.log(this.user);
      } catch (error) {
        console.log(error);
      }
    },
    async saveData() {
      try {
        const formInputs = {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
          terms: this.terms,
        };

        await axios.post(`http://localhost:3000/user`, formInputs);
        swal
          .fire({
            icon: "success",
            title: "success",
            text: "done",
          })
          .then(() => {
            location.reload();
          });
        this.formInputs = {
          fullname: "",
          email: "",
          password: "",
          terms: false,
        };
      } catch (error) {
        swal.fire({
          icon: "error",
          title: "error",
          text: "error code",
        });
      }
    },
    isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    handleLogin() {
      this.validateFullname();
      this.validateEmail();
      if (this.isValid) {
        this.saveData();
      } else {
        swal.fire({
          icon: "error",
          title: "error",
          text: "error code",
        });

        // location.reload();
      }
    },
    validateFullname() {
      if (this.fullname === "") {
        // alert("please fill up this field");
        this.$refs.fullerrorr.textContent = "please fill up this field";
        this.isValid = false;
      } else if (this.fullname.length < 7) {
        this.$refs.fullerrorr.textContent = "please fill up this field";
        this.isValid = false;
      } else if (this.checkFullname(this.fullname)) {
        this.$refs.fullerrorr.textContent = "Name already exist";
        this.isValid = false;
      }
    },
    validateEmail() {
      if (this.email === "") {
        this.$refs.emailerrror.textContent = "please fill up this field";
        this.isValid = false;
      } else if (!this.isValidEmail(this.email)) {
        this.$refs.emailerrror.textContent = "input a valid email";
        this.isValid = false;
      } else if (this.checkEmail(this.email)) {
        this.$refs.emailerrror.textContent = "Email already exist";
        this.isValid = false;
      }
    },
    checkFullname(fullname) {
      // this.user.forEach((user) => console.log(user.fullname));
      this.user.forEach((user) => {
        this.fullnames.push(user.fullname);
      });

      return this.fullnames.includes(fullname);
    },
    checkEmail(email) {
      this.user.forEach((user) => {
        this.emails.push(user.email);
      });

      return this.emails.includes(email);
    },
  },
  mounted() {
    // this.saveData;
    this.getData();
  },
};
</script>

<style>
</style>