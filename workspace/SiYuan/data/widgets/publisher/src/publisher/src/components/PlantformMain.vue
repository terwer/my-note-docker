<template>
  <div class="demo-collapse">
    <el-collapse model-value="1" accordion>
      <el-collapse-item :title="$t('main.publish.to.vuepress')" name="1">
        <vuepress-main/>
      </el-collapse-item>
      <el-collapse-item :title="$t('main.publish.to.jvue')" name="2">
        JVue
      </el-collapse-item>
      <el-collapse-item :title="$t('main.publish.to.conf')" name="3">
        Confluence
      </el-collapse-item>
      <el-collapse-item :title="$t('main.publish.to.cnblogs')" name="4">
        博客园
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>

import VuepressMain from "@/components/main/VuepressMain";

export default {
  name: "PlantformMain",
  components: {VuepressMain},
  props: {
    modelValue: String // previously was `value: String`
  },
}
</script>

<style scoped>

</style>