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
              <div class="col-sm-6 pr-sm-2 statistics-grid">
                <router-link to="myAccount">
                  <div class="card card_border border-primary-top p-4">
                    <fa
                      icon="wallet"
                      class="fa"
                      style="font-size: 3em; color: #343a40"
                    />

                    <h3 class="text-dark number">Account</h3>
                    <p class="stat-text">View account details</p>
                  </div></router-link
                >
              </div>

              <div class="col-sm-6 pl-sm-2 statistics-grid">
                <router-link to="/myBalance">
                  <div class="card card_border border-primary-top p-4">
                    <fa
                      icon="dollar-sign"
                      class="fa"
                      style="font-size: 3em; color: #343a40"
                    />
                    <h3 class="text-dark number">Balance</h3>
                    <p class="stat-text">View total available balance</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-xl-6 pl-xl-2">
            <div class="row">
              <div class="col-sm-6 pr-sm-2 statistics-grid">
                <router-link to="/myLoans">
                  <div class="card card_border border-primary-top p-4">
                    <fa
                      icon="money-bill"
                      class="fa"
                      style="font-size: 3em; color: #343a40"
                    />
                    <h3 class="text-dark number">Loans</h3>
                    <p class="stat-text">View Loan Details</p>
                  </div>
                </router-link>
              </div>

              <div class="col-sm-6 pl-sm-2 statistics-grid">
                <router-link to="/myCards">
                  <div
                    class="card card_border border-primary-top p-4"
                    routerLink="/myCards"
                  >
                    <fa
                      icon="credit-card"
                      class="fa"
                      style="font-size: 3em; color: #343a40"
                    />
                    <h3 class="text-dark number">Cards</h3>
                    <p class="stat-text">View credit card details</p>
                  </div>
                </router-link>
              </div>
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
    return {};
  },
  created() {},
  computed: {
    user() {
      const database = JSON.parse(localStorage.getItem("user"));
      const individual = database.data;
      return { name: individual.name, role: individual.role };
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}

.content-top-gap {
  margin-top: 60px;
  padding: 20px;
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
