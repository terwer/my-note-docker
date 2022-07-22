<template>
  <el-form label-width="120px">
    <el-form-item label="文章别名">
      <el-input/>
    </el-form-item>

    <el-form-item>
      <el-button type="primary">自动生成别名</el-button>
    </el-form-item>

    <el-form-item label="Vuepress别名">
      <el-input/>
    </el-form-item>

    <el-form-item label="博客园别名/ID">
      <el-input/>
    </el-form-item>

    <el-form-item label="JVue的ID">
      <el-input/>
    </el-form-item>

    <el-form-item label="Conf的ID">
      <el-input/>
    </el-form-item>

    <el-form-item>
      <el-button type="primary">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "PostBind"
}
</script>

<style scoped>

</style>