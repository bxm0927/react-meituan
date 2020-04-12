import * as constants from './actionTypes'

const initialState = {
  tabs: [
    { key: 'index', name: '首页', isActive: true },
    { key: 'order', name: '订单', isActive: false },
    { key: 'mine', name: '我的', isActive: false },
  ],
  activeTabKey: 'index',
  isFetching: false,
  categoryList: [],
  businessList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_ACTIVE_TAB:
      return { ...state, activeTabKey: action.activeKey }

    case constants.SET_CATEGORY_LIST:
      return { ...state, categoryList: action.categoryList }

    case constants.SET_BUSINESS_LIST:
      return { ...state, businessList: [...state.businessList, ...action.businessList] }

    case constants.SET_FETCHING_STATE:
      return { ...state, isFetching: action.isFetching }

    default:
      return state
  }
}
