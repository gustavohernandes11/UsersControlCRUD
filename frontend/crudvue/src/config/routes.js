/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'

import RegisterPage from '@/components/pages/RegisterPage'
import UsersPage from '@/components/pages/UsersPage'


const routes = [{
    name: 'registerpage',
    path: '/',
    component: RegisterPage
}, {
    name: 'userspage',
    path: '/users',
    component: UsersPage,
    meta: { requiresAdmin: true }
}]

const router = new VueRouter({
    mode: 'history',
    routes
})