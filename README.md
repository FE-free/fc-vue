<!--
 * @Author: luohong
 * @Date: 2019-08-30 17:46:49
 * @LastEditors: luohong
 * @LastEditTime: 2019-09-03 11:20:26
 * @Description: 
 * @email: 3300536651@qq.com
 -->
# 前端在线PDF导出
- 在线预览: 
- 源码地址:

- 登录，Auth第三方登录
- layout
- 模版列表
- 模版详情编辑
- 模版预览
- 模版导出

```html
 <div class="template template2" id="template2">
                <div class="template-head">
                    <span class="show-text" v-on:click="editName='Y'" v-if="editName=='N'"> {{name}}</span>
                    <input v-else v-on:keyup.enter="editName='N'" class="edit-text" type="text" v-model="name" />
                    <div class="avatar"><img src="./assets/images/1.jpeg" /> </div>
                </div>
                <div class="template-body">

                </div>
                <div class="template-footer">

                </div>
            </div>

            <div  class="toolbar">
    <button type="button" v-on:click="exportPdf()">导出pdf</button>
</div>
```
- vue-loader 没有 vue-template-compiler 
编译.vue文件