import {
  NextResponse, // 相当于res
} from 'next/server'; // api server
// ts 是js的超集
import { type Todo } from '@/app/types/todo'; 
let todos: Todo[] = [
  {
    id: 1,
    text: '学习typescript',
    completed: false,
  },
  {
    id: 2,
    text: '学习next',
    completed: false,
  }
]; // 定义一个todos数组，用来存储todos
// Restful 一切皆资源
// 后端是向用户暴露资源的 
// method + 资源 URL定义规则
export async function GET(){
  return NextResponse.json(todos);
}

export async function POST(request : Request){
  // 拿到请求体中的数据
  const data = await request.json(); 
  // 核心的数据，函数的参数，返回值 都需要做类型约束
  const newTodo : Todo = {
    id: + Date.now(), // 生成一个id
    text: data.text, // 拿到请求体中的数据
    // typescript 除了强类型检查外，还会提供智能提示，写起来更好更快
    completed: false, // 默认为false
  }
  todos.push(newTodo); // 把新的todo添加到todos数组中
  return NextResponse.json(newTodo); // 返回新的todo
}

export async function PUT(request : Request){
  const data = await request.json(); // 拿到请求体中的数据
  todos = todos.map(todo => 
      todo.id === data.id ? {...todo, completer:data.completed} : todo
    ); // 把todos数组中的todo的id和请求体中的id进行比较，如果相等，就把请求体中的数据更新到todos数组中的todo中，否则返回原来的todo
    return NextResponse.json(todos);
  }
  // restful 简历
  export async function DELETE (request : Request){
    const data = await request.json();
    todos = todos.filter(todo => todo.id !== data.id);
    return NextResponse.json(todos);
  }