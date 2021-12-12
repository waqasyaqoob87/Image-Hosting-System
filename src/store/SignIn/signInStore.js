import axios from "axios";
import config from "@/config.js";
import router from "@/router";

const state = {
  signInCredentials: [],
};
const getters = {
  getSignInCredentials: (state) => state.signInCredentials,
};
const actions = {
  SignInCredentials({ commit }, newSignIn) {
    return new Promise((resolve, reject) => {
      // Do something here... lets say, a http call using vue-resource
      console.log("new newSignIn::", newSignIn);
      axios.post(config.SignIn, newSignIn).then(
        (response) => {
          console.log(response.data);
          localStorage.setItem("token", response.data['message']['user']['remember_token']);
          commit("SignInCredentials", response.data);
          // http success, call the mutator and change something in state
          resolve(response); // Let the calling function know that http is done. You may send some data back
        },
        (error) => {
          // http failed, let the calling function know that action did not work out
          reject(error);
        }
      );
    });
  },
  SignOutClear({ commit }) {
    router.push("/");
    let token = localStorage.getItem("token");
    console.log(token)
    axios
      .get(config.logout, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function(response) {
        console.log("sign put :::", response.data);
        commit("SignOutClear");
        router.push("/");
      })
      .catch(function(error) {
        alert(error);
      });
  },
};
const mutations = {
  SignInCredentials(state, payload) {
    state.signInCredentials.FullName = payload.FullName;
    state.signInCredentials.CompanyName = payload.CompanyName;
  },
  SignOutClear() {
    // console.log("local storage :::", localStorage.getItem("vuex"));
    localStorage.clear();
  },
};
export default { state, getters, mutations, actions };
