/*
 * @Author: luohong
 * @Date: 2019-09-02 10:52:10
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-06 10:44:07
 * @Description: 
 * @email: 3300536651@qq.com
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'
export function creatRouter() {
    const router = new Router({
        mode: 'hash', // 设置为history gh-pages 出现404
        routes: [{
                path: '/',
                component: Layout,
                hidden: true,
                children: [{
                    path: '/',
                    component: () => import('@views/home/index'),
                },{
                    path: '/signin',
                    component: () => import('@views/signin/index'),
                }, {
                    path: '/resumeEdit/:id',
                    component: () => import('@views/resume/resumeedit'),
                }]
            },
            {
                path: '*',
                component: (resolve) => require(['@views/error/404'],resolve)
                // redirect: '/'
            }
        ]
    })
    return router
}