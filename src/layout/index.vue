<!--
 * @Author: luohong
 * @Date: 2019-09-02 14:52:55
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-04 17:53:33
 * @Description: 
 * @email: 3300536651@qq.com
 -->
<template>
   <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="layout-header">
        <img :src="logo" height="40"/> 
      </div>
    </a-layout-header>
    <a-layout-content >
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <span class="text">Content</span>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      开发者在线简历 ©2019 Created by FE-free
    </a-layout-footer>
  </a-layout>
</template>

<script>

import logo from '@assets/images/logo.jpg'
export default {
    name:'layout',
    data() {
        return {
            logo: logo
        }
    }
}
</script>

<style>
.ant-layout-header {
    position: relative;
    z-index: 999;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.06);
    height:60px;
    line-height:60px;
}
.layout-header {
   
}
.text {
  color: red;
}
</style>