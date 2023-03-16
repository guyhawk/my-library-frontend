import { createApp } from 'vue';
import { router, store } from '@/app/providers';
import App from './index.vue';

import PrimeVue from 'primevue/config'
// import ToastService from 'primevue/toastservice';
// import ConfirmationService from 'primevue/confirmationservice';


// PrimeVue
// theme
import 'primevue/resources/themes/lara-light-teal/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import componentsPrime from '@/shared/ui/PrimeUI'

const app = createApp(App).use(router).use(store).use(PrimeVue)

componentsPrime.forEach( component => {
  app.component(component.name, component.value)
})

export { app }
