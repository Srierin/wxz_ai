/**
 * chat 聊天
 */
const DEEPSEEK_CHAT_API_URL = 'https://api.deepseek.com/chat/completions';
const KIM_CHAT_API_URL = 'https://api.moonshot.cn/v1/chat/completions';

export const chat = async (
  messages,
  api_url = DEEPSEEK_CHAT_API_URL,
  api_key = import.meta.env.VITE_DEEPSEEK_API_KEY,
  model = 'deepseek-chat'
) => {
  try {
    const response = await fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}` // 替换为你的 DeepSeek API 密钥
      },
      body: JSON.stringify({
        model, // 选择 DeepSeek 模型
        messages: messages, // 聊天消息
        stream: false, // 是否流式输出

      })
    })
    const data = await response.json();
    return {
      code: 0,
      data: {
        role: 'assistant',
        content: data.choices[0].message.content,
      }

    }
  } catch (error) {
    return {
      code: 1,
      msg: '出错啦...',
    }

  }
}

export const kimiChat = async (message) => {
  const res = await chat(
    message,
    KIM_CHAT_API_URL,
    import.meta.env.VITE_KIMI_API_KEY,
    'moonshot-v1-auto'
  )
  return res;
}

export const generateAvatar = async (text) => {
  // 设计prompt
  const prompt = `
  你是一个二次元头像生成器，需要为用户设计头像，主要是酷炫的，
  用户信息的${text}


  `
}