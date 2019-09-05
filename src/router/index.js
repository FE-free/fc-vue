/*
 * @Author: luohong
 * @Date: 2019-09-02 10:52:10
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-04 18:05:53
 * @Description: 
 * @email: 3300536651@qq.com
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'
export function creatRouter() {
    return new Router({
        mode: 'history',
        routes: [{
                path: '/',
                component: Layout,
                hidden: true,
                children: [{
                    path: '/',
                    component: () => import('@views/home/index')
                }]
            },
            {
                path: '*',
                redirect: '/'
            }
        ]
    })
}