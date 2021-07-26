import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';
// import { PageEnum } from '/@/enums/pageEnum';
import HelloWorld from '/@/components/HelloWorld.vue';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  // redirect: PageEnum.BASE_HOME,
  component: HelloWorld,
  meta: {
    title: 'Root',
  },
};

// Basic routing without permission
export const basicRoutes = [RootRoute];
