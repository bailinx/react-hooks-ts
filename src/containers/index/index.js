import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Blank from '$ROOT/components/blank/';
import connect from '$ROOT/connect';
import { increaseCount, decreaseCount } from '$ROOT/actions/counter';

const { Loading } = Blank;

const useGithub = userName => {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(r => r.json())
      .then(setUser);
  }, [userName]);

  return user;
};

function App({ counter, increaseCount, decreaseCount }) {
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
      <button onClick={() => increaseCount({ num: 1 })}>+1</button>
      <button onClick={() => decreaseCount({ num: 1 })}>-1</button>
    </div>
  );
}

const mapStateToProps = store => ({
  counter: store.counter,
});

const mapDispathToProps = dispatch => ({
  increaseCount: param => dispatch(increaseCount(param)),
  decreaseCount: param => dispatch(decreaseCount(param))
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(hot(App));
