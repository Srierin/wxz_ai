export default [
  {
    url: '/todos',
    method: 'get',
    response: () => {
      const todos = [
        {
          id: 1,
          title: '吃饭',
          completed: false,
        },
        {
          id: 2,
          title: '睡觉',
          completed: true,
        },
        {
          id: 3,
          title: '打豆豆',
          completed: false,
        }
      ]
      return {
        code: 0,// code 0 代表成功,没有错误
        message: 'success',
        data: todos,
      }
    }
  },
  {
    url: '/repos',
    method: 'get',
    response: () => {
      const repos = [
        {
          id: 695370163,
          title: 'ai_lesson',
          description: "AI全栈工程师课程",
        },
        {
          id: 152578450,
          title: 'AlloyFinger',
          description: "super tiny size multi-touch gestures library for the web. 　　　You can touch this",
        }
      ]
      return repos
    }
  }
]