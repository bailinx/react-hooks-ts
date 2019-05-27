import * as React from 'react';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Blank from '$ROOT/components/blank/';
import connect from '$ROOT/connect';
import { increaseCount, decreaseCount } from '$ROOT/actions/counter';
import { ICounterModel, IActionModel, IStoreModel } from '$ROOT/models/index';

export interface IAppProps {
  counter: ICounterModel;
  increaseCount: Function;
  decreaseCount: Function;
};

const { Loading } = Blank;
const { useState, useEffect } = React;

const useGithub = (userName: string) => {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(r => r.json())
      .then(setUser);
  }, [userName]);

  return user;
};

function App({ counter, increaseCount, decreaseCount }: IAppProps) {
  const user = useGithub('tj');

  if (!user) {
    return <Loading />;
  }

  return (
    <div>
      Hello 125<b>{user.login}</b>
      <p>{user.bio}</p>
      <Link to="/app">页面2</Link>
      <p>数字是：{counter.count}</p>
      <button onClick={() => increaseCount({ count: counter.count + 1 })}>+1</button>
      <button onClick={() => decreaseCount({ count: counter.count - 1 })}>-1</button>
    </div>
  );
}

const mapStateToProps = (store: IStoreModel) => ({
  counter: store.counter,
});

const mapDispathToProps = (dispatch: Function) => ({
  increaseCount: (param: ICounterModel) => dispatch(increaseCount(param)),
  decreaseCount: (param: ICounterModel) => dispatch(decreaseCount(param))
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(hot(App));
