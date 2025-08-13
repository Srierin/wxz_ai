// 怎么用的 参数的默认值
// 默认值，用户会传到， 用Object.assign 拿到
// 目标对象是{}空对象 合并用户传参和默认参数, 合并配置对象
// Options 是一个会传入的对象
function createUser(options) {
    const defaults = {
        name: 'zhangsan',
        age: 18,
        isAdmin: false,
    }

    const config = Object.assign({}, defaults, options)
    console.log(config)
  }

  createUser({ name: 'lisi', age: 20 })

  const baseConfig = {api:'/api',timeout: 500};
  const envConfig = { timeout: 1000,debug: true };
  const finalConfig = Object.assign(
    {}, 
    baseConfig, 
    envConfig
  );
  console.log(finalConfig);
