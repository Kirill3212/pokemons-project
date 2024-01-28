import { SinglePokemonData } from './../types/pokemonData';
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

    getAuth: (): string | null => localStorage.getItem('auth'),

    addToFavorites: (email: string, pokemonCard: SinglePokemonData) => {
        const e = localStorage.getItem(email)
        if(e){
            const parsed = JSON.parse(e)
            const notExist = parsed.favorites.every((item: SinglePokemonData) => item.id !== pokemonCard.id)
            if(notExist){
                localStorage.setItem(email, JSON.stringify({... parsed, favorites: [... parsed.favorites, pokemonCard]}))     
            }
        }
    },

    deleteFromFavorites: (email: string, id: number) => {
        const e = localStorage.getItem(email)
        if(e){
            const parsed = JSON.parse(e)
            const updatedFavorites = parsed.favorites.filter(
                (item: SinglePokemonData) => item.id !== id
            );
            localStorage.setItem(
                email,
                JSON.stringify({...parsed, favorites: updatedFavorites})
            );
        }
    },

    clearFavorites: (email: string) => {
        const e = localStorage.getItem(email)
        if(e){
            const parsed = JSON.parse(e)
            localStorage.setItem(
                email,
                JSON.stringify({...parsed, favorites: []})
            );
        }
    }
}