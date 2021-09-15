export const inputsAreValid = (...input) => {
  console.log("input", ...input)
  return input.every(num => typeof num === "number" && !isNaN(num));
};
