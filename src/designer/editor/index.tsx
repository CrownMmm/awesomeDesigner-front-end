import React, { useState } from 'react';
import { useDrop, useDrag } from 'react-dnd';

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
      style={{ border: '1px solid #000', height: 600, width: 600 }}
      ref={drop}
    >
      {boxes.map((item) => {
        return <Box color={item.color}></Box>;
      })}
    </div>
  );
};

export default Editor;
