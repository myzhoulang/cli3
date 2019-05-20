<template>
  <div class="header">
    <a-icon
      class="triggerIcon"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="toggleCollapsed"
    ></a-icon>
    <UserMenu />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import UserMenu from "./UserMenu";

@Component({
  components: {
    UserMenu
  },
  props: {
    collapsed: {
      type: Boolean,
      required: true,
      default: false
    }
  }
})
export default class Header extends Vue {
  toggleCollapsed(): void {
    this.$emit("toggle");
  }
}
</script>

<style lang="less" scoped>
.triggerIcon {
  height: 64px;
  padding: 22px 24px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s, padding 0s;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
</style>
