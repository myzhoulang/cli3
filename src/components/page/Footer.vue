<template>
  <a-layout-footer class="footer">
    <div class="footer">
      <div class="links">
        <a href="">Pro 首页</a>
        <a href=""><a-icon type="github"/></a>
        <a href="">Ant design</a>
      </div>
      <div class="copyright">
        Copyright <a-icon type="copyright" /> 2018 蚂蚁金服体验技术部出品
      </div>
    </div>
  </a-layout-footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style lang="less" scoped>
.footer {
  margin: 48px 0 24px;
  padding: 0 16px;
  text-align: center;
}

.links {
  margin-bottom: 8px;

  a {
    color: rgba(0, 0, 0, 0.45);
    transition: all 0.3s;

    &:not(:last-child) {
      margin-right: 40px;
    }
  }
}

.copyright {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
</style>
