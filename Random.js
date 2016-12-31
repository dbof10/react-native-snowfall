/**
 * Created by admin on 12/28/16.
 */

import randomInt from 'random-int';

export function getRandom(lower, upper) {
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper);
  return getRandomFloat(max - min) + min;
}

export function getRandomFloat(upper) {
  return Math.random() * upper;
}

export function getRandomInt(upper) {
  return randomInt(upper);
}