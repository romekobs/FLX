function reverse(a) {
  let str = String(a);
  let reversed = str.split("").reverse().join("");
  if (str.charAt(0) === "-") {
      reversed = "-" + reversed.slice(0, str.length - 1);
  }
  return Number(reversed);
}

reverse(123);