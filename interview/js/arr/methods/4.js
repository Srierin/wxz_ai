const people =[
    {name:'zhangsan',age:20, role:'admin'},
    {name:'lisi',age:18, role:'user'},
    {name:'wangwu',age:22, role:'guest'}
];
const allAdults = people.every(person=>person.age >= 18);
const hasAdmin = people.some(person => person.role === 'admin');