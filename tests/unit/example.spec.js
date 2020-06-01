import { shallowMount } from "@vue/test-utils";
import PickDate from "@/components/PickDate.vue";

describe("PickDate.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Select a preffered lunch date";
    const wrapper = shallowMount(PickDate, {});
    expect(wrapper.text()).toMatch(msg);
  });
});
