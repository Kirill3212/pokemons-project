import { useState } from "react";
import { useShowToast } from "./useShowToast";
import { SinglePokemonData } from "../types/pokemonData";
import { useAppSelector, useAppDispatch } from ".";
import { getFavoritesSelector } from "../store/slices/favoritesSlice";
import { getAuthStatusSelector } from '../store/slices/userSlice';
import {
  addToFavorites,
  deleteFromFavorites,
} from "../store/slices/favoritesSlice";

 export const useCheckIfIsLikedAndAddToFavorites = () => {
    const [isLiked, setIsLiked] = useState(false) 
    const isAuthorized = useAppSelector(getAuthStatusSelector);
    const favoritePokemons = useAppSelector(getFavoritesSelector);
    const dispatch = useAppDispatch()
    const toast = useShowToast()

    const checkIfIsLiked = (pokemon: SinglePokemonData | undefined) => {
      const res = favoritePokemons.some(
      (pok) => pok.id == pokemon?.id
    );
      if(res){
        setIsLiked(true)
      }else setIsLiked(false)
    }

    const handleAddToFavorites = (pokemon: SinglePokemonData | undefined) => {
      if (isAuthorized) {
      setIsLiked(!isLiked);
      isLiked
        ? dispatch(deleteFromFavorites(pokemon?.id))
        : dispatch(addToFavorites(pokemon));
    }else toast("Sorry :(", "Need to sign in", "error")
    }

    return {isLiked, checkIfIsLiked, handleAddToFavorites}
  };
