const deleteLine = (context, payload) => {
  context.commit("DELETE_LINE", payload);
};

export default {
  deleteLine,
};
