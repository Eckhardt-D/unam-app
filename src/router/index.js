import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ChapterFive from '@/components/ChapterFive'
import ChapterTwo from '@/components/ChapterTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
     path: '/chapter-5',
     name: 'chapter-5',
     component: ChapterFive 
    },
    {
      path: '/chapter-2',
      name: 'chapter-2',
      component: ChapterTwo 
     },
  ]
})
