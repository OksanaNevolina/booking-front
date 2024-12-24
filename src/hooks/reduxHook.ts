import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { appDispatch, RootState } from '../types';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<appDispatch>();
export { useAppDispatch, useAppSelector };