import { INCREASE } from "./actionTypes";

const initialState = {
  count: 1,
  tabs: [
    { key: "home", name: "首页", isActive: true },
    { key: "order", name: "订单", isActive: false },
    { key: "mine", name: "我的", isActive: false },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return Object.assign({}, state, {
        count: state.count + action.count,
      });

    default:
      return state;
  }
};
