<template>
  <section class="w3l-contact-1">
    <div class="contacts-9 section-gap">
      <div class="wrapper">
        <h3 class="global-title text-center">Contact us</h3>
        <div class="d-grid contact-view">
          <div class="cont-details">
            <div class="cont-top">
              <div class="cont-left text-center">
                <span class="fa fa-phone"></span>
              </div>
              <div class="cont-right">
                <h6>Call Us</h6>
                <p><a href="tel:+456 68 925 89">+456 68 925 89</a></p>
              </div>
            </div>
            <div class="cont-top margin-up">
              <div class="cont-left text-center">
                <span class="fa fa-envelope-o"></span>
              </div>
              <div class="cont-right">
                <h6>Email Us</h6>
                <p>
                  <a href="mailto:support@eazybank.com" class="mail"
                    >support@eazybank.com</a
                  >
                </p>
              </div>
            </div>
            <div class="cont-top margin-up">
              <div class="cont-left text-center">
                <span class="fa fa-map-marker"></span>
              </div>
              <div class="cont-right">
                <h6>Address</h6>
                <p>123 Main Street, New York, NY 10030</p>
              </div>
            </div>
          </div>
          <div class="map-content-9">
            <span class="text-success" v-if="contactId"
              >Your message is submitted. Reference ID is {{ contactId }}</span
            >
            <form @submit="onSubmit">
              <div class="twice">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  placeholder="Name"
                  aria-invalid="true"
                  v-model="name"
                  :style="
                    errors.name ? 'border-color:red;' : 'border-color:default;'
                  "
                />
                <span class="text-danger" v-if="errors.name">{{
                  errors.name
                }}</span>
              </div>
              <div class="twice">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                  v-model="email"
                  :style="
                    errors.email ? 'border-color:red;' : 'border-color:default;'
                  "
                />
                <span class="text-danger" v-if="errors.email">{{
                  errors.email
                }}</span>
              </div>
              <div class="twice">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  v-model="subject"
                  :style="
                    errors.subject
                      ? 'border-color:red;'
                      : 'border-color:default;'
                  "
                />
                <span class="text-danger" v-if="errors.subject">{{
                  errors.subject
                }}</span>
              </div>
              <div class="twice">
                <textarea
                  name="message"
                  class="form-control"
                  id="message"
                  placeholder="Message"
                  v-model="message"
                  :style="
                    errors.message
                      ? 'border-color:red;'
                      : 'border-color:default;'
                  "
                ></textarea>
                <span class="text-danger" v-if="errors.message">{{
                  errors.message
                }}</span>
              </div>
              <button type="submit" class="btn btn-contact">
                Send Message
              </button>
            </form>
            <!--
          <span class="text-success" *ngIf="model.contactId">Your message is submitted. Reference ID is {{model.contactId}}</span>
          <form (ngSubmit)="contactForm.valid && saveMessage(contactForm)" #contactForm="ngForm">
            <div class="twice">
              <input type="text" class="form-control" name="contactName" id="contactName" placeholder="Name" required
                [(ngModel)]="model.contactName" #contactName="ngModel">
              <span class="text-danger" *ngIf="(contactName.touched || contactForm.submitted) &&
              contactName.errors?.['required']">Error : Name is required !</span>
            </div>
            <div class="twice">
              <input type="email" class="form-control" name="contactEmail" id="contactEmail" placeholder="Email"
                required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" [(ngModel)]="model.contactEmail"
                #contactEmail="ngModel">
              <span class="text-danger" *ngIf="(contactEmail.touched || contactForm.submitted) &&
                contactEmail.errors?.['required']">Error : Email is required !</span>
              <span class="text-danger" *ngIf="(contactEmail.touched || contactForm.submitted) &&
              contactEmail.errors?.['pattern']">Error : Please provide a valid email address !</span>
            </div>
            <div class="twice">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required
                [(ngModel)]="model.subject" #subject="ngModel">
              <span class="text-danger" *ngIf="(subject.touched || contactForm.submitted) &&
              subject.errors?.['required']">Error : Subject is required !</span>
            </div>
            <div class="twice">
              <textarea name="message" class="form-control" id="message" placeholder="Message" required
                [(ngModel)]="model.message" #message="ngModel">></textarea>
              <span class="text-danger" *ngIf="(message.touched || contactForm.submitted) &&
            message.errors?.['required']">Error : Message is required !</span>
            </div>
            <button type="submit" class="btn btn-contact">Send Message</button>
          </form>
        -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { useField, useForm } from "vee-validate";
// eslint-disable-next-line
import { object, string, number, boolean } from "yup";
import { ref } from "vue";
export default {
  name: "ContactView",
  setup() {
    const contactId = ref(false);
    const validationSchema = object({
      email: string().email().required("we need your email").min(4),
      name: string().required("A cool name is required").min(3),
      subject: string().required("A nice subject must be inserted").min(4),
      message: string().required("Be nice with the messages").min(10),
    });
    const { handleSubmit, errors } = useForm({ validationSchema });

    const onSubmit = handleSubmit((values) => {
      contactId.value = "Que Vaina!";
      console.log("onSubmit", values);
    });

    const { value: email } = useField("email");
    const { value: name } = useField("name");
    const { value: subject } = useField("subject");
    const { value: message } = useField("message");
    return {
      contactId,
      onSubmit,
      email,
      name,
      subject,
      message,
      errors,
    };
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.wrapper {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .wrapper {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .wrapper {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .wrapper {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .wrapper {
    max-width: 1140px;
  }
}

.d-grid {
  display: grid;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

button,
select {
  outline: none;
  appearance: none;
  -webkit-appearance: none;
}

button,
.btn,
select {
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

p {
  margin: 0;
  padding: 0;
}

/* Section top bottom gap */
.section-gap {
  padding: 4.5rem 0;
}

@media screen and (max-width: 767px) {
  .section-gap {
    padding: 3.5rem 0;
  }
}

@media screen and (max-width: 480px) {
  .section-gap {
    padding: 3rem 0;
  }
}
/* / Section top bottom gap */

/* title-styling */
h3.global-title {
  font-size: 40px;
  line-height: 45px;
  color: #16191e;
  margin-bottom: 50px;
  text-transform: capitalize;
}

@media screen and (max-width: 767px) {
  h3.global-title {
    font-size: 40px;
    line-height: 45px;
  }
}

@media screen and (max-width: 600px) {
  h3.global-title {
    font-size: 35px;
    line-height: 40px;
  }
}

@media screen and (max-width: 500px) {
  h3.global-title {
    font-size: 30px;
    line-height: 35px;
  }
}
/* / title-styling */

/* contact1 */
.margin-up {
  margin-top: 2.5rem;
}

h4.sub-title {
  font-size: 16px;
  margin: 0;
  color: #57b846;
  font-weight: normal;
}

.contact-view {
  grid-template-columns: 1fr 1.3fr;
  grid-gap: 30px;
}

.cont-top {
  display: grid;
  grid-template-columns: 20px auto;
  grid-column-gap: 20px;
}

.twice {
  margin-bottom: 20px;
}

.cont-details span.fa {
  font-size: 22px;
  color: #57b846;
  display: block;
  margin-top: 3px;
}

.cont-details h6 {
  text-align: left;
  font-size: 20px;
  color: #051b35;
  font-weight: 600;
}

.cont-details p,
.cont-details p a {
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #777777;
  margin-top: 3px;
}

.cont-details p a:hover {
  text-decoration: underline;
  opacity: 0.8;
  color: #051b35;
}

.cont-details address {
  margin: 25px 0;
}

.cont-details address p {
  margin: 5px 0;
}

.twice-two {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
}

.map-content-9 form input,
.map-content-9 form textarea {
  background: #f8f9fa;
  border: 2px solid rgba(216, 216, 216, 0.3);
  color: #777;
  font-size: 16px;
  padding: 12px 15px;
  width: 100%;
  border-radius: 4px;
  height: 55px;
}

.map-content-9 h5 {
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 20px;
  color: #000000;
}

.map-content-9 form textarea {
  resize: none;
  min-height: 140px;
}

.map-content-9 form input:focus,
.map-content-9 form textarea:focus {
  outline: none;
  border: 2px solid #051b35;
  background: #fff;
  box-shadow: none;
}

button.btn-contact {
  border: none;
  font-size: 16px;
  padding: 15px 30px;
  margin: 20px auto 0;
  color: #fff;
  background: #57b846;
  border-color: #57b846;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.cont-details h6 a {
  color: #051b35;
}

/* contact1-responsive */
@media (max-width: 992px) {
  .cont-details p,
  .cont-details p a {
    font-size: 16px;
  }

  .cont-details h5 {
    font-size: 32px;
    line-height: 35px;
  }

  .contact-view {
    grid-template-columns: 1fr;
  }

  .map-content-9 {
    margin-top: 40px;
  }
}

@media (max-width: 480px) {
  .twice-two {
    grid-template-columns: 1fr;
  }

  button.btn-contact {
    width: 100%;
  }
}
</style>
