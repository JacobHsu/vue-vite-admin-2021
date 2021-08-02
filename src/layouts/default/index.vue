<template>
  <p> PAGE_NOT_FOUND_ROUTE </p>
  <Layout :class="prefixCls" v-bind="lockEvents"> </Layout>
</template>

<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useLockPage } from '/@/hooks/web/useLockPage';
  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      Layout,
    },
    setup: () => {
      const { prefixCls } = useDesign('default-layout');

      // Create a lock screen monitor
      const lockEvents = useLockPage();

      return {
        prefixCls,
        lockEvents,
      };
    },
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-default-layout';

  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: @content-bg;
    flex-direction: column;

    > .ant-layout {
      min-height: 100%;
    }

    &-main {
      width: 100%;
      margin-left: 1px;
    }
  }
</style>
