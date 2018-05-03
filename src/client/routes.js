import Home from './components/home.vue'

const routers = [
    { path: '/', component: Home, name: 'home'},
    { path: '*', redirect: '/'}
]

const names = [
    { path: '/', name: 'Home'}
]

export {routers as default, names}
