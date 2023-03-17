import { createApp } from 'vue';
import { router, store } from '@/app/providers';
import App from './index.vue';

//primeicons
import 'primeicons/primeicons.css'

import components from '@/shared/ui'

const app = createApp(App).use(router).use(store)

components.forEach( component => {
  app.component(component.name, component.value)
})

export { app }
