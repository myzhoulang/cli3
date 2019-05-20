<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed" :trigger="null">
      <div class="logo"></div>
      <SiderMenu />
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <GlobalHeader :collapsed.sync="collapsed" @toggle="toggle" />
      </a-layout-header>

      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          Bill is a cat.
        </div>
      </a-layout-content>
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import SiderMenu from "./SiderMenu";
import Footer from "../components/page/Footer";
import GlobalHeader from "../components/GlobalHeader";

@Component({
  components: {
    SiderMenu,
    Footer,
    GlobalHeader
  }
})
export default class BasicLayout extends Vue {
  private collapsed: Boolean = true;

  toggle(): void {
    this.collapsed = !this.collapsed;
  }
}
</script>

<style lang="less" scoped>
.logo {
  position: relative;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  background: #002140;
  transition: all 0.3s;
}
</style>
