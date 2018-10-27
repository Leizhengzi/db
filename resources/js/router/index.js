import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  // { path: '/login', component: () => import('/views/login/index'), hidden: true },
  // { path: '/404', component: () => import('/views/404'), hidden: true },
  { path: '/404', component: resolve => require(['../views/404'], resolve)},
  {
    path: '/fahuo',
    component: Layout,
    children: [
      {
        path: 'doing',
        name: 'WoYaoFaHuo',
        component: resolve => require(['../views/fahuo/doing'], resolve),
        meta: { title: '我要发货', icon: 'form' }
      },
      {
        path: 'wait',
        name: 'DengDaiFaHuo',
        component: resolve => require(['../views/fahuo/wait'], resolve),
        meta: { title: '等待发货', icon: 'form' }
      },
      {
        path: 'over',
        name: 'YiJingFaHuo',
        component: resolve => require(['../views/fahuo/over'], resolve),
        meta: { title: '已经发货', icon: 'form' }
      },
      {
        path: 'didan',
        name: 'WoYaoDiDan',
        component: resolve => require(['../views/fahuo/didan'], resolve),
        meta: { title: '我要底单', icon: 'form' }
      },
      {
        path: 'address',
        name: 'SheZhiFaHuoDi',
        component: resolve => require(['../views/fahuo/address'], resolve),
        meta: { title: '设置发货地址', icon: 'form' }
      },
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'register',
        name: 'register',
        component: resolve => require(['../views/login/register'], resolve),
        meta: { title: '注册', icon: 'table' }
      },
      {
        path: 'login',
        name: 'login',
        component: resolve => require(['../views/login/login'], resolve),
        meta: { title: '登陆', icon: 'table' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'b',
        name: 'b',
        component: resolve => require(['../components/Example'], resolve),
        meta: { title: '发货管理', icon: 'table' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

