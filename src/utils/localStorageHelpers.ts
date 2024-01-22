import { User } from '../types/user'

export const localStorageHelpers = {
    setUser: (email: string, user: User): void => {
        const u = JSON.stringify(user)
        localStorage.setItem(email, u)
    },

    getUser: (email: string): User | null => {
        const user = localStorage.getItem(email)
        if(user) return JSON.parse(user)
        return null
    },

    setAuth: (email:string): void => {
        localStorage.setItem('auth', email)
    },

    getAuth: (): string | null => localStorage.getItem('auth')
}