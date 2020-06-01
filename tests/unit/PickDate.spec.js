import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Vue from "vue";
import Vuetify from "vuetify";

import PickDate from "@/components/PickDate.vue";

const localVue = createLocalVue();

localVue.use(Vuex);
Vue.use(Vuetify);

describe("PickDate.vue", () => {
  it("renders PickDate component", () => {
    const wrapper = shallowMount(PickDate);
    expect(wrapper).toBeTruthy();
  });

  it("renders date picker", () => {
    const wrapper = shallowMount(PickDate);
    const datePicker = wrapper.findComponent({ name: "v-date-picker" });
    expect(datePicker.exists()).toBe(true);
  });

  it("Datepicker defaults to current date", () => {
    const wrapper = shallowMount(PickDate);
    const datePicker = wrapper.findComponent({ name: "v-date-picker" });
    expect(datePicker.props("value")).toBe(
      new Date().toISOString().substr(0, 10),
    );
  });

  it("Datepicker containes valid date format YYYY-MM-DD", () => {
    const wrapper = shallowMount(PickDate);
    const datePicker = wrapper.findComponent({ name: "v-date-picker" });
    expect(/\d{4}-\d{2}-\d{2}/.test(datePicker.props("value"))).toBe(true);
  });

  it("Click on Go should set date into vuex store", async () => {
    const wrapper = shallowMount(PickDate);
    const goButton = wrapper.findComponent({ name: "v-btn" });
    await goButton.trigger("click");
    expect(wrapper.vm.goNext).toBeInstanceOf(Function);
  });
});
