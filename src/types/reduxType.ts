import { store } from '../redux';

type RootState = ReturnType<typeof store.getState>;
type appDispatch = typeof store.dispatch;

export type { appDispatch, RootState };