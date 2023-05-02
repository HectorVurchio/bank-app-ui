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
export default {
  name: "noticesView",
  data() {
    return {
      notices: [
        {
          noticeSummary: "A summary of news",
          noticeDetails: "A detailed explanation of the news",
        },
        {
          noticeSummary: "A summary of news",
          noticeDetails: "A detailed explanation of the news",
        },
        {
          noticeSummary: "A summary of news",
          noticeDetails: "A detailed explanation of the news",
        },
        {
          noticeSummary: "A summary of news",
          noticeDetails: "A detailed explanation of the news",
        },
      ],
    };
  },
};
</script>
