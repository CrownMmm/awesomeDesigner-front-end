import { useState, useEffect, useRef, CSSProperties } from 'react';
import useReactive from './useReactive';

const useCanvasStyleData = () => {
  const state = useReactive({
    // 页面全局数据
    width: 1200,
    height: 740,
    scale: 100,
    color: '#000',
    opacity: 1,
    background: '#fff',
    fontSize: 14
  });

  return {
    canvasStyleData: state
  };
};

export default useCanvasStyleData;
