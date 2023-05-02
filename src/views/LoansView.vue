<template>
  <div class="site-section">
    <div class="table-responsive-md">
      <div class="row mb-4">
        <div class="col-md-7">
          <h3 class="heading-21921">Current Outstanding Balance</h3>
        </div>
      </div>
      <div class="row text-white align-items-center text-center h-100">
        <div class="col-md-4 bg-dark p-5" style="height: 130px">
          <h1 class="text-white">{{ currOutstandingBalance || currency }}</h1>
        </div>
      </div>
    </div>
    <div class="table-responsive-md">
      <div class="row mb-4">
        <div class="col-md-7">
          <h3 class="heading-21921">Loan Details</h3>
        </div>
      </div>
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">Start Date</th>
            <th scope="col">Type</th>
            <th scope="col">Total Loan</th>
            <th scope="col">Amount Paid</th>
            <th scope="col">Outstanding Amt</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(loan, index) of loans" :key="index">
            <th>{{ loan.startDt }}</th>
            <td>{{ loan.loanType }}</td>
            <td>{{ loan.totalLoan || currency }}</td>
            <td>{{ loan.amountPaid || currency }}</td>
            <td>{{ loan.outstandingAmount || currency }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row mb-5">
      <div class="col">
        <router-link to="/dashboard"
          ><button class="btn btn-eazybank">BACK</button></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoansView",
  data() {
    return {
      currOutstandingBalance: "",
      currency: "",
      loans: [],
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
