function getBalancedSubstrings(str) {
    str = str.replace(/[^a-b]/g, '');
    let maxLen = 0;
    let result = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const sub = str.substring(i, j);
        const countA = (sub.match(/a/g) || []).length;
        const countB = (sub.match(/b/g) || []).length;
        if (countA === countB && sub.length > maxLen) {
          maxLen = sub.length;
          result = [sub];
        } else if (countA === countB && sub.length === maxLen) {
          result.push(sub);
        }
      }
    }
    return result;
  }
  const inputString = "cabbacc";
  console.log(getBalancedSubstrings(inputString)); 

  // Output
  /*  S = "cabbacc"  // output [ 'abba' ]
S = "abababa" // [ 'ababab', 'bababa' ]
S = aaaaaaa // []
      */