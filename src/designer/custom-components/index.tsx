import React from 'react';
import { useDrag } from 'react-dnd';
import './index.less';

// interface ItemType {
//   color: string;
// }
interface BoxProps {
  color: string;
}
function Box(props: BoxProps) {
  const [, drag] = useDrag({
    type: 'box',
    item: {
      color: props.color
    }
    // end: (item, monitor) => {
    //   const dropResult = monitor.getDropResult<any>();
    // },
    // collect: (monitor) => ({
    //   isDragging: monitor.isDragging(),
    //   type: monitor.getItemType(),
    //   item: monitor.getItem(),
    // })
  });

  return (
    <div
      ref={drag}
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
  return (
    <div>
      <Box color='blue' />
      <Box color='red' />
      <Box color='green' />
    </div>
  );
};

export default Components;
