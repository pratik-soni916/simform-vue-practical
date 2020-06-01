import { shallowMount } from "@vue/test-utils";
import PickDate from "@/components/PickDate.vue";

describe("PickDate.vue", () => {
  it("renders PickDate component", () => {
    const wrapper = shallowMount(PickDate, {});
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
