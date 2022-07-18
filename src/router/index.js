import {createRouter, createWebHistory} from 'vue-router'

const EquipmentLogin = () => import('../views/auth/EquipmentLogin.vue')
const EquipmentCatalog = () => import('../views/EquipmentCatalog.vue')
const EquipmentCategory = () => import('../views/EquipmentCategory.vue')
const EquipmentSubCategory = () => import('../views/EquipmentSubCategory.vue')

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/auth/login'
    },
    {
        path: '/auth/login',
        name: 'login',
        component: EquipmentLogin,
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: EquipmentCatalog,
    },
    {
        path: '/catalog/:id',
        name: 'category',
        component: EquipmentCategory,
    },
    {
        path: '/catalog/:parent/:id',
        name: 'subcategory',
        component: EquipmentSubCategory,
    }
]

const index = createRouter({history: createWebHistory(), routes})


export default index
