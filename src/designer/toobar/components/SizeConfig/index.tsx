import React from 'react';
import { InputNumber } from 'antd';
import './index.less';

const SizeConfig = () => {
  return (
    <div className='size-config-container'>
      <span>画布大小</span>
      <div>
        <InputNumber size='small' />
      </div>
      <span>*</span>
      <div>
        <InputNumber size='small' />
      </div>
      <span>画布比例</span>
      <div>
        <InputNumber size='small' />
      </div>
      <span>%</span>
    </div>
  );
};

export default SizeConfig;
