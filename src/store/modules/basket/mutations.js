const ADD_LINE = (state, line) => {
  state.lines.push(line);
};

const DELETE_LINE = (state, id) => {
  state.lines.forEach((line, index) => {
    if (line.id !== id) {
      return;
    }
    state.lines.splice(index, 1);
  });
};

export default {
  ADD_LINE,
  DELETE_LINE,
};
