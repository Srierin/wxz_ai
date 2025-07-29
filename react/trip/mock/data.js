import Mock from 'mockjs'

export default [{
  url: '/api/search',
  method: 'get',
  timeout: 1000,
  response: (req, res) => {
    // 会传一个keyword参数
    const keyword = req.query.keyword;
    let num = Math.floor(Math.random() * 10);
    let list = [];
    for (let i = 0; i < num; i++) {
      // 随机生成数据
      const randomData = Mock.mock({
        title: '@ctitle', // 随机生成标题
      })
      console.log(randomData);
      list.push(`${randomData.title}${keyword}`)
    }
    return {
      code: 0,
      data: list,
    }
  }

},
{
  url: '/api/hotlist',
  method: 'get',
  timeout: 1000,
  response: (req, res) => {
    return {
      code: 0,
      data: [{
        id: '101',
        city: '北京',
      },
      {
        id: '102',
        city: '上海',
      },
      {
        id: '103',
        city: '广州',
      },

      ]
    }
  }
}


]