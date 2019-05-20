<template>
  <a-popover
    placement="topLeft"
    class="notice-index-popover-inner-content"
    trigger="click"
  >
    <div slot="content">
      <div style="width: 340px">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane tab="通知(2)" key="1">
            <a-list itemLayout="horizontal" :dataSource="data">
              <div
                class="components-notice-index-notice-list-clear"
                slot="footer"
              >
                清空通知
              </div>
              <a-list-item slot="renderItem" slot-scope="item">
                <a href="https://ant.design" slot="title">{{ item.title }}</a>
                <a-list-item-meta :description="item.desc">
                  <a-avatar slot="avatar" :src="item.avatar" />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
          <a-tab-pane tab="通知(2)" key="2">
            <a-list itemLayout="horizontal" :dataSource="data">
              <div
                class="components-notice-index-notice-list-clear"
                slot="footer"
              >
                清空通知
              </div>
              <a-list-item slot="renderItem" slot-scope="item">
                <a href="https://ant.design" slot="title">{{ item.title }}</a>
                <a-list-item-meta :description="item.desc">
                  <a-avatar slot="avatar" :src="item.avatar" />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
          <a-tab-pane tab="通知(2)" key="3">
            <a-list itemLayout="horizontal" :dataSource="data">
              <div
                class="components-notice-index-notice-list-clear"
                slot="footer"
              >
                清空通知
              </div>
              <a-list-item slot="renderItem" slot-scope="item">
                <a href="https://ant.design" slot="title">{{ item.title }}</a>
                <a-list-item-meta :description="item.desc">
                  <a-avatar slot="avatar" :src="item.avatar" />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <span href="/" class="badge">
      <a-icon class="bell" type="bell"></a-icon>
    </span>
  </a-popover>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import message from "../../assets/images/message.png";
import dingding from "../../assets/images/dingding.png";
import plus from "../../assets/images/plus.png";
import star from "../../assets/images/star.png";

@Component
export default class Notice extends Vue {
  private data = [
    {
      avatar: message,
      title: "您收到14份简历",
      desc: "a years ago"
    },
    {
      avatar: dingding,
      title: "Ant Design Title 2",
      desc: "a years ago"
    },
    {
      avatar: plus,
      title: "Ant Design Title 3",
      desc: "a years ago"
    },
    {
      avatar: star,
      title: "Ant Design Title 4",
      desc: "a years ago"
    }
  ];
}
</script>

<style lang="less">
.badge {
  font-size: 16px;
}

.bell {
  padding: 4px;
  vertical-align: middle;
}
</style>
