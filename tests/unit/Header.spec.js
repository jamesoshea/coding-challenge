import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Header, {});
    expect(wrapper.text()).toMatch("Card Component");
  });
});
