# 秋招面试

## JS
- Object.assign()
- 深浅拷贝
- =和JS 内存相关
- 拷贝 （简单数据类型 有点像复印了一份） 和引用式赋值

- 响应式底层 
    - Object.defineProperty() 
    - Proxy()  

## Git
开发中如何使用 git ？
- git config --global user.name "yourname"
   - git config --global user.email "youremail"
- 入职 git clone 公司代码
    - 主分支 main/master
        是所有人都在用的，线上分支
    - 新开一个分支
      git checkout -b 分支名
- 常见命令
    git pull origin main 拉取最新代码
    git status 查看当前 git状态
    git log --oneline 查看提交记录
    git add . 提交到暂存区
