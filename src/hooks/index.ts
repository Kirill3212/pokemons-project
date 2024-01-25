import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { State, Dispatch } from '../types/store'

export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector