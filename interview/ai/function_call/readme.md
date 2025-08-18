#  Function Call

- LLM 调用API  有什么缺点？
   - LLM 提前训练好的，对于新的知识或服务是不知道的
     LLM 加上隐形的翅膀，调用写外部的内容或工具
     chat之外，调用函数
     可以直接询问LLM 回答问题
   - AIGC 没有足够的上下文，无法正确回答问题
       temperature 
       - 给LLM足够的上下文 
           Function Call 调用外部的内容或工具
       - MCP 
           给大模型插入的USB 
       - Prompt 设计
       - 工作流
           通过设计工作节点让LLM 流程化
       - 知识库
   - 我们可以将知识库（私有的）交给大模型，让LLM更懂我们
   不安全。RAG

## Function Call 函数调用
   让AIGC 从只能生成文本进化为能可靠执行操作，解决了自然语言
   到结构化调用的鸿沟，是模型能安全、可控地调用外部系统（知识库、服务），推动实用化落地

   
   - 简洁，强大
   - 习惯和依赖

## Function Call 的流程

- 传统的chat api 调用，变成两步
    - 根据prompt 和tools 中的描述description 语义关联性分析
      匹配到的function 名字和参数，type function
    - 执行function
    - 将函数的返回结果 再次交给LLM，正常的回答聊天


- 核心
    - openai 接口能力的升级，LLM 可以和外部系统、工具互动
       LLM 能力增强
    - chatbot 的用户体验更好 
    - apc 增量市的、设计的很简约，学习到接口设计
        - function tool tools 申明
           type,name,parameters
        - 返回结果 function.id 
            rol:'tool'