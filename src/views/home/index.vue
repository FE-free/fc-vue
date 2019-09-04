<!--
 * @Author: luohong
 * @Date: 2019-09-04 14:02:36
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-04 18:17:10
 * @Description: 
 * @email: 3300536651@qq.com
 -->
<template>
  <div class="home">
    <div class="banner">
      <img class="banner-item" :src="banner1" width="100%" />
    </div>
    <div style="background-color: #ececec; padding: 20px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card title="模版1" :bordered=false>
            <p>card content</p>
            <template class="ant-card-actions" slot="actions">
            
            </template>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="模版2" :bordered=false>
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="模版3" :bordered=false>
            <p>card content</p>
          </a-card>
        </a-col>
        
      </a-row>
    </div>
  </div>
</template>

<script>
  import banner1 from '@assets/images/2.jpeg';
  export default {
    name: 'signin',
    data() {
      return {
        banner1: banner1
      }
    },
    methods: {
  
    },
    computed: {},
    components: {}
  }
</script>

<style>
  .banner img {
    height: 200px;
    object-fit: cover;
  }
</style>