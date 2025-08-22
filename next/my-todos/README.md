# Next.js

## supabase 数据库

## 数据库开发
- ORM 工具
    不需要写SQL ，向操作对象一样去操作数据库
    Prisma

## Prisma? 数据库的工程化
是一个命令行工具，用于管理数据库和生成数据库模型 schema、迁移
schema 是数据库的结构蓝图，定义了表、字段、数据类型、关系和约束等组织方式
Migration 是数据库结构的变更，包括创建表、修改表、删除表、添加字段、修改字段、删除字段等
不止可以帮助我们操作数据库，还可以为我们的数据库操作留下记录，方便我们回滚

npx prisma init 初始化项目
npx prisma migrate dev --name init 生成迁移文件