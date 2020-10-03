import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _38f83a3a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2ee2dae0 = () => interopDefault(import('../pages/activities.vue' /* webpackChunkName: "pages/activities" */))
const _43612fe6 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _668a2c32 = () => interopDefault(import('../pages/places/index.vue' /* webpackChunkName: "pages/places/index" */))
const _ce0f5366 = () => interopDefault(import('../pages/places/africa/index.vue' /* webpackChunkName: "pages/places/africa/index" */))
const _4c494d71 = () => interopDefault(import('../pages/places/america/index.vue' /* webpackChunkName: "pages/places/america/index" */))
const _8406cac6 = () => interopDefault(import('../pages/places/asia/index.vue' /* webpackChunkName: "pages/places/asia/index" */))
const _9c754116 = () => interopDefault(import('../pages/places/europe/index.vue' /* webpackChunkName: "pages/places/europe/index" */))
const _8641380e = () => interopDefault(import('../pages/places/oceania/index.vue' /* webpackChunkName: "pages/places/oceania/index" */))
const _336065dc = () => interopDefault(import('../pages/places/africa/thailand.vue' /* webpackChunkName: "pages/places/africa/thailand" */))
const _6e686c38 = () => interopDefault(import('../pages/places/america/thailand.vue' /* webpackChunkName: "pages/places/america/thailand" */))
const _422c00e8 = () => interopDefault(import('../pages/places/asia/thailand.vue' /* webpackChunkName: "pages/places/asia/thailand" */))
const _4f9cebb4 = () => interopDefault(import('../pages/places/europe/thailand.vue' /* webpackChunkName: "pages/places/europe/thailand" */))
const _385068b0 = () => interopDefault(import('../pages/places/oceania/thailand.vue' /* webpackChunkName: "pages/places/oceania/thailand" */))
const _5ab810a1 = () => interopDefault(import('../pages/places/oceania/_id.vue' /* webpackChunkName: "pages/places/oceania/_id" */))
const _89ae7a9e = () => interopDefault(import('../pages/places/oceania/_slug.vue' /* webpackChunkName: "pages/places/oceania/_slug" */))
const _58b014ff = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _38f83a3a,
    name: "about"
  }, {
    path: "/activities",
    component: _2ee2dae0,
    name: "activities"
  }, {
    path: "/contact",
    component: _43612fe6,
    name: "contact"
  }, {
    path: "/places",
    component: _668a2c32,
    name: "places"
  }, {
    path: "/places/africa",
    component: _ce0f5366,
    name: "places-africa"
  }, {
    path: "/places/america",
    component: _4c494d71,
    name: "places-america"
  }, {
    path: "/places/asia",
    component: _8406cac6,
    name: "places-asia"
  }, {
    path: "/places/europe",
    component: _9c754116,
    name: "places-europe"
  }, {
    path: "/places/oceania",
    component: _8641380e,
    name: "places-oceania"
  }, {
    path: "/places/africa/thailand",
    component: _336065dc,
    name: "places-africa-thailand"
  }, {
    path: "/places/america/thailand",
    component: _6e686c38,
    name: "places-america-thailand"
  }, {
    path: "/places/asia/thailand",
    component: _422c00e8,
    name: "places-asia-thailand"
  }, {
    path: "/places/europe/thailand",
    component: _4f9cebb4,
    name: "places-europe-thailand"
  }, {
    path: "/places/oceania/thailand",
    component: _385068b0,
    name: "places-oceania-thailand"
  }, {
    path: "/places/oceania/:id",
    component: _5ab810a1,
    name: "places-oceania-id"
  }, {
    path: "/places/oceania/:slug",
    component: _89ae7a9e,
    name: "places-oceania-slug"
  }, {
    path: "/",
    component: _58b014ff,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
