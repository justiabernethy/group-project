function calculateTotal(arr) {
  let total = 0;
  arr.forEach((item) => {
    if (typeof item === "number" || typeof item === "string") {
      total += item;
    }
  });
  return total;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(calculateTotal(numbers)); // Output: 15
