import { Location, useLocation } from 'react-router-dom';

export interface IState<STATE> extends Location {
    state: STATE;
}

const useAppLocation = <T>(): IState<T> => useLocation();

export { useAppLocation };