/*
 * @Author: luohong
 * @Date: 2019-08-28 16:10:04
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-02 18:15:30
 * @Description: 
 * @email: 3300536651@qq.com
 */
import 'jspdf';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: {
        App
    }
})