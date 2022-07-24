<template>
  <div class="demo-collapse">
    <el-collapse model-value="4" accordion>
      <el-collapse-item :title="$t('main.publish.to.vuepress')" name="1">
        <vuepress-main/>
      </el-collapse-item>
      <el-collapse-item :title="$t('main.publish.to.jvue')" name="2">
        <j-vue-main/>
      </el-collapse-item>
      <el-collapse-item :title="$t('main.publish.to.conf')" name="3">
        Confluence
      </el-collapse-item>
      <el-collapse-item :title="$t('main.publish.to.cnblogs')" name="4">
       <cnblogs-main/>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>

import VuepressMain from "@/components/main/VuepressMain";
import JVueMain from "@/components/main/JVueMain";
import CnblogsMain from "@/components/main/CnblogsMain";

export default {
  name: "PlantformMain",
  components: {CnblogsMain, JVueMain, VuepressMain}
}
</script>

<style scoped>

</style>