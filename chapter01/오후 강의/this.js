const yjObj = {
  name: '이예지',
  isOld: false,
  sayHello: function () {
    console.log(this.name);
  },
  nestedObj: {
    name: '방시혁',
    isOld: true,
    sayHello: function () {
      console.log(this.name);
    },
  },
};

yjObj.sayHello();
yjObj.nestedObj.sayHello();
