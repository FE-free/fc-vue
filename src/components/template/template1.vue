<!--
 * @Author: luohong
 * @Date: 2019-09-02 10:39:35
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-05 16:22:35
 * @Description: 
 * @email: 3300536651@qq.com
 -->

<template>
    <div class="template" :id="id"> 
        <h1>{{ name }}</h1>
        <img :src="imgUrl" width="80" height="80" />
        <img :src="imgUrl" width="80" height="80" />
    </div>
</template>

<script>
    console.log('这是template1')
    import imgUrl from '@assets/images/1.jpeg';
    export default {
        name: 'tempate1',
        data() {
            return {
                id:'template1',
                name: 'Hello world!', // 姓名
                message: '400000',
                name: '青成',
                imgUrl: imgUrl, // 头像
                editName: 'N', // 名字
            }
        },
        methods: {
            exportPdf: function() {
    
            }
        },
        computed: {},
        components: {}
    }
</script>
