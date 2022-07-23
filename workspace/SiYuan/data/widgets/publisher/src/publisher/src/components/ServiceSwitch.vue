<template>
  <el-form label-width="120px">
    <el-form-item :label="$t('service.switch.vuepress')">
      <el-switch/>
    </el-form-item>

    <el-form-item :label="$t('service.switch.jvue')">
      <el-switch/>
    </el-form-item>

    <el-form-item :label="$t('service.switch.conf')">
      <el-switch/>
    </el-form-item>

    <el-form-item :label="$t('service.switch.cnblogs')">
      <el-switch/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "ServiceSwitch"
}
</script>

<style scoped>

</style>