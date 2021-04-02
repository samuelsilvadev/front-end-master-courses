function factorial(number) {
  let result = 1;

  for (let start = 2; start <= number; start++) {
    result *= start;
  }

  return result;
}

function recursiveFactorial(number) {
  if (number === 2) {
    return 2;
  }

  return recursiveFactorial(number - 1) * number;
}

function recursiveFactorialUp(number, start = 1) {
  if (start === number) {
    return 1;
  }

  const nextStart = start + 1;

  return recursiveFactorialUp(number, nextStart) * nextStart;
}

module.exports = { factorial, recursiveFactorial, recursiveFactorialUp };
