import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: null,
    account: null,
    balance: null,
    loans: null,
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    /* eslint-disable */
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `${userData.headers.authorization}`;
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem("user");
      localStorage.removeItem("account");
      localStorage.removeItem("transactions");
      localStorage.removeItem("cards");
      localStorage.removeItem("loans");
      location.reload();
    },
    SET_ACCOUNT_DATA(state, accountData) {
      state.account = accountData;
      localStorage.setItem("account", JSON.stringify(accountData));
    },
    SET_BALANCE_DATA(state, transactionsData) {
      state.balance = transactionsData;
      localStorage.setItem("transactions", JSON.stringify(transactionsData));
    },
    SET_CARDS_DATA(state, cardsData) {
      state.cards = cardsData;
      localStorage.setItem("cards", JSON.stringify(cardsData));
    },
    SET_LOANS_DATA(state, loansData) {
      state.loans = loansData;
      localStorage.setItem("loans", JSON.stringify(loansData));
    },
    UPDATE_USER(state, data) {
      state.user = data;
      axios.defaults.headers.common[
        "Authorization"
      ] = `${data.headers.authorization}`;
    },
  },
  actions: {
    login({ commit }, credentials) {
      return axios
        .get("http://localhost:3000/user", {
          auth: { username: credentials.email, password: credentials.password },
        })
        .then((result) => {
          commit("SET_USER_DATA", result);
        });
    },
    updateUser({ commit }, data) {
      commit("UPDATE_USER", data);
    },
    accountData({ commit }, parameters) {
      commit("SET_ACCOUNT_DATA", parameters);
    },
    balanceData({ commit }, parameters) {
      commit("SET_BALANCE_DATA", parameters);
    },
    cardsData({ commit }, parameters) {
      commit("SET_CARDS_DATA", parameters);
    },
    loansData({ commit }, parameters) {
      commit("SET_LOANS_DATA", parameters);
    },
    logout({ commit }) {
      commit("CLEAR_USER_DATA");
    },
  },
  modules: {},
});
