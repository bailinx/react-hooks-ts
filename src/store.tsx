import { useContext } from 'react';
import Context from './context';

const store = () => {
  const { store, dispatch }: { [key: string]: any } = useContext(Context);
  return {
    getState: store,
    dispatch
  };
};

export default store;
