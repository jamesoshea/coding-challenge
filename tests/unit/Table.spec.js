import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import Table from "@/components/Table.vue";
import MockBasketLines from "../../src/mocks/MockBasketLines.json";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Table.vue", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        basket: {
          namespaced: true,
          getters: {
            allLines: () => MockBasketLines,
          },
        },
      },
    });
  });

  it("renders the correct number of lines", () => {
    // eslint-disable-next-line
    debugger;
    const wrapper = mount(Table, { store, localVue });
    expect(wrapper.findAll('[data-test="challenge-table-row"]').length).toEqual(
      3,
    );
  });
});
