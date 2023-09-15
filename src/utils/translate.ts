import _ from 'lodash';

export function changeStyleWithScale(
  value: string | number | undefined,
  scale: number = 100
) {
  if (value === undefined) {
    return undefined;
  }
  console.log();

  // return value;
  return _.multiply(Number(value), _.divide(parseInt(String(scale)), 100));
}
