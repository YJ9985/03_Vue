const yjObj = {
  name: '이예지',
  isOld: false,
  sayHello: function () {
    console.log(this.name);
  },
};

const obj = {
  name: '이예지',
  isOld: false,
  condition: 'tired',
};

for (let key in obj) {
  console.log(`key 값은 ${key}이고, value ${obj[key]} 입니다.`);
}

function getKeyValue(obj, key) {
  console.log(obj[key]);
}

getKeyValue(obj, 'name');
