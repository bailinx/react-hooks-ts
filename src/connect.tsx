import * as React from 'react';
import Context from './context';
import { ICounterModel, IActionModel, IStoreModel } from '$ROOT/models/index';

const { useContext } = React;
const connect = (mapState: Function, mapDispatch: Function) => {
  return (WrappedComponent: any) => {
    return () => {
      const { store, dispatch }: {
        [key: string]: any
      } = useContext(Context);
      return (
        <WrappedComponent {...mapState(store)} {...mapDispatch(dispatch)} />
      );
    };
  };
};

export default connect;
