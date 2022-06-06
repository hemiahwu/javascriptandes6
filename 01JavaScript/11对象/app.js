const person = {
  firstName: '米斯特吴',
  lastName: 'Wu',
  age: 32,
  email: '27732357@qq.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Chengdu',
    state: 'chenghuaqu'
  },
  getBirthYear: function() {
    return 2018 - this.age;
  }
};

let val;
val = person;
// 获取到单个属性
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.email;
val = person.address.city;
val = person.address['state'];
val = person.getBirthYear();

console.log(val);

// 数组对象嵌套
const people = [
  { name: 'Bucky', age: 30 },
  { name: 'Henry', age: 32 },
  { name: 'Elyse', age: 38 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
