import { INCREASE } from './actionTypes'

export const increase = (count) => {
  return {
    type: INCREASE,
    count,
  }
}
