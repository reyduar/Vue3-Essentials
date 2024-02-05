import Counter from "@/components/Counter.vue";
import { shallowMount } from "@vue/test-utils";

describe("Counter Component test", () => {
  test("should match with the snaoshot", () => {
    const wrapper = shallowMount(Counter);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
