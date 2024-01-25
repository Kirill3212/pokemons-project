import { useState } from "react";

import { validateEmail } from "../utils/validateEmail";
import { validatePassword } from "../utils/validatePassword";

import useShowToast from "./useShowToast";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./index";
import { logIn } from "../store/slices/userSlice";

type SignUpInputs = {
    email:string, 
    password:string, 
    confirmPassword:string
}

const useSignUp = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const toast = useShowToast()
  const navigate = useNavigate()

  const handleSignUp = ({email, password, confirmPassword}: SignUpInputs) => {
  setLoading(true)

  setTimeout(()=> {
  if(!email && !password && !confirmPassword){
      setLoading(false)
      toast('Error', 'Please fill all the fields', 'error')
    }else if (!email){
      setLoading(false)
      toast('Error', 'Please fill email field', 'error')
    }
    else if (!password){
      setLoading(false)
      toast('Error', 'Please fill password field', 'error')
    }
    else if (!confirmPassword){
      setLoading(false)
      toast('Error', 'Please fill confirmPassword field', 'error')
    }else if(!validateEmail(email)){
      setLoading(false)
      toast('Error', 'Invalid email format', 'error')
    }else if(!validatePassword(password)){
      setLoading(false)
      toast('Error', 'Password must be at least 6 characters long', 'error')
    }else if(password !== confirmPassword){
      setLoading(false)
      toast('Error', 'Passwords should be the same', 'error')
    }else {
      navigate('/')
      setLoading(false)
      toast('Success', 'Sign up successfully', 'success');
      const user = {
          email,
          password,
          favorites: [],
          history: [],
        };
      dispatch(logIn(user)); 
    }
}, 800)
}

  return { loading, handleSignUp}
};

export default useSignUp;

