import { INCREASE, CHANGE_ACTIVE_TAB } from "./actionTypes";

export const increase = (count) => ({
  type: INCREASE,
  count,
});

export const changeActiveTab = (activeKey) => ({
  type: CHANGE_ACTIVE_TAB,
  activeKey,
});
