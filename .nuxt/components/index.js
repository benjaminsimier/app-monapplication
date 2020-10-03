export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'

export const LazyTheFooter = import('../../components/TheFooter.vue' /* webpackChunkName: "components/TheFooter" */).then(c => c.default || c)
export const LazyTheHeader = import('../../components/TheHeader.vue' /* webpackChunkName: "components/TheHeader" */).then(c => c.default || c)
