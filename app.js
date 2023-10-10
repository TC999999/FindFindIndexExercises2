//Exercise 1: findUserByUsername
function findUserByUsername(objArr, str) {
  return objArr.find(function (obj) {
    return obj.username === str;
  });
}

//Exercise 2: removeUser
function removeUser(objArr, str) {
  let idx = objArr.findIndex(function (obj) {
    return obj.username === str;
  });
  if (idx > -1) {
    return objArr.splice(idx, 1)[0];
  }
}
