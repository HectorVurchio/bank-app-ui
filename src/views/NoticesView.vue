<template>
  <section class="ftco-section" id="cards">
    <div class="container">
      <div class="row">
        <div
          v-for="(notice, index) of notices"
          class="col-md-4 cardheader"
          :key="index"
        >
          <div class="card">
            <div class="icon-wrap px-4 pt-4">
              <div
                class="icon d-flex justify-content-center align-items-center bg-success rounded-circle fa fa-envelope-open"
              >
                <span class="ion-logo-ionic text-light"></span>
              </div>
            </div>
            <div class="card-body pb-5 px-4">
              <h5 class="card-title">{{ notice.noticeSummary }}</h5>
              <p class="card-text">{{ notice.noticeDetails }}</p>
              <router-link to="/contact"
                ><a class="btn btn-success">Contact US</a></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "noticesView",
  data() {
    return {
      notices: [],
    };
  },

  beforeRouteEnter(routeTo, routeFrom, next) {
    axios
      .get("http://localhost:3000/notices")
      .then((response) => {
        next((comp) => {
          if (Array.isArray(response.data)) {
            console.log(response.data);
            comp.notices = response.data;
          } else {
            comp.$router.push({
              name: "NotFound",
              params: { pathMatch: routeTo.path.split("/").slice(1) },
              query: routeTo.query,
              hash: routeTo.hash,
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
        next({ name: "NotFound" });
      });
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.d-flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}

.justify-content-center {
  -webkit-box-pack: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
}

.align-items-center {
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
}

.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

h1,
h2,
h3,
h4,
h5,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

h5 {
  display: block;
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.ftco-section {
  padding: 3em 0;
  position: relative;
  text-align: left;
}
.ftco-section.ftco-section-2 {
  padding: 6em 0;
}
.ftco-section .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  opacity: 0;
  background: red;
  background: -moz-linear-gradient(top, red 0%, red 44%, #1f0000 100%);
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, red),
    color-stop(44%, red),
    color-stop(100%, #1f0000)
  );
  background: -webkit-linear-gradient(top, red 0%, red 44%, #1f0000 100%);
  background: -o-linear-gradient(top, red 0%, red 44%, #1f0000 100%);
  background: -ms-linear-gradient(top, red 0%, red 44%, #1f0000 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(red),
    color-stop(44%, red),
    to(#1f0000)
  );
  background: linear-gradient(to bottom, red 0%, red 44%, #1f0000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff0000', endColorstr='#1f0000', GradientType=0 );
}

#cards .card {
  border: none;
  -webkit-box-shadow: 0px 11px 30px -9px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 11px 30px -9px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 11px 30px -9px rgba(0, 0, 0, 0.05);
}
#cards .card .card-header {
  border: none;
  background: #343a40;
  color: #fff;
}
#cards .card .card-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  background: #fff;
}

#cards .icon-wrap {
  position: relative;
}
#cards .icon-wrap .icon {
  width: 60px;
  height: 60px;
}
#cards .icon-wrap .icon span {
  font-size: 20px;
}
#cards .icon-wrap .icon.bg-info {
  border: 5px solid #92dcfe;
}
#cards .icon-wrap .icon.bg-success {
  border: 5px solid #baf2ce;
}
#cards .icon-wrap .icon.bg-warning {
  border: 5px solid #ffefd6;
}

.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group:first-child .list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.card > .list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: 0.75rem;
}

.card-text:last-child {
  margin-bottom: 0;
}

.pb-5,
.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.cardheader {
  margin-top: 15px;
}
</style>
