import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import MockLines from "../../../mocks/MockBasketLines.json";

const defaultState = {
  lines: MockLines,
};

export default {
  namespaced: true,
  state: defaultState,
  actions,
  getters,
  mutations,
};
