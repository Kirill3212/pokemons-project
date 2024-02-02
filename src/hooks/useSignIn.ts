import { useState } from "react";

import { localStorageHelpers } from "../utils/localStorageHelpers";

import { useShowToast } from "./useShowToast";

import { useNavigate } from "react-router-dom";

import { useAppDispatch } from ".";

import { logIn } from "../store/slices/userSlice";
import { setFavorites } from "../store/slices/favoritesSlice";
import { setHistory } from "../store/slices/historySlice";

type SignInInputs = {
    email:string, 
    password:string, 
}

const useSignIn = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const toast = useShowToast()
  const navigate = useNavigate()

  const handleSignIn = ({email, password}: SignInInputs) => {
  setLoading(true)

  const user = localStorageHelpers.getUser(email)

  setTimeout(()=> {
    if(!user || email !== user.email || password !== user.password){
      setLoading(false)
      toast('Error', 'User not found', 'error')
    }else {
      navigate('/')
      setLoading(false)
      dispatch(logIn(user))
      dispatch(setFavorites(user?.favorites))
      dispatch(setHistory(user?.history)) 
      toast('Success', 'Log in successfully', 'success');
    }
}, 800)
}

  return { loading, handleSignIn}
};

export default useSignIn;

