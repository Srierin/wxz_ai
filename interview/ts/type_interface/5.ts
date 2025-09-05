interface AddFn {
    (a: number, b: number): number;
}

type AddType = (a: number, b: number) => number;
// 类型别名
type NumberOther = number;

let a:NumberOther = 2;