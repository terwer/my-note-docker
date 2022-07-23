<template>
  <el-tabs type="border-card">
    <el-tab-pane :label="$t('setting.vuepress')">
      <el-form label-width="120px">
        <el-form-item :label="$t('setting.blog.type')">
          <el-select :placeholder="$t('setting.blog.type.placeholder')">
            <el-option :label="$t('setting.blog.type.wordpress.label')" :value="$t('setting.blog.type.wordpress.value')"/>
            <el-option :label="$t('setting.blog.type.metaweblog.label')" :value="$t('setting.blog.type.metaweblog.value')"/>
            <el-option :label="$t('setting.blog.type.vuepress.value')" :value="$t('setting.blog.type.vuepress.value')"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('setting.blog.url')">
          <el-input/>
        </el-form-item>

        <el-form-item :label="$t('setting.blog.username')">
          <el-input/>
        </el-form-item>

        <el-form-item :label="$t('setting.blog.password')">
          <el-input/>
        </el-form-item>

        <el-form-item :label="$t('setting.blog.apiurl')">
          <el-input/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">{{ $t('setting.blog.validate') }}</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">{{ $t('setting.blog.save') }}</el-button>
          <el-button>{{ $t('setting.blog.cancel') }}</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane :label="$t('setting.jvue')">JVue</el-tab-pane>
    <el-tab-pane :label="$t('setting.conf')">Confluence</el-tab-pane>
    <el-tab-pane :label="$t('setting.cnblogs')">博客园</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "PlantformSetting"
}
</script>

<style scoped>

</style>