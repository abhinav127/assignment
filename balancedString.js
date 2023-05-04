function getBalancedSubstrings(str) {

  const duplicates = findDuplicates(str);
  const dup_count=[];
  var reg1='';
  var reg2='';
  for(let i=0;i<duplicates.length;i++)
  {
    dup_count.push(countChar(str,duplicates[i]));
  }
  const findex = findKeysForDuplicateValues(dup_count);
  if(duplicates.length==1)
  {
    reg1 = duplicates[0];
  }
  else if(duplicates.length==2)
  {
     reg1 = duplicates[0];
     reg2 = duplicates[1];
  }
  else if(duplicates.length > 2)
  {
    reg1 = duplicates[findex[0]];
    reg2 = duplicates[findex[1]];
  }

    const regex = new RegExp(reg1, 'g');
    const regex2 = new RegExp(reg2, 'g');
    let maxLen = 0;
    let result = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const sub = str.substring(i, j);
        const countA = (sub.match(regex) || []).length;
        const countB = (sub.match(regex2) || []).length;
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

  
  const findDuplicates = (str) => {
    const chars = str.split("");
    const duplicates = {};
    for (let char of chars) {
      if (duplicates[char]) {
        duplicates[char]++;
      } else {
        duplicates[char] = 1;
      }
    }
    const result = [];
    for (let char in duplicates) {
      if (duplicates[char] > 1) {
        result.push(char);
      }
    }
    return result;
  };

  const countChar = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  };

  const findKeysForDuplicateValues = (arr) => {
    const valueToKeys = {};
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      if (valueToKeys[value]) {
        valueToKeys[value].push(i);
      } else {
        valueToKeys[value] = [i];
      }
    }
    const result = [];
    for (let value in valueToKeys) {
      const keys = valueToKeys[value];
      if (keys.length > 1) {
        result.push(...keys);
      }
    }
    return result;
  };

  



  const inputString = "abababa";
  console.log(getBalancedSubstrings(inputString)); 
