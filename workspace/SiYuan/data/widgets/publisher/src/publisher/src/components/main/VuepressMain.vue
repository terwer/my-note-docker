<template>
  <el-container>
    <el-aside width="45%">
      <el-form label-width="120px">
        <el-form-item :label="$t('main.slug')">
          <el-input v-model="formData.customSlug"/>
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
          <el-button type="primary">{{ $t('main.save.attr.to.siyuan') }}</el-button>
          <el-button type="primary">{{ $t('main.publish') }}</el-button>
          <el-button>{{ $t('main.cancel') }}</el-button>
          <el-button type="danger" text>{{ $t('main.publish.status.unpublish') }}</el-button>
        </el-form-item>
      </el-form>
    </el-aside>
    <el-main>
      <el-form label-width="120px">
        <el-form-item>
          {{ $t('main.yaml.formatter') }}
        </el-form-item>
        <el-form-item>
          <el-input :autosize="{ minRows: 12, maxRows: 15 }" type="textarea"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">{{ $t('main.siyuan.to.yaml') }}</el-button>
          <el-button type="primary">{{ $t('main.yaml.to.siyuan') }}</el-button>
          <el-button type="primary">{{ $t('main.copy') }}</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>

import {getSiyuanPageId} from "@/lib/util";

export default {
  name: "VuepressMain",
  data() {
    return {
      formData: {
        customSlug: ""
      }
    }
  },
  async created() {
    await this.initPage();
    console.log("VuepressMain created=>初始化页面");
  },
  async mounted() {
    console.log("VuepressMain mounted");
  },
  methods: {
    async initPage() {
      const pageId = await getSiyuanPageId(false);
      console.log("initPage.getSiyuanPageId=>", pageId);
      this.formData.customSlug = pageId;
    }
  }
}
</script>

<style scoped>
</style>