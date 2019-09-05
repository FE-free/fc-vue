<!--
 * @Author: luohong
 * @Date: 2019-09-02 14:36:12
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-05 17:31:08
 * @Description: 
 * @email: 3300536651@qq.com
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      // 解决在地址栏输入路由跳转无效的问题
      window.addEventListener('hashchange', () => {
        var currentPath = window.location.hash.slice(1); // 获取输入的路由
        if (this.$router.path !== currentPath) {
          this.$router.push(currentPath); // 动态跳转
        }
      }, false);
    }
  }
</script>
