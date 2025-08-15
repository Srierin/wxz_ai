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

- 安装开发环境
    - node
    - git 环境  开源的分布式版本管理软件
    - 公司会发放一个git 账号，私有项目

- git config --global user.name "yourname"
   - git config --global user.email "youremail"
- 入职 git clone 公司代码
    - 主分支 main/master
        是所有人都在用的，线上分支
    - 新开一个分支
      在自己工作前，先拉取最新代码，
      git checkout -b 分支名
      git branch 查看当前分支
      git checkout 分支名 切换分支
      git branch -d 分支名 删除分支
- 常见命令
    git pull origin main 拉取最新代码
    git status 查看当前 git状态
    git log --oneline 查看提交记录
    git add . 提交到暂存区
    git commit -m "提交信息" 提交到本地仓库
    git push origin 分支名 提交到远程仓库
    git restore --staged 文件名 从暂存区取消暂存
    git restore 文件名 从工作区取消修改

