<template>
  <div class="site-section">
    <div class="table-responsive-md">
      <div class="row mb-4">
        <div class="col-md-7">
          <h3 class="heading-21921">Current Balance</h3>
        </div>
      </div>
      <div class="row text-white align-items-center text-center h-100">
        <div class="col-md-4 bg-dark p-5" style="height: 130px">
          <h1 class="text-white">
            {{
              (transactions && transactions.length) > 0
                ? transactions[0].closingBalance || currency
                : " "
            }}
          </h1>
        </div>
      </div>
    </div>
    <div class="table-responsive-md">
      <div class="row mb-4">
        <div class="col-md-7">
          <h3 class="heading-21921">Transaction Details</h3>
        </div>
      </div>
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Summary</th>
            <th scope="col">Withdrawal</th>
            <th scope="col">Deposit</th>
            <th scope="col">Closing Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(transaction, index) of transactions" :key="index">
            <th>{{ transaction.transactionDt }}</th>
            <td>{{ transaction.transactionSummary }}</td>
            <td>
              {{
                transaction.transactionType == "Withdrawal"
                  ? transaction.transactionAmt || currency
                  : " "
              }}
            </td>
            <td>
              {{
                transaction.transactionType == "Deposit"
                  ? transaction.transactionAmt || currency
                  : " "
              }}
            </td>
            <td>{{ transaction.closingBalance || currency }}</td>
          </tr>
        </tbody>
      </table>
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
  </div>
</template>
<script>
export default {
  name: "BalanceView",
  data() {
    return {
      currency: "",
      transactions: [{}],
    };
  },
};
</script>
<style scoped>
.heading-21921 {
  position: relative;
  padding: 0;
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

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: 0px;
  margin-left: 0px;
}

.table-responsive-md {
  margin: 50px;
}
</style>
