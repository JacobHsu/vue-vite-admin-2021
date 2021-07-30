<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ConfigProvider :locale="getAntdLocale">
    <RouterView />
  </ConfigProvider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ConfigProvider } from 'ant-design-vue';
  import { useTitle } from '/@/hooks/web/useTitle';
  import { useLocale } from '/@/locales/useLocale';

  export default defineComponent({
    name: 'App',
    components: { ConfigProvider },
    setup() {
      useTitle();

      // support Multi-language
      const { getAntdLocale } = useLocale();

      return { getAntdLocale };
    },
  });
</script>
