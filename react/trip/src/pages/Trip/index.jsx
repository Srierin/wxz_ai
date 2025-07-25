import {
  useState,
  useEffect
} from 'react';
import useTitle from '@/hooks/useTitle';
import {
  Button,
  Input,
  Loading,
  Toast
} from 'react-vant'
import {
  chat,
  kimiChat
} from '@/llm';
import styles from './trip.module.css';
import {
  ChatO,
  UserO,
} from '@react-vant/icons';

const Trip = () => {
  useTitle('旅游智能客服')
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  // 静态驱动界面
  // 静态界面
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: 'hello~~,I am a assistant',
      role: 'assistant'
    },
    {
      id: 2,
      content: '你好~~',
      role: 'user'
    },
    {
      id: 3,
      content: '我是一个智能客服，你可以问我任何问题',
      role: 'assistant'
    },
    {
      id: 4,
      content: '你好~~',
      role: 'user'
    },
    {
      id: 5,
      content: '我是一个智能客服，你可以问我任何问题',
      role: 'assistant'
    },
    {
      id: 6,
      content: '你好~~',
      role: 'user'
    }
  ]);
  const handleChat = async () => {
    if (text.trim() === "") {
      Toast.info({
        message: '内容不能为空'
      });
      return;
    }
    setIsSending(true);
    setText("");
    setMessages((prev) => {
      return [
        ...prev,
        {
          role: 'user',
          content: text
        }
      ]
    })
    const newMessage = await chat([
      {
        role: 'user',
        content: text,
      }
    ]);
    setMessages((prev) => {
      return [
        ...prev,
        newMessage.data
      ]
    });
    setIsSending(false);
  }
  return (
    <div className="flex flex-col h-all">
      <div className={`flex-1 ${styles.chatArea}`} >
        {
          messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.role === 'user' ? styles.messageRight : styles.messageLeft
              }
            >
              {
                msg.role === 'assistant' ?
                  <ChatO /> :
                  <UserO />
              }
              {msg.content}

            </div>
          ))
        }
      </div>
      <div className={`flex ${styles.inputArea}`}>
        <Input
          value={text}
          onChange={setText}
          placeholder="请输入信息"
          className={`flex-1 ${styles.input}`}
        />
        <Button disabled={isSending} type="primary" onClick={handleChat}>发送</Button>
      </div>
      {isSending && <div className="fixed-loading"><Loading type="ball" /></div>}
    </div>
  )
}

export default Trip