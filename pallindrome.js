const str = 'A man, a plan, a canal. Panama';

function palindrome(str) {
  var lowRegStr = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

console.log(palindrome(str));
