function findLongestWordLength(str) {
    let a = str.split(' ');//метод Array.prototype.splice()
    let b = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i].length > b) {
        b = a[i].length;
      }
    }
    return b;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");