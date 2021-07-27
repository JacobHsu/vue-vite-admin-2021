import type { AppRouteModule } from '/@/router/types';

import HelloWorld from '/@/components/HelloWorld.vue';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: HelloWorld,
  meta: {
    icon: 'ion:grid-outline',
    title: 'routes.dashboard.dashboard',
  },
};

export default dashboard;
