function addContact(name, mobile, home = '없음', address = '없음', email = '없음') {
  var str = `name=${name}, mobile=${mobile}, home=${home},` + `address=${address}, email=${email}`;
  console.log(str);
}

addContact('홍길동', '010-222-3333');
addContact('이묭룡', '010-444-5555', '02-123-435', '서울시');
