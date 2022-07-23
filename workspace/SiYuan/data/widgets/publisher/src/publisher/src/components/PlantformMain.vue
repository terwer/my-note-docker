<template>
  <div class="demo-collapse">
    <el-collapse model-value="1" accordion>
      <el-collapse-item :title="$t('main.publish.to.vuepress')" name="1">
        <el-form label-width="120px">
          <el-form-item :label="$t('main.slug')">
            <el-input/>
          </el-form-item>

          <el-form-item>
            <el-checkbox :label="$t('main.use.google.translate')" size="large"/> &nbsp;&nbsp;
            <el-button type="primary">{{ $t('main.auto.fetch.slug') }}</el-button>
          </el-form-item>

          <el-form-item :label="$t('main.desc')">
            <el-input type="textarea"/>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">{{ $t('main.auto.fetch.desc') }}</el-button>
          </el-form-item>

          <el-form-item :label="$t('main.create.time')">
            <el-date-picker
                type="datetime"
                :placeholder="$t('main.create.time.placeholder')"
            />
          </el-form-item>

          <el-form-item :label="$t('main.tag')">
            <el-tag closable>Tag 1</el-tag> &nbsp;&nbsp;
            <el-tag class="ml-2" type="success">Tag 2</el-tag> &nbsp;&nbsp;
            <el-tag class="ml-2" type="info">Tag 3</el-tag> &nbsp;&nbsp;
            <el-tag class="ml-2" type="warning">Tag 4</el-tag> &nbsp;&nbsp;
            <el-tag class="ml-2" type="danger">Tag 5</el-tag>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">{{ $t('main.auto.fetch.tag') }}</el-button>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">{{ $t('main.publish') }}</el-button>
            <el-button>{{ $t('main.cancel') }}</el-button>
            <el-button type="danger" text>{{ $t('main.publish.status.unpublish') }}</el-button>
          </el-form-item>
        </el-form>
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
export default {
  name: "PlantformMain",
  props: {
    modelValue: String // previously was `value: String`
  },
}
</script>

<style scoped>

</style>