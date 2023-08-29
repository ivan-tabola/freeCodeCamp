const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let result = 0;
    for (let users1 in allUsers) {
       if (allUsers[users1].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }
  
  console.log(countOnline(users));