import Counter from "@/components/Counter.vue";
import { shallowMount } from "@vue/test-utils";

describe("Counter Component test", () => {
  test("should match with the snaoshot", () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("h1 should have default value", () => {
    const wrapper = shallowMount(Counter);

    const h1 = wrapper.find("h1");
    expect(h1.exists()).toBeTruthy();
    console.log(h1.text());

    expect(h1.text()).toBe("Counter");
  });
});
