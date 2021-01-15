import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '@/views/Info.vue'
import Upload from '@/views/Upload.vue'
import Preview from '@/views/Preview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Info',
    component: Info
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
