import { INCREASE, CHANGE_ACTIVE_TAB } from "./actionTypes";

const initialState = {
  count: 100,
  activeTabKey: "home",
  tabs: [
    { key: "home", name: "首页", isActive: true },
    { key: "order", name: "订单", isActive: false },
    { key: "mine", name: "我的", isActive: false },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + action.count };

    case CHANGE_ACTIVE_TAB:
      return { ...state, activeTabKey: action.activeKey };

    default:
      return state;
  }
};
