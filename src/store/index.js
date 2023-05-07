import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: null,
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
      location.reload();
    },
    UPDATE_USER(state, data) {
      state.user = data;
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
    logout({ commit }) {
      commit("CLEAR_USER_DATA");
    },
  },
  modules: {},
});
