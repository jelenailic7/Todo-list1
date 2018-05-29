import { authService } from '../services/AuthService'

export function requiresAuth (to) {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(!authService.isAuthenticated()) {
            return window.location.href = "/login"
        }
        authService.setAxiosDefaultAuthorizationHeader()
    }
    return Promise.resolve(to)
}

export function guestOnly (to) {
    if (to.matched.some(record => record.meta.guestOnly) && authService.isAuthenticated()) {
        return Promise.reject({ name: 'todos'})
    }
    return Promise.resolve(to)
}