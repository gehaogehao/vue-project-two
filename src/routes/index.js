import msite from 'pages/msite/msite.vue'
import order from 'pages/order/order.vue'
import profile from 'pages/profile/profile.vue'
import search from 'pages/search/search.vue'
import login from 'pages/login/login.vue'
import user from 'pages/userMessage/userMessage.vue'
export default [
    { path: '/msite', component: msite, meta: { showFooter: true } },
    { path: '/order', component: order, meta: { showFooter: true } },
    { path: '/profile', component: profile, meta: { showFooter: true } },
    { path: '/search', component: search, meta: { showFooter: true } },
    { path: '/login', component: login, meta: { showFooter: false } },
    { path: '/userMessage', component: user, meta: { showFooter: false } },
    { path: '/', redirect: '/msite' }
]