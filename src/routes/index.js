import msite from 'pages/msite/msite.vue'
import order from 'pages/order/order.vue'
import profile from 'pages/profile/profile.vue'
import search from 'pages/search/search.vue'
export default [
    {path:'/msite',component:msite},
    {path:'/order',component:order},
    {path:'/profile',component:profile},
    {path:'/search',component:search},
    {path:'/',redirect:'/msite'}
]