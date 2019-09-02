/*
 * @Author: luohong
 * @Date: 2019-09-02 10:52:10
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-02 18:32:55
 * @Description: 
 * @email: 3300536651@qq.com
 */
import Vue from 'vue'
import Router from 'vue-router'


// import Template1 from '../components/template/template1.vue'
// import Template2 from '../components/template/template2.vue'

Vue.use(Router)

// const Template1 = {
//     template: '<div>template1</div>'
// }
// const Template2 = {
//     template: '<div>template2</div>'
// }
export default new Router({
    routes: [{
            path: '/template1',
            name: 'template1',
            component: require('../components/template/template1.vue')
        },
        {
            path: '/template2',
            name: 'template2',
            component: require('../components/template/template2.vue')
        }
    ]
})