<template>
  <el-tabs type="border-card">
    <el-tab-pane :label="$t('setting.vuepress')">
      <vuepress-setting/>
    </el-tab-pane>
    <el-tab-pane :label="$t('setting.jvue')">
      <j-vue-setting/>
    </el-tab-pane>
    <el-tab-pane :label="$t('setting.conf')">Confluence</el-tab-pane>
    <el-tab-pane :label="$t('setting.cnblogs')">博客园</el-tab-pane>
    <el-tab-pane :label="$t('setting.other1')">
      <other-setting1/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import JVueSetting from "@/components/setting/JVueSetting";
import VuepressSetting from "@/components/setting/VuepressSetting";
import OtherSetting1 from "@/components/setting/OtherSetting1";

export default {
  name: "PlantformSetting",
  components: {OtherSetting1, VuepressSetting, JVueSetting}
}
</script>

<style scoped>

</style>