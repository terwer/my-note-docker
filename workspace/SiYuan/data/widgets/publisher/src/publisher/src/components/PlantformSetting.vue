<template>
  <el-tabs type="border-card">
    <el-tab-pane label="Vuepress">
      <el-form label-width="120px">
        <el-form-item label="博客类型">
          <el-select placeholder="请选择博客类型">
            <el-option label="Wordpress" value="Wordpress"/>
            <el-option label="Metaweblog API" value="MetaweblogApi"/>
            <el-option label="Vuepress" value="Vuepress"/>
          </el-select>
        </el-form-item>

        <el-form-item label="博客网址">
          <el-input/>
        </el-form-item>

        <el-form-item label="账号">
          <el-input/>
        </el-form-item>

        <el-form-item label="密码">
          <el-input/>
        </el-form-item>

        <el-form-item label="API地址">
          <el-input/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">验证</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="JVue">JVue</el-tab-pane>
    <el-tab-pane label="Confluence">Confluence</el-tab-pane>
    <el-tab-pane label="博客园">博客园</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "PlantformSetting"
}
</script>

<style scoped>

</style>