import React, { useState, CSSProperties } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { getCanvasStyle } from '@/utils/style';
import { changeStyleWithScale } from '@/utils/translate';
import Grid from './components/Grid';
import './index.less';

function Box(props: any) {
  const [, drag] = useDrag({
    type: 'box',
    item: {
      color: props.color
    }
  });

  return (
    <div
      ref={drag}
      className='box'
      style={{
        background: props.color || 'blue',
        width: 100,
        height: 100,
        marginBottom: 10
      }}
    ></div>
  );
}

const Editor = () => {
  const [boxes, setBoxes] = useState<any[]>([]);
  const canvasStyleData: CSSProperties = {
    // 页面全局数据
    width: 1200,
    height: 740,
    scale: 100,
    color: '#000',
    opacity: 1,
    background: '#fff',
    fontSize: 14
  };
  const [, drop] = useDrop(() => {
    return {
      accept: 'box',
      drop(item) {
        console.log(item);
        setBoxes((boxes) => [...boxes, item]);
      }
    };
  });
  return (
    <div
      className='editor'
      style={{
        ...getCanvasStyle(canvasStyleData),
        width: changeStyleWithScale(canvasStyleData.width) + 'px',
        height: changeStyleWithScale(canvasStyleData.height) + 'px'
      }}
      ref={drop}
    >
      {boxes.map((item) => {
        return <Box color={item.color}></Box>;
      })}
      <Grid />
    </div>
  );
};

export default Editor;
