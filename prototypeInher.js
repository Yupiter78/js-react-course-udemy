const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

const jonh = Object.create(soldier, {
  health: {
    value: 200,
  },
});

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier;  The '__proto__' property is deprecated.
// Object.setPrototypeOf(jonh, soldier);

console.log({ jonh });
console.log(jonh.armor);
console.log(jonh.health);
jonh.sayHello();
