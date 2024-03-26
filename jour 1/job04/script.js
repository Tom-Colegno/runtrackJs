function bissextile(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

console.log(bissextile(2012));  // Output: true
console.log(bissextile(2013));  // Output: false
console.log(bissextile(2000));  // Output: true
console.log(bissextile(1900));  // Output: false

