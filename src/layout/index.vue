<!--
 * @Author: luohong
 * @Date: 2019-09-02 14:52:55
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-04 17:04:29
 * @Description: 
 * @email: 3300536651@qq.com
 -->
<template>
   <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="layout-header">
        <img :src="logo" height="50"/> 
      </div>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <span class="text">Content</span>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UEDwwsss
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
:global {
  .ant-layout-header {
      background: #fff;
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.06);
  }
}
.layout-header {
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.06);
}
.text {
  color: red;
}
</style>