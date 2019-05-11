import Vue from 'vue'
import Router from 'vue-router'
import Onlineusers from '@/pages/Onlineusers'
// import timertask from '@/pages/timertask'
import rytimertaskcontent from "@/components/timertask/ry-timertask-content"
import ryOnlineuserscontent from "@/components/Onlineusers/ry-Onlineusers-content"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Onlineusers,
      children:[
        {
          path: '/rytimertaskcontent',
          name: 'rytimertaskcontent',
          component: rytimertaskcontent
        },
        {
          path: '/',
          name: 'ryOnlineuserscontent',
          component: ryOnlineuserscontent
        }
      ]
    },  
    
  ]
})
