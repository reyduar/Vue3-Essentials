import Counter from "@/components/Counter.vue";
import { shallowMount } from "@vue/test-utils";

describe("Counter Component test", () => {
  test("should match with the snapshot", () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("h1 should have default value", () => {
    const wrapper = shallowMount(Counter);

    const h1 = wrapper.find("h1");
    expect(h1.exists()).toBeTruthy();
    // console.log(h1.text());

    expect(h1.text()).toBe("Counter");
  });

  test("value should start with 100", () => {
    const wrapper = shallowMount(Counter);
    const value = wrapper.find('[data-testid="initialCount"]');
    expect(value.text()).toBe("100");
  });
});
