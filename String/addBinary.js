// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100"


function addBinary(a, b){
  let result = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if(i >= 0)
      sum += a.charAt(i--) - 0;
    if(j >= 0)
      sum += b.charAt(j--) - 0;
    result += sum%2;
    carry = sum/2;
  }
  if(carry != 0)
    result += carry;
  return result.split("").reverse().join("") ;
}
