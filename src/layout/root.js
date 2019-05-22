import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Provider from '../provider';
import reducers from '../reducers/';
import './root.scss';

function Root({ children }) {
  return (
    <div className="root">
      <Provider reducer={reducers}>
        <div className="layout_main mod_main">
          {/* <div className="mod_main__sidebar"></div> */}
          <div className="mod_main__content">
            {children}
          </div>
        </div>
      </Provider>
    </div>
  )
}


export default hot(Root);
