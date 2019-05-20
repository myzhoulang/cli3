<template>
  <div class="userMenu">
    <span class="action">
      <a-tooltip placement="bottom">
        <template slot="title">
          <span>使用文档</span>
        </template>
        <a-icon type="question-circle-o"></a-icon>
      </a-tooltip>
    </span>

    <Notice class="action" />

    <a-dropdown>
      <span class="action ant-dropdown-link user-dropdown-menu">
        <a-avatar :src="avatar" class="avatar" size="small" />
        <span>Zhou lang</span>
      </span>
      <a-menu class="user-dropdown-menu-wrapper" slot="overlay">
        <a-menu-item key="0">
          <router-link :to="{ name: 'center' }">
            <a-icon type="user" />
            <span>个人中心</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="1">
          <router-link :to="{ name: 'settings' }">
            <a-icon type="setting" />
            <span>账户设置</span>
          </router-link>
        </a-menu-item>
        <a-menu-item disabled key="2">
          <a-icon type="setting" />
          <span>测试</span>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">
          <a @click="handleLogout" href="javascript:;">
            <a-icon type="logout" />
            <span>退出登录</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>

    <a-dropdown>
      <span class="action ant-dropdown-link user-dropdown-menu">
        <a-icon type="global" />
      </span>
      <a-menu slot="overlay">
        <a-menu-item><span>🇨🇳</span> 简体中文</a-menu-item>
        <a-menu-item><span>🇭🇰</span> 繁体中文</a-menu-item>
        <a-menu-item><span>🇬🇧</span> English</a-menu-item>
        <a-menu-item><span>🇧🇷</span> Português</a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Notice from "./Notice";
import avatar from "../../assets/images/user.png";

@Component({
  components: {
    Notice
  }
})
export default class UserMenu extends Vue {
  private avatar = avatar;

  handleLogout(): void {}
}
</script>

<style lang="less" scoped>
.userMenu {
  float: right;
  height: 100%;
  overflow: hidden;
}

.action {
  display: inline-block;
  height: 100%;
  padding: 0 12px;
  cursor: pointer;
  transition: all 0.3s;

  > i {
    color: rgba(0, 0, 0, 0.65);
    vertical-align: middle;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}

.avatar {
  margin: 20px 8px 20px 0;
  color: #1890ff;
  vertical-align: top;
  background: hsla(0, 0%, 100%, 0.85);
}
</style>
