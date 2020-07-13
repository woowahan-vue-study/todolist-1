import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { BASE_URL, USER_NAMES } from "../util/constant.js";

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = BASE_URL;

export default {
  get() {
    return Vue.axios.get(USER_NAMES.DONGLE);
  },
  add(params) {
    return Vue.axios.post(USER_NAMES.DONGLE, params);
  },
  update({ _id }) {
    return Vue.axios.put(`${USER_NAMES.DONGLE}/${_id}/toggle`);
  },
  delete(id) {
    return Vue.axios.delete(`${USER_NAMES.DONGLE}/${id}`);
  }
};
