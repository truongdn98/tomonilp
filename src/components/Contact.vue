<template>
  <section id="contact">
    <div class="contact container">
      <div>
        <h1 class="section-title">Thông tin liên hệ</h1>
      </div>
      <div class="border"></div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon">
            <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
          </div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>1900 2149</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon">
            <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" />
          </div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2>info@saikoexpress.com</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon">
            <img
              src="https://img.icons8.com/bubbles/100/000000/map-marker.png"
            />
          </div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>289-1501 Chibaken Sammushi Matsuomachi Yamamuro 121-2</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "contact-component",
});
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  scroll-behavior: smooth;
}

.section-title {
  font-size: 4rem;
  font-weight: 400;
  color: black;
  margin-bottom: 10px;
  letter-spacing: 0.2rem;
  text-align: center;
}

.section-title span {
  color: crimson;
}

/* contact Section */
#contact .contact {
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
}

#contact .contact-items {
  /* max-width: 400px; */
  width: 100%;
}

#contact .contact-item {
  width: 80%;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  padding: 30px;
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 18px 0 #0000002c;
  transition: 0.3s ease box-shadow;
}

#contact .contact-item:hover {
  box-shadow: 0px 0px 5px 0 #0000002c;
}

#contact .icon {
  width: 70px;
  margin: 0 auto;
  margin-bottom: 10px;
}

#contact .contact-info h1 {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 5px;
}

#contact .contact-info h2 {
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 500;
}

@media only screen and (min-width: 768px) {
  /* contact  */
  #contact .contact {
    flex-direction: column;
    padding: 100px 0;
    align-items: center;
    justify-content: center;
    min-width: 20vh;
  }

  #contact .contact-items {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0;
  }

  #contact .contact-item {
    width: 30%;
    margin: 0;
    flex-direction: row;
  }

  #contact .contact-item .icon {
    height: 100px;
    width: 100px;
  }

  #contact .contact-item .icon img {
    object-fit: contain;
  }

  #contact .contact-item .contact-info {
    width: 100%;
    text-align: left;
    padding-left: 20px;
  }

  /* End contact  */
}

/* End Media Query For Tablet */

/* Media Query For Desktop */
@media only screen and (min-width: 1200px) {
  /* header */
  #header .hamburger {
    display: none;
  }
}
</style>
