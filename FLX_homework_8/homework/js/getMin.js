function getMin() {
  let first = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] < arguments[i + 1] || a > arguments[i]) {
          a = arguments[i];
      }
  }
  return first
}

getMin(3, 0, -3);