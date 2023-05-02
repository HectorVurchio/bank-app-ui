<template>
  <div class="main-content">
    <!-- content -->
    <div class="container-fluid content-top-gap">
      <div class="welcome-msg pt-3 pb-4">
        <h1>
          Hi <span class="text-dark">{{ user.name }}</span
          >, Welcome back
        </h1>
        <p>You logged in as {{ user.role }}</p>
      </div>

      <!-- User data -->
      <div class="statistics">
        <div class="row">
          <div class="col-xl-6 pr-xl-2">
            <div class="row">
              <router-link to="myAccount"
                ><div class="col-sm-6 pr-sm-2 statistics-grid">
                  <div class="card card_border border-primary-top p-4">
                    <i
                      style="font-size: 3em; color: #343a40"
                      class="fa fa-user-circle-o"
                    >
                    </i>
                    <h3 class="text-dark number">Account</h3>
                    <p class="stat-text">View account details</p>
                  </div>
                </div></router-link
              >
              <router-link to="/myBalance"
                ><div class="col-sm-6 pl-sm-2 statistics-grid">
                  <div class="card card_border border-primary-top p-4">
                    <i style="font-size: 3em; color: #343a40" class="fa fa-usd">
                    </i>
                    <h3 class="text-dark number">Balance</h3>
                    <p class="stat-text">View total available balance</p>
                  </div>
                </div></router-link
              >
            </div>
          </div>
          <div class="col-xl-6 pl-xl-2">
            <div class="row">
              <router-link to="/myLoans"
                ><div class="col-sm-6 pr-sm-2 statistics-grid">
                  <div class="card card_border border-primary-top p-4">
                    <i
                      style="font-size: 3em; color: #343a40"
                      class="fa fa-money"
                    >
                    </i>
                    <h3 class="text-dark number">Loans</h3>
                    <p class="stat-text">View Loan Details</p>
                  </div>
                </div></router-link
              >

              <router-link to="/myCards"
                ><div class="col-sm-6 pl-sm-2 statistics-grid">
                  <div
                    class="card card_border border-primary-top p-4"
                    routerLink="/myCards"
                  >
                    <i
                      style="font-size: 3em; color: #343a40"
                      class="fa fa-credit-card"
                    >
                    </i>
                    <h3 class="text-dark number">Cards</h3>
                    <p class="stat-text">View credit card details</p>
                  </div>
                </div></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //content -->
  </div>
  <!-- main content end-->
</template>
<script>
export default {
  name: "DashboardView",
  data() {
    return {
      user: {},
    };
  },
};
</script>
<style scoped>
.sticky-header .main-content {
  padding-top: 40px;
}

.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.content-top-gap {
  margin-top: 60px;
  padding: 20px;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "/";
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: underline;
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #6c757d;
}

.my-breadcrumb {
  padding: 0;
  margin-bottom: 10px;
  list-style: none;
  background-color: transparent;
  border-radius: 0;
  font-size: 14px;
}

.welcome-msg {
  text-align: left;
}

.welcome-msg h1 {
  font-size: 24px;
}

.welcome-msg p {
  font-size: 14px;
}

.text-primary.transparent-bg {
  background: rgba(65, 105, 225, 0.1);
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.statistics-grid .fa,
.statistics-grid .lnr {
  font-size: 50px;
  color: #aaa;
  margin-bottom: 15px;
  transition: 0.3s ease;
  opacity: 0.3;
  position: absolute;
}

.statistics-grid .card__grid--effect .fa,
.statistics-grid .card__grid--effect .lnr {
  color: #aba9a9;
  margin-bottom: 0;
  border-radius: 200px;
  line-height: 60px;
  width: 60px;
  height: 60px;
  display: inline-block;
  text-align: center;
  font-size: 22px;
}

.statistics-grid {
  margin-bottom: 18px;
}

.card {
  position: relative;
  display: flex;
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
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: 0.75rem;
}

.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link + .card-link {
  margin-left: 1.25rem;
}

.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}
.card-header + .list-group .list-group-item:first-child {
  border-top: 0;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
}

.card-img,
.card-img-top,
.card-img-bottom {
  flex-shrink: 0;
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card-deck .card {
  margin-bottom: 15px;
}

.border-primary-top {
  border-top: 4px solid #343a40;
}

.border-primary-top:hover {
  border-top: 4px solid #57b846;
  cursor: pointer;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

h3.number {
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
  text-align: right;
  color: var(--heading-color);
  transition: 0.3s ease;
  margin-bottom: 0;
}

p.stat-text {
  font-size: 14px;
  text-align: right;
}
</style>
