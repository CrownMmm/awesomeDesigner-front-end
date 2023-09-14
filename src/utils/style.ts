const filterKeys = ['width', 'height', 'scale'];

export const getCanvasStyle = (canvasStyleData: any) => {
  const result = {};
  Object.keys(canvasStyleData)
    .filter((key) => !filterKeys.includes(key))
    .forEach((key) => {
      result[key] = canvasStyleData[key];
      if (key === 'fontSize') {
        result[key] += 'px';
      }
    });

  return result;
};
