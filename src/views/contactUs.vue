<template>
  <div class="contact grid">
    <div class="contact__header grid">
      <div>
        <h1>Contact Us</h1>
      </div>
      <div>
        <p>
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </p>
      </div>
    </div>
    <div class="contact__container grid">
      <div class="contact__inputs grid">
        <div class="contact__groups grid">
          <div class="contact__group">
            <label for="" class="contact__label">First Name</label>
            <input
              type="text"
              class="contact__input"
              placeholder="Enter First Name"
            />
          </div>
          <div class="contact__group">
            <label for="" class="contact__label">Last Name</label>
            <input
              type="text"
              class="contact__input"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div class="contact__groups grid">
          <div class="contact__group">
            <label for="" class="contact__label">Email</label>
            <input
              type="email"
              class="contact__input"
              placeholder="Enter Your Email"
            />
          </div>
          <div class="contact__group">
            <label for="" class="contact__label">Phone</label>
            <input
              type="tel"
              class="contact__input"
              placeholder="Enter Phone Number"
            />
          </div>
        </div>
        <div class="contact__groups">
          <div class="contact__group">
            <label for="" class="contact__label">Subject</label>
            <input
              type="text"
              class="contact__input"
              placeholder="Enter Your Subject"
            />
          </div>
        </div>
        <div class="contact__groups">
          <div class="contact__group">
            <label for="" class="contact__label">Message</label>
            <!-- <textarea
              name=""
              id=""
              placeholder="Enter Your Message Here"
            ></textarea> -->
            <textarea
              name=""
              id=""
              rows="10"
              placeholder="Enter Your Message"
            ></textarea>
          </div>
        </div>
        <div class="contact__btn">
          <button class="button btn__primary" type="submit">
            Send Your Message
          </button>
        </div>
      </div>
      <div class="contact__address grid">
        <div class="address__group">
          <i class="bi bi-envelope-fill"></i>
          <p class="address">support@skillbridge.com</p>
        </div>
        <div class="address__group">
          <i class="bi bi-telephone-fill"></i>
          <p class="address">+91 00000 00000</p>
        </div>
        <div class="address__group">
          <i class="bi bi-geo-alt-fill"></i>
          <p class="address">Some Where in the World</p>
        </div>
        <div class="address__group socialss">
          <div class="address__socials">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-linkedin"></i>
          </div>
          <p class="address">Social Profiles</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>