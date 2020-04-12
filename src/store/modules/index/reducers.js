import * as constants from './actionTypes'

const initialState = {
  count: 100,
  activeTabKey: 'index',
  tabs: [
    { key: 'index', name: '首页', isActive: true },
    { key: 'order', name: '订单', isActive: false },
    { key: 'mine', name: '我的', isActive: false },
  ],
  categoryData: null,
  businessData: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.INCREASE:
      return { ...state, count: state.count + action.count }

    case constants.CHANGE_ACTIVE_TAB:
      return { ...state, activeTabKey: action.activeKey }

    case constants.SET_CATEGORY_DATA:
      return { ...state, categoryData: action.categoryData }

    case constants.SET_BUSINESS_DATA:
      return { ...state, businessData: action.businessData }

    default:
      return state
  }
}
