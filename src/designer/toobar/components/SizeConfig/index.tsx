import React, { useEffect } from 'react';
import useCanvasStyleData from '@/hooks/useCanvasStyleData';
import { InputNumber } from 'antd';
import './index.less';

type ConfigType = 'width' | 'height' | 'scale';
const SizeConfig = () => {
  const { canvasStyleData } = useCanvasStyleData();
  useEffect(() => {
    window.addEventListener('storage', (e) => {
      console.log(e);
    });
  }, []);

  const handleChange = (value: number | null, type: ConfigType) => {
    if (!value) return;
    canvasStyleData[type] = value;
  };

  return (
    <div className='size-config-container'>
      <span>画布大小</span>
      <div>
        <InputNumber
          size='small'
          value={canvasStyleData.width}
          onChange={(e) => handleChange(e, 'width')}
        />
      </div>
      <span>*</span>
      <div>
        <InputNumber
          size='small'
          value={canvasStyleData.height}
          onChange={(e) => handleChange(e, 'height')}
        />
      </div>
      <span>画布比例</span>
      <div>
        <InputNumber
          size='small'
          value={canvasStyleData.scale}
          onChange={(e) => handleChange(e, 'scale')}
        />
      </div>
      <span>%</span>
    </div>
  );
};

export default SizeConfig;
