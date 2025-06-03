/**
 * @func 两数之和
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
// 函数的编写者
// 函数调用
// 健壮性
// typeof 运算符 数据的类型
// 判断数据的类型 ，除了null
// 返回值的类型是字符串 
function add (a,b){
    if(typeof a !== 'number' || typeof b !== 'number'||isNaN(a)||isNaN(b)){
        throw new Error('a 和 b 必须是正确数字');
    }
    //参数的校验
    return a+b;
}
console.log(add(1,2));