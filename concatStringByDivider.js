const a = [".", "a", "b", "c"];
const b = ["-", "a", "b", "c"];

const concatinate = (divider, ...args) => {
  return args.join(divider);
};

concatinate(".", "a", "b", "c");
concatinate("-", "a", "b", "c");
