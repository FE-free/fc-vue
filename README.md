<!--
 * @Author: luohong
 * @Date: 2019-08-30 17:46:49
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-06 15:07:32
 * @Description: 
 * @email: 3300536651@qq.com
 -->
# 前端在线PDF导出

## 介绍
- 在线预览: 
- 源码地址:
- 登录，Auth第三方登录
- layout
- 模版列表
- 模版详情编辑
- 模版预览
- 模版导出

## 学习
- vue-loader 没有 vue-template-compiler 
编译.vue文件
```bash
npm install ant-design-vue --save
```
- vue-style-loader 解析、编译vue单文件组件中的样式
- vue-loader 解析、编译vue单文件组件

-  HTML5全局 contenteditable 属性

## 问题
- gh-pages 出现404 

 mode: 'hash', // 设置为history `gh-pages` 出现404
 如果想设置为history，是需要服务端设置的，而github 只是静态资源，不支持Nodejs、Java、Nginx等设置

## 不足之处
导出的pdf是通过canvas截图，不支持搜索文字