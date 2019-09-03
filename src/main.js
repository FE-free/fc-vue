/*
 * @Author: luohong
 * @Date: 2019-08-28 16:10:04
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-03 18:03:23
 * @Description: 
 * @email: 3300536651@qq.com
 */
import Vue from 'vue';
import App from './App'
// import 'jspdf';
import {
    creatRouter
} from './router';
const router = creatRouter()
window._Vue = new Vue({
    el: '#app', // 为实例提供挂载元素。值可以是 CSS 选择符，或实际 HTML 元素，或返回 HTML 元素的函数
    router,
    template: '<App/>', // 模板将会替换挂载的元素
    components: { // 使用 App 组件
        App
    }
})