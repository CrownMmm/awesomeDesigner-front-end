import _ from 'lodash';

export function changeStyleWithScale(value: string | number | undefined) {
  if (value === undefined) {
    return undefined;
  }
  return value;
  // return _.multiply(Number(value), _.divide(parseInt(String(value)), 100));
}
