import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Root from './layout/root';
import Index from './containers/index/';
import Page from './containers/page/';

function MatchWithMainLayout({ exact, path, component: Component }) {
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
