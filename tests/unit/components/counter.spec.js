import Counter from "@/components/Counter.vue";
import { shallowMount } from "@vue/test-utils";

describe("Counter Component test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  test("should match with the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("h1 should have default value", () => {
    const h1 = wrapper.find("h1");
    expect(h1.exists()).toBeTruthy();
    expect(h1.text()).toBe("Counter");
  });

  test("value should start with 100", () => {
    const value = wrapper.find('[data-testid="initialCount"]');
    expect(value.text()).toBe("100");
  });

  test("should increment the value", async () => {
    const increaseBtn = wrapper.find("button");

    await increaseBtn.trigger("click");
    const value = wrapper.find('[data-testid="counter"]');

    expect(value.text()).toBe("101");
  });

  test("should decrement the value", async () => {
    const decreaseBtn = wrapper.findAll("button").at(1);

    await decreaseBtn.trigger("click");
    const value = wrapper.find('[data-testid="counter"]');
    console.log(value.text());

    expect(value.text()).toBe("99");
  });

  test("should increment and decrement counter", async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll("button");

    await increaseBtn.trigger("click");
    await increaseBtn.trigger("click");
    await increaseBtn.trigger("click");
    await decreaseBtn.trigger("click");
    await decreaseBtn.trigger("click");
    const value = wrapper.find('[data-testid="counter"]');
    console.log(value.text());

    expect(value.text()).toBe("101");
  });
});
