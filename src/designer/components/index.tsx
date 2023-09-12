import React from 'react';
import { useDrag } from 'react-dnd';

interface ItemType {
  color: string;
}
interface BoxProps {
  color: string;
}
function Box(props: BoxProps) {
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

const Components = () => {
  const [, drag] = useDrag({
    type: 'box',
    item: {
      color: 'blue'
    }
  });

  return (
    <div>
      <Box color='blue' />
      <Box color='red' />
      <Box color='green' />
    </div>
  );
};

export default Components;
