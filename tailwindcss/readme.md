# tailwindcss 原子css


- 非常好用
- 几乎不用写css
- AI 生成代码 css 用的都是tailwindcss
- 配置流程 
     tailwindcss @vite/tailwindcss 
     配置vite.config.js
     引入tailwind.css
- 有各种内置的css类名，分门别类
- 1rem = 4 个单位

- 文字行数限制
     -webkit-line-clamp: 2; 不能独自生效
     -webkit 是浏览器的内核 Chrome Safari 
     -mozilla 是火狐的内核 Firefox
     实验阶段的属性 
     display: -webkit-box;
     -webkit-box-orient: vertical;
     overflow: hidden;
     