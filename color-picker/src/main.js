import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import CombinationDetail from './components/CombinationDetail.vue'
import RelatedCombinationItem from './components/RelatedCombinationItem.vue'

const app = createApp(App)
app.component('combination-detail', CombinationDetail)
app.component('related-combination-item', RelatedCombinationItem)

app.use(router)

app.mount('#app')
