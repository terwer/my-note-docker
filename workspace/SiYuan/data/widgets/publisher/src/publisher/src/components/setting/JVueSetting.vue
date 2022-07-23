<template>
  <el-form label-width="120px">
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
</template>

<script>
export default {
  name: "JVueSetting"
}
</script>

<style scoped>

</style>