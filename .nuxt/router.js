import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _80c5902c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6256ba40 = () => interopDefault(import('../pages/activities.vue' /* webpackChunkName: "pages/activities" */))
const _4fabb9bd = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _58e52efc = () => interopDefault(import('../pages/places/index.vue' /* webpackChunkName: "pages/places/index" */))
const _4f779ffd = () => interopDefault(import('../pages/places/africa/index.vue' /* webpackChunkName: "pages/places/africa/index" */))
const _65b339c1 = () => interopDefault(import('../pages/places/america/index.vue' /* webpackChunkName: "pages/places/america/index" */))
const _33badf66 = () => interopDefault(import('../pages/places/asia/index.vue' /* webpackChunkName: "pages/places/asia/index" */))
const _6844a925 = () => interopDefault(import('../pages/places/europe/index.vue' /* webpackChunkName: "pages/places/europe/index" */))
const _536d5f6e = () => interopDefault(import('../pages/places/oceania/index.vue' /* webpackChunkName: "pages/places/oceania/index" */))
const _cbff03a8 = () => interopDefault(import('../pages/places/africa/thailand.vue' /* webpackChunkName: "pages/places/africa/thailand" */))
const _48694430 = () => interopDefault(import('../pages/places/america/thailand.vue' /* webpackChunkName: "pages/places/america/thailand" */))
const _0f582848 = () => interopDefault(import('../pages/places/asia/thailand.vue' /* webpackChunkName: "pages/places/asia/thailand" */))
const _9385f7f8 = () => interopDefault(import('../pages/places/europe/thailand.vue' /* webpackChunkName: "pages/places/europe/thailand" */))
const _b4994b40 = () => interopDefault(import('../pages/places/oceania/thailand.vue' /* webpackChunkName: "pages/places/oceania/thailand" */))
const _3750d0f1 = () => interopDefault(import('../pages/places/oceania/_id.vue' /* webpackChunkName: "pages/places/oceania/_id" */))
const _56daa1fe = () => interopDefault(import('../pages/places/oceania/_slug.vue' /* webpackChunkName: "pages/places/oceania/_slug" */))
const _4155daa2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _80c5902c,
    name: "about"
  }, {
    path: "/activities",
    component: _6256ba40,
    name: "activities"
  }, {
    path: "/contact",
    component: _4fabb9bd,
    name: "contact"
  }, {
    path: "/places",
    component: _58e52efc,
    name: "places"
  }, {
    path: "/places/africa",
    component: _4f779ffd,
    name: "places-africa"
  }, {
    path: "/places/america",
    component: _65b339c1,
    name: "places-america"
  }, {
    path: "/places/asia",
    component: _33badf66,
    name: "places-asia"
  }, {
    path: "/places/europe",
    component: _6844a925,
    name: "places-europe"
  }, {
    path: "/places/oceania",
    component: _536d5f6e,
    name: "places-oceania"
  }, {
    path: "/places/africa/thailand",
    component: _cbff03a8,
    name: "places-africa-thailand"
  }, {
    path: "/places/america/thailand",
    component: _48694430,
    name: "places-america-thailand"
  }, {
    path: "/places/asia/thailand",
    component: _0f582848,
    name: "places-asia-thailand"
  }, {
    path: "/places/europe/thailand",
    component: _9385f7f8,
    name: "places-europe-thailand"
  }, {
    path: "/places/oceania/thailand",
    component: _b4994b40,
    name: "places-oceania-thailand"
  }, {
    path: "/places/oceania/:id",
    component: _3750d0f1,
    name: "places-oceania-id"
  }, {
    path: "/places/oceania/:slug",
    component: _56daa1fe,
    name: "places-oceania-slug"
  }, {
    path: "/",
    component: _4155daa2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
