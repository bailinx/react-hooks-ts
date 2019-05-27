import * as React from 'react';
import Context from './context';
import { IReducerModel } from './models/reducer';
import { IActionModel } from './models/action';

type Props = {
  children: React.ReactNode,
  reducer: React.Reducer<IReducerModel, IActionModel<string, any>>
};

const { useState, useReducer, useEffect } = React;
const Provider = ({ children, reducer }: Props) => {
  const [store, dispatch] = useReducer(reducer, {});
  const [state, setState] = useState({ isLoaded: false });

  useEffect(() => {
    dispatch({ type: '@init' });
    setState({ isLoaded: true });
  }, []);

  return (
    <Context.Provider value={{ dispatch, store }}>
      {state.isLoaded ? children : false}
    </Context.Provider>
  );
};

export default Provider;
