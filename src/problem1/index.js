/**
 @assumption For postive integer, summation wil start at 1, otherwise start at -1 
*/

// Using for loop
const sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 1; i <= Math.abs(n); i++) {
    sum += i;
  }
  return n < 0 ? -sum : sum;
};

// Using recursive
const sum_to_n_b = function (n) {
  if (n === 0) {
    return 0;
  } else if (n > 0) {
    return n + sum_to_n_b(n - 1);
  } else {
    return n + sum_to_n_b(n + 1);
  }
};

// Using arithmetic series formula
const sum_to_n_c = function (n) {
  const absN = Math.abs(n);
  const sum = (absN * (absN + 1)) / 2;
  return n < 0 ? -sum : sum;
};
