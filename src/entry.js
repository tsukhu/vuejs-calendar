import Vue from "vue";

import moment from "moment-timezone";
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, "$moment", {
  get() {
    return this.$root.moment;
  }
});

import App from "./components/App.vue";

export default function() {
  return new Vue({
    data: {
      moment
    },
    components: {
      App
    },
    render(createElement) {
      return createElement("div", { attrs: { id: "app" } }, [
        createElement("app")
      ]);
    }
  });
}
