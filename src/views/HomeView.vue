<template>
  <div class="welcome py-1">
    <div class="container py-xl-1 py-lg-1" id="services">
      <div class="row">
        <div class="col-lg-5 welcome-left">
          <h3 class="title-w3ls mt-2 mb-3">Services provided by EazyBank</h3>

          <p class="mt-4 pr-lg-5">
            Eazy Bank offers a diverse range of financial products and banking
            services to customers through a growing branch and ATM network and
            digital channels such as Netbanking, Phonebanking and MobileBanking.
          </p>
        </div>
        <div class="col-lg-7 welcome-right text-center mt-lg-0 mt-5">
          <div class="row">
            <div class="col-sm-4 service-1-w3pvt serve-gd1">
              <div class="serve-grid mt-4">
                <span class="s1"><fa icon="users" /></span>
                <p class="mt-2">Personal Loan</p>
              </div>
            </div>
            <div class="col-sm-4 service-1-w3pvt serve-gd2">
              <div class="serve-grid mt-4">
                <span class="s2"><fa icon="handshake" /></span>
                <p class="mt-2">Business Loan</p>
              </div>
              <div class="serve-grid mt-4">
                <span class="s3"><fa icon="home" /></span>
                <p class="mt-2">Home Loan</p>
              </div>
            </div>
            <div class="col-sm-4 service-1-w3pvt serve-gd3">
              <div class="serve-grid mt-4">
                <span class="s4"><fa icon="car" /></span>
                <p class="mt-2">Auto Loan</p>
              </div>
              <div class="serve-grid mt-4">
                <span class="s5"><fa icon="stethoscope" /></span>
                <p class="text-li mt-2">Health Loan</p>
              </div>
              <div class="serve-grid mt-4">
                <span class="s6"><fa icon="graduation-cap" /></span>
                <p class="mt-2">Education Loan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  font-family: Poppins-Bold, sans-serif;
}

/*---------------------------------------------*/
a {
  font-family: Poppins-Bold;
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}

a:focus {
  outline: none !important;
}

a:hover {
  text-decoration: none;
  color: #1b3815;
}

/*---------------------------------------------*/
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

p {
  font-family: Poppins-Bold;
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0px;
}

ul,
li {
  margin: 0px;
  list-style-type: none;
}

/*---------------------------------------------*/
input {
  outline: none;
  border: none;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: none;
  -webkit-appearance: none;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus,
input:focus {
  border-color: transparent !important;
}

input::-webkit-input-placeholder {
  color: #1b3815;
}
input:-moz-placeholder {
  color: #1b3815;
}
input::-moz-placeholder {
  color: #1b3815;
}
input:-ms-input-placeholder {
  color: #1b3815;
}

textarea::-webkit-input-placeholder {
  color: #1b3815;
}
textarea:-moz-placeholder {
  color: #1b3815;
}
textarea::-moz-placeholder {
  color: #1b3815;
}
textarea:-ms-input-placeholder {
  color: #1b3815;
}

/*---------------------------------------------*/
button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

iframe {
  border: none !important;
}

/*//////////////////////////////////////////////////////////////////
[ Utility ]*/
.txt1 {
  font-family: Poppins-Bold;
  font-size: 15px;
  color: #999999;
  line-height: 1.4;
}

.txt2 {
  font-family: Poppins-Bold;
  font-size: 15px;
  color: #57b846;
  line-height: 1.4;
}

.txt3 {
  font-family: Georgia, serif;
  font-size: 15px;
  color: #57b846;
  line-height: 1.4;
  text-transform: uppercase;
}

/*//////////////////////////////////////////////////////////////////
[ login ]*/

.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login100 {
  width: 100%;
  min-height: 90vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
}

.wrap-login100 {
  width: 500px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
}

/*==================================================================
[ Form ]*/

.login100-form {
  width: 100%;
  position: relative;
}

.login100-form-title {
  font-family: Georgia, serif;
  font-size: 30px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  display: block;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #57b846;
  padding-top: 20px;
  padding-bottom: 20px;
}

/*------------------------------------------------------------------
[ Input ]*/

.wrap-input100 {
  width: 100%;
  background-color: #fff;
  border-radius: 27px;
  position: relative;
  z-index: 1;
}

.input100 {
  font-family: Georgia, serif;
  font-size: 15px;
  color: #1b3815;
  line-height: 1.2;
  position: relative;
  display: block;
  width: 100%;
  height: 55px;
  background: #ebebeb;
  border-radius: 27px;
  padding: 0 35px 0 35px;
}

/*------------------------------------------------------------------
[ Focus Input ]*/

.focus-input100 {
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 31px;
  background-color: #ebebeb;
  pointer-events: none;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input100:focus + .focus-input100 {
  width: calc(100% + 20px);
}

/*------------------------------------------------------------------
[ Button ]*/
.container-login100-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.login100-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  background-color: #57b846;
  border-radius: 25px;

  font-family: Georgia, serif;
  font-size: 15px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login100-form-btn:hover {
  background-color: #1b3815;
}

/*------------------------------------------------------------------
[ Alert validate ]*/

.validate-input {
  position: relative;
}

.alert-validate::before {
  content: attr(data-validate);
  position: absolute;
  z-index: 1000;
  max-width: 70%;
  background-color: #fff;
  border: 1px solid #c80000;
  border-radius: 14px;
  padding: 4px 25px 4px 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 10px;
  pointer-events: none;

  font-family: Georgia, serif;
  color: #c80000;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;

  visibility: hidden;
  opacity: 0;

  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  transition: opacity 0.4s;
}

.alert-validate::after {
  content: "\f06a";
  font-family: FontAwesome;
  display: block;
  position: absolute;
  z-index: 1100;
  color: #c80000;
  font-size: 16px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 16px;
}

.alert-validate:hover:before {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }
}

/*//////////////////////////////////////////////////////////////////
[ Responsive ]*/
@media (max-width: 576px) {
  .login100-form {
    padding-left: 15px;
    padding-right: 15px;
  }
}

/*--
	Author: W3Layouts
	Author URL: http://w3layouts.com
	License: Creative Commons Attribution 3.0 Unported
	License URL: http://creativecommons.org/licenses/by/3.0/
--*/

html,
body {
  margin: 0;
  font-size: 100%;
  background: #fff;
  scroll-behavior: smooth;
  font-family: "Catamaran", sans-serif;
}

body a {
  text-decoration: none;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}

a:hover {
  text-decoration: none;
  opacity: 0.8;
}

input[type="button"],
input[type="submit"],
input[type="text"],
input[type="email"],
input[type="search"] {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  font-family: "Catamaran", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: "Catamaran", sans-serif;
}

p {
  font-size: 0.9em;
  color: #777;
  line-height: 1.9em;
  letter-spacing: 1px;
}

ul {
  margin: 0;
  padding: 0;
}

.overlay,
.overlay.sec {
  min-height: 50em;
  background: rgba(0, 0, 0, 0.44);
}

.overlay.sec {
  background: rgba(0, 0, 0, 0.62);
}

.overlay1 {
  min-height: 750px;
  background: rgba(0, 0, 0, 0.5);
}

.read {
  color: #fff;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 2px;
  display: inline-block;
  border: none;
  outline: none;
  background: #ec1c24;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  -moz-border-radius: 50%;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.34);
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.34);
  -o-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.34);
  -webkit-transition: transform 0.2s linear, -webkit-box-shadow 0.2s linear;
  -moz-transition: transform 0.2s linear, -moz-box-shadow 0.2s linear;
  transition: transform 0.2s linear, box-shadow 0.2s linear;
  padding: 0.6em 2em;
}

.read span {
  font-size: 3em;
  line-height: 1.5em;
  margin-left: 8px;
}

.read:hover,
.book-appo {
  opacity: 0.9;
}

.book-appo {
  background: #f54785;
}

.banner-w3ls-inner p {
  color: #fff;
  letter-spacing: 3px;
  margin: 1em 0;
}

/*-- //banner style --*/

/* header */
/* CSS Document */
.w3pvt-bg {
  background: #fff;
  padding: 1.5em;
  display: flex;
}

#logo a {
  float: left;
  font-size: 1.2em;
  display: initial;
  margin: 0;
  letter-spacing: 1px;
  color: #fff;
  padding: 0px 0;
  border: none;
  font-weight: 600;
  text-transform: capitalize;
}

div#logo h1 span {
  color: #fdbd10;

  vertical-align: middle;
}

header {
  position: absolute;
  z-index: 9;
  width: 100%;
  padding: 1rem 0;
}

.toggle,
[id^="drop"] {
  display: none;
}

/* Giving a background-color to the nav container. */
nav {
  margin: 0;
  padding: 0;
}

/* Since we'll have the "ul li" "float:left"
 * we need to add a clear after the container. */

nav:after {
  content: "";
  display: table;
  clear: both;
}

/* Removing padding, margin and "list-style" from the "ul",
 * and adding "position:reltive" */
nav ul {
  float: right;
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  margin-top: 0.5em;
}

/* Positioning the navigation items inline */
nav ul li {
  display: inline-block;
  float: left;
}

/* Styling the links */
nav a {
  font-weight: 400;
  color: #555;
  letter-spacing: 2px;
  font-size: 0.9em;
  position: relative;
  padding: 0.5rem;
  margin: 0px 1.1em;
}

nav ul li ul li:hover {
  background: #f8f9fa;
}

/* Background color change on Hover */
nav a:hover {
  color: #0066b2;
  background: transparent;
}

.menu li.active a {
  color: #0066b2;
}

/* Hide Dropdowns by Default
 * and giving it a position of absolute */
nav ul ul {
  display: none;
  position: absolute;
  /* has to be the same number as the "line-height" of "nav a" */
  top: 25px;
  background: #fff;
  padding: 10px;
}

ul.inner-dropdown a:hover {
  color: #333;
}

/* Display Dropdowns on Hover */
nav ul li:hover > ul {
  display: inherit;
}

/* Fisrt Tier Dropdown */
nav ul ul li {
  width: 160px;
  float: none;
  display: list-item;
  position: relative;
}

nav ul ul li a {
  color: #333;
  padding: 5px 10px;
  display: block;
}

/* Second, Third and more Tiers	
 * We move the 2nd and 3rd etc tier dropdowns to the left
 * by the amount of the width of the first tier.
*/
nav ul ul ul li {
  position: relative;
  top: -60px;
  /* has to be the same number as the "width" of "nav ul ul li" */
  left: 170px;
}

/* Change ' +' in order to change the Dropdown symbol */
li > a:only-child:after {
  content: "";
}

/* Media Queries
--------------------------------------------- */

@media all and (max-width: 992px) {
  #logo {
    display: block;
    padding: 0;
    width: 30%;
    text-align: center;
    float: left;
  }

  nav {
    margin: 0;
  }

  .w3pvt-bg {
    padding: 1em;
    display: flex;
    float: right;
    width: 65%;
    justify-content: center;
  }

  nav ul {
    width: 100%;
  }

  /* Hide the navigation menu by default */
  /* Also hide the  */
  .toggle + a,
  .menu {
    display: none;
  }

  /* Stylinf the toggle lable */
  .toggle {
    display: block;
    padding: 0.32em 4em;
    font-size: 20px;
    text-decoration: none;
    border: none;
    float: left;
    background-color: #333;
    color: #fff;
    cursor: pointer !important;
    margin: 0;
    border-radius: 4px;
    margin-right: 1em;
  }

  .menu .toggle {
    float: none;
    text-align: center;
    margin: auto;
    width: 70%;
    padding: 5px;
    font-weight: normal;
    font-size: 15px;
    letter-spacing: 1px;
    background: none;
    color: #333;
  }

  .toggle:hover {
    color: #333;
    background-color: #fff;
  }

  /* Display Dropdown when clicked on Parent Lable */
  [id^="drop"]:checked + ul {
    display: block;
    background: #e9ecef;
    padding: 15px 0;
    text-align: center;
  }

  /* Change menu item's width to 100% */
  nav ul li {
    display: block;
    width: 100%;
    padding: 5px 0;
    margin: 0;
  }

  nav ul ul .toggle,
  nav ul ul a {
    padding: 0 40px;
  }

  nav ul ul ul a {
    padding: 0 80px;
  }

  nav a:hover,
  nav ul ul ul a {
    background-color: transparent;
  }

  nav ul li ul li .toggle,
  nav ul ul a,
  nav ul ul ul a {
    padding: 14px 20px;
    color: #fff;
    font-size: 17px;
  }

  /* Hide Dropdowns by Default */
  nav ul ul {
    float: none;
    position: static;
    color: #ffffff;
    /* has to be the same number as the "line-height" of "nav a" */
  }

  /* Hide menus on hover */
  nav ul ul li:hover > ul,
  nav ul li:hover > ul {
    display: none;
  }

  /* Fisrt Tier Dropdown */
  nav ul ul li {
    display: block;
    width: 100%;
    padding: 0;
  }

  nav ul ul ul li {
    position: static;
    /* has to be the same number as the "width" of "nav ul ul li" */
  }

  nav a {
    color: #333;
  }

  nav a:hover {
    color: #333;
  }

  .menu li.active a {
    color: #333;
  }

  nav ul ul li a {
    display: inline-block;
    font-size: 15px;
  }

  ul.inner-dropdown {
    padding-bottom: 0 !important;
    padding-top: 8px !important;
  }
}

@media all and (max-width: 330px) {
  nav ul li {
    display: block;
    width: 94%;
  }
}

li.icons a {
  width: 34px;
  height: 34px;
  text-align: center;
  display: inline-block;
  font-size: 13px;
  border-radius: 50%;
  line-height: 33px;
  padding: 0;
}

li.icons a.face-bk {
  background: #3b5998;
}

li.icons a.twitter {
  background: #1da1f2;
}

li.icons a.dribble {
  background: #ea4c89;
}

/*-- // header --*/
.banner-w3-pvt-top-icons li {
  display: inline-block;
  text-shadow: 3px 1px 3px rgba(45, 45, 45, 0.38);
  font-size: 1em;
  color: #fff;
  font-weight: 400;
  line-height: 1em;
  text-transform: uppercase;
  letter-spacing: 3px;
}

li.icons a {
  width: 48px;
  height: 48px;
  text-align: center;
  display: inline-block;
  font-size: 1em;
  border-radius: 50%;
  line-height: 33px;
  padding: 0;
  background: transporant;
  color: #fff;
}

/*-- // header --*/
/*-- /banner-bottom --*/
.sub-vj {
  color: #777;
  font-size: 1em;
  font-weight: 500;
}

/*-- banner bottom --*/
.bottom-grids h4 {
  font-size: 1.4em;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 600;
  color: #555;
}

.bottom-grids p {
  color: #888;
  padding: 0 1em;
}

.bottom-grid span.fa {
  font-size: 50px;
}

span.border-line {
  display: block;
  height: 1px;
  width: 100%;
  position: absolute;
  top: 30%;
  z-index: -1;
  border-top: 1px dashed #ddd;
}

.bottom-grids {
  position: relative;
  z-index: 1;
}

.bottom-grid p.number {
  background: #333;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  color: #fff;
  border-radius: 50%;
  margin: 2em auto;
}

.clr1 {
  color: #0099e5;
}

.clr2 {
  color: #ff4c4c;
}

.clr3 {
  color: #34bf49;
}

/*-- //banner bottom --*/
/*-- //banner-bottom --*/
/*-- features --*/
h3.title-w3ls,
h3.title-w3ls.two {
  font-size: 3em;
  color: #444;
}

h3.title-w3ls.two {
  color: #fff;
}

.about {
  background: #f7f7f7;
}

/*-- //features --*/
.ab-content h4 {
  font-size: 1.2em;
  color: #4c4d4e;
  margin: 2em 0 1em 0;
  text-transform: uppercase;
  font-weight: 600;
}

ul.tic-info li span {
  color: #ec1c24;
  font-size: 1.4em;
  vertical-align: middle;
}

ul.tic-info li {
  color: #566773;
  font-size: 0.9em;
  margin-bottom: 1.5em;
  letter-spacing: 1px;
}

.progress-bar-striped {
  background-image: none;
  background-size: 0.5rem 0.5rem;
}

.progress-one .progress {
  height: 0.5rem;
  background: #2baf2b;
}

h4.progress-vj {
  color: #555;
  font-size: 0.85em;
  text-transform: uppercase;
  margin-bottom: 1em;
  letter-spacing: 1px;
  font-weight: 500;
}

.progress-one .progress {
  height: 0.3rem;
  background: #444;
  border-radius: 0px;
}

.gd-bottom.process-1 {
  margin-top: 3em;
}

/*-- /stats --*/
.stats_w3-pvt_counter_grid span {
  font-size: 35px;
  margin-bottom: 0.7em;
}

p.para-w3-pvt {
  font-size: 15px;
  text-transform: uppercase;
}

p.counter {
  color: #444;
  font-size: 3em;
  font-weight: 600;
  line-height: 0.7em;
}

.prodct1 h4 strong {
  font-size: 1.4em;
}

.f1 {
  background: #0066b2;
}

.f2 {
  background: #fdbd10;
}

.f3 {
  background: #ff0b00;
}

.f4 {
  background: #ae63e4;
}

/*-- //stats --*/

/* about */

.serve-grid {
  background: #fff;
  padding: 4em 1em;
  -webkit-box-shadow: 5px 7px 23px 0px rgba(58, 52, 82, 0.16);
  -moz-box-shadow: 5px 7px 23px 0px rgba(58, 52, 82, 0.16);
  box-shadow: 5px 7px 23px 0px rgba(58, 52, 82, 0.16);
}

.serve-gd1 {
  margin-top: 12em;
}

.serve-gd2 {
  margin-top: 6em;
}

.serve-gd3 {
  margin-top: 0em;
}

.serve-grid p {
  font-size: 1em;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 600;
  color: #555;
}

.serve-grid span {
  font-size: 2em;
}

.s1 {
  color: #0099e5;
}

.s2 {
  color: #ff4c4c;
}

.s3 {
  color: #34bf49;
}

.s4 {
  color: #0dd3ff;
}

.s5 {
  color: #ff4f81;
}

.s6 {
  color: #ffd900;
}

h4.loan-vj {
  font-size: 1.4em;
  color: #555;
}

.welcome-left {
  margin-top: 11em;
}

.welcome-left h4 {
  color: #ec1c24;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9em;
  margin-bottom: 1em;
}

p.test span {
  font-size: 2em;
  color: #ff4c4c;
}

.test-gd img {
  border-radius: 50%;
  -webkit-box-shadow: 5px 7px 23px 0px rgba(58, 52, 82, 0.16);
  -moz-box-shadow: 5px 7px 23px 0px rgba(58, 52, 82, 0.16);
  box-shadow: 5px 7px 23px 0px rgba(58, 52, 82, 0.16);
}

.serve-grid.test-gd {
  background: none;
  padding: 1em 1em;
  box-shadow: none;
}
</style>
