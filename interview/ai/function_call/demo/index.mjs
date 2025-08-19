import OpenAI from 'openai';// es6 module


const client = new OpenAI({
  apiKey: '',
  baseURL: 'https://api.302.ai/vi'
})

const getWeather = async (city) => {
  return {
    city,
    temp: "25℃",
    condition: "晴"
  }
}

async function main() {
  const resp = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'user',
        content: '今天抚州天气怎么样'
      }
    ],
    // LLM 使用的工具
    tools: [
      // LLM 可以调用的tool 配置
      {
        type: 'function',
        function: {
          name: "getWeather",
          description: "获取指定城市的天气信息",
          parameters: {
            type: 'object',
            properties: {
              city: {
                city: {
                  type: 'string',
                  // description: '城市名称'
                }
              }
            },
            required: ['city']
          }
        }
      }
    ]
  });
  const toolCall = resp.choices[0].message.tool_calls?.[0];
  console.log("大模型想调用", toolCall);
  if(toolCall.function.name === "getWeather"){
    const args= JSON.parse(toolCall.function.arguments);
    const weather = await getWeather(args.city);
    
    const secondResp = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: '今天抚州天气怎么样'
        },
        resp.choices[0].message, //tool
        {
          role: 'tool',
          tool_call_id: toolCall.id, // 工具调用的id
          constent:JSON.stringify(weather), // 工具调用的结果

        }
      ]
    });
    console.log(secondResp.choices[0].message.content);
  }
      
  
}

main();