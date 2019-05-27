import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Blank from '$ROOT/components/blank/';

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

function App2() {

  const user = useGithub('bailinx');

  if (!user) {
    return <Loading />;
  }

  return (
    <div>
      我是第二个页面，仅仅是Demo
      <b>{user.login}</b>
      <p>{user.bio}</p>
    </div>
  );
}

export default hot(App2);
