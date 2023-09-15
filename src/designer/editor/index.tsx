import React, { useState, useEffect } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { getCanvasStyle } from '@/utils/style';
import { changeStyleWithScale } from '@/utils/translate';
import useCanvasStyleData from '@/hooks/useCanvasStyleData';
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
  const { canvasStyleData } = useCanvasStyleData();
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
        width:
          changeStyleWithScale(canvasStyleData.width, canvasStyleData.scale) +
          'px',
        height:
          changeStyleWithScale(canvasStyleData.height, canvasStyleData.scale) +
          'px'
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
