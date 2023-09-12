import React from 'react';
import Toobar from './toobar';
import Components from './components';
import Editor from './editor';
import Attributes from './attributes';

import './index.less';

const Designer = () => {
  return (
    <div className='container'>
      <div className='top'>
        <Toobar />
      </div>
      <div className='content'>
        <div className='left'>
          <Components />
        </div>
        <div className='center'>
          <Editor />
        </div>
        <div className='right'>
          <Attributes />
        </div>
      </div>
    </div>
  );
};

export default Designer;
