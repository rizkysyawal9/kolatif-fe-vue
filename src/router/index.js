import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../App.vue'),
    children: [
      {
        path: '/',
        name: 'outboard',
        component: () => import('../views/LayoutOutboard'),
        children: [
          {
            path: '/',
            name: 'landing',
            component: () => import('../pages/index'),
          },
        ],
      },
      {
        path: '/dashboard',
        name: 'inboard',
        component: () => import('../views/LayoutInboard'),
        redirect: {
          name: 'mentors',
        },
        children: [
          {
            path: 'mentors',
            name: 'mentors',
            component: () => import('../pages/mentors/index'),
          },
          {
            path: 'mentors/:id',
            name: 'single-mentor',
            component: () => import('../pages/mentors/_id'),
          },
          {
            path: 'sessions',
            name: 'sessions',
            component: () => import('../pages/sessions/index'),
          },
          {
            path: 'events',
            name: 'events',
            component: () => import('../pages/events'),
          },
          {
            path: 'faq',
            name: 'faq',
            component: () => import('../pages/faq/index'),
          },
          {
            path: 'profile',
            name: 'profile',
            component: () => import('../pages/profile/index'),
          },
          {
            path: 'profile/edit',
            name: 'edit-profile',
            component: () => import('../pages/profile/edit'),
          },
        ],
      },
    ],
  },
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   component: () => import('../pages/mentors')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = new VueRouter({
  routes,
})

export default router
