const p1 = { name: 'john', age: 20 };
p1.age = 22;
console.log(p1);

p1 = { name: 'lee', age: 25 };

// 출력결과: { name: 'john', age: 22 }
//  + error
