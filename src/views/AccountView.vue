<template>
  <div class="site-section">
    <div class="container">
      <div class="row mb-4">
        <div class="col-md-7">
          <h2 class="heading-21921">Account Information</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-4">
            <div class="form-group">
              <label for="customerName">Name</label>
              <input
                type="text"
                class="form-control"
                id="customerName"
                :value="user.name"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="customerEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="customerEmail"
                :value="user.email"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="customerMobileNum">Mobile Number</label>
              <input
                type="text"
                class="form-control"
                id="customerMobileNum"
                :value="user.mobileNumber"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-4">
            <div class="form-group">
              <label for="customerAccNo">Account Number</label>
              <input
                type="text"
                class="form-control"
                id="customerAccNo"
                :value="account.accountNumber"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="customerAccountType">Account Type</label>
              <input
                type="email"
                class="form-control"
                id="customerAccountType"
                :value="account.accountType"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="branchAddress">Branch Address</label>
              <input
                type="text"
                class="form-control"
                id="branchAddress"
                :value="account.branchAddress"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-5">
    <div class="col">
      <router-link to="/dashboard"
        ><button class="btn btn-eazybank" routerLink="/dashboard">
          BACK
        </button></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "AccountView",
  components: {},
  data() {
    return {
      user: {
        name: "Hector",
        email: "hectorvurchio@gmail.com",
        mobileNumber: "+584124416365",
      },
      account: {
        accountNumber: "05809918663513472019",
        accountType: "Savings",
        branchAddress: "Agencia Prebo",
      },
    };
  },
};
</script>
<style scoped>
.heading-21921 {
  position: relative;
  padding: 0;
  margin: 0 0 1.5rem 0;
  line-height: 1;
  font-weight: 900 !important;
  text-align: left;
}

.site-section {
  padding: 3rem 0;
}

label {
  font-size: 1rem;
  text-align: left;
  display: flex;
}
</style>
