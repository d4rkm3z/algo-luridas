export const factorial = (n: number): number => {
  if ([0,1].includes(n)) {
    return 1;
  } else {
    return factorial(n-1) * n;
  }
}
