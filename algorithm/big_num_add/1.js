/**
 * 
 * @param {string} num1
 * @param {string} num2
 * @returns {string}
 */
function addLargeNumbers(num1, num2) {
    let result = "";//存储结果
    let carry = 0;//存储进位
    let i=num1.length-1;//num1的指针
    let j=num2.length-1;//num2的指针
    while (i >= 0 || j >= 0 || carry > 0) {
      //边界 通过三元表达式判断是否越界
      const digit1= i>=0 ? parseInt(num1[i]) : 0;
      const digit2= j>=0 ? parseInt(num2[i]) : 0;
      const sum = digit1 + digit2 + carry;
      result = (sum % 10) + result; //存储当前位的结果
      carry = Math.floor(sum / 10); //存储进位
      i--;
      j--;
    }

    return result;
  }
  