import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Root from './layout/root';
import Index from './containers/index/index';
import Page from './containers/page';

type MainLayoutParams = {
  exact?: boolean,
  path: string,
  component: (c: React.ReactNode) => JSX.Element,
  title?: string,
  [key: string]: any
}

function MatchWithMainLayout({ exact, path, component: Component }: MainLayoutParams) {
  return (
    <Route exact={exact} path={path} render={() => {
      return (
        <Root>
          <Component />
        </Root>
      );
    }}></Route>
  );
}

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <MatchWithMainLayout exact path='/' component={Index} title="首页" />
        <MatchWithMainLayout path='/app' component={Page} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
