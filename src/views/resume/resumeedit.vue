<!--
 * @Author: luohong
 * @Date: 2019-09-02 11:03:15
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-06 14:23:57
 * @Description: 
 * @email: 3300536651@qq.com
 -->
<template>
    <div>
        <div class="toolbar">
            <a-button type="default" v-on:click="backHome()">回到首页</a-button>
            <a-button type="primary" v-on:click="exportTemplate('template1','我的模版')">导出模版</a-button>
        </div>
    
        <component v-bind:is="currentTabComponent"></component>
    </div>
</template>

<script>
    import Template1 from '@components/template/template1';
    import Template2 from '@components/template/template2';
    import {
        exportPdf
    } from '@utils/utils'
    export default {
        name: 'resumeedit',
        props: [],
        data() {
            return {
    
            }
        },
        methods: {
            exportTemplate (id, fileName) {
                exportPdf(id, fileName);
            },
            backHome(){
                this.$router.push('/');
            }
        },
        computed: {
            currentTabComponent: function() {
                console.log(this.$route.params, '获取路由参数');
                return 'resumeTemplate' + this.$route.params.id
            }
        },
        components: {
            'resumeTemplate1': Template1
        }
    }
</script>

<style>
    .toolbar {
        text-align: right;
    }
</style>