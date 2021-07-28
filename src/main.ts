import App from './App.vue';
import { createApp } from 'vue';
import { initAppConfigStore } from '/@/logics/initAppConfig';
import { setupErrorHandle } from '/@/logics/error-handle';
import { setupRouter } from '/@/router';
import { setupStore } from '/@/store';

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  setupStore(app);

  // Initialize internal system configuration
  initAppConfigStore();

  // Configure routing
  setupRouter(app);

  // Configure global error handling
  setupErrorHandle(app);

  app.mount('#app', true);
}

void bootstrap();
