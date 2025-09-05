interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const dragon: Animal = { name: 'dragon', age: 1 };
// 不可以重复声明相同的类型
type AnimalType = { name: string };
// type AnimalType = { age: number };